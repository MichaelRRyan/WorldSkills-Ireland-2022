extends VBoxContainer

signal back_pressed()

onready var http : HTTPRequest = get_node("%HTTPRequest")
onready var username : LineEdit = get_node("%UsernameInput")
onready var password : LineEdit = get_node("%PasswordInput")
onready var confirm_password : LineEdit = get_node("%ConfirmPasswordInput")
onready var notification : Label = get_node("%Notification")
onready var register : Button = get_node("%Register")

enum RequestState {
	NONE,
	REGISTERING_USER,
	CREATING_USER_DATA,
}

var request_state = RequestState.NONE


#-------------------------------------------------------------------------------
func _on_HTTPRequest_request_completed(
		_result : int, 
		response_code : int,
		_headers : PoolStringArray, 
		body : PoolByteArray
	) -> void:
		
	var response_body := JSON.parse(body.get_string_from_ascii())
	
	# Allows the Firebase class to handle this signal first.
	yield(get_tree().create_timer(0.01), "timeout")
	
	if ResponseCodes.SUCCESS == response_code:
		if RequestState.REGISTERING_USER == request_state:
			CurrentUser.create_user_data(http)
			request_state = RequestState.CREATING_USER_DATA
			print("Registration successful. Creating new data...")
		
		elif RequestState.CREATING_USER_DATA == request_state:
			var data = response_body.result as Dictionary
			CurrentUser.role = data.fields.role.integerValue
			
			print("Logged in with role id: " + str(CurrentUser.role))
			notification.text = "Registration successful. Taking you to the application..."
			
			yield(get_tree().create_timer(2.0), "timeout")
			var _r = get_tree().change_scene("res://scenes/screens/control.tscn")
			
	else:
		notification.text = response_body.result.error.message.capitalize()
		register.disabled = false


#-------------------------------------------------------------------------------
func _on_Register_pressed() -> void:
	if (password.text != confirm_password.text 
			or username.text.empty() or password.text.empty()):
		notification.text = "Invalid username or password"
		return
	
	Firebase.register(username.text, password.text, http)
	
	request_state = RequestState.REGISTERING_USER
	notification.text = "Registering..."
	register.disabled = true


#-------------------------------------------------------------------------------
func _on_Back_pressed():
	emit_signal("back_pressed")


#-------------------------------------------------------------------------------
