extends VBoxContainer

signal back_pressed()

onready var http : HTTPRequest = get_node("%HTTPRequest")
onready var username : LineEdit = get_node("%UsernameInput")
onready var password : LineEdit = get_node("%PasswordInput")
onready var notification : Label = get_node("%Notification")
onready var login : Button = get_node("%Login")

enum RequestState {
	NONE,
	VALIDATING_USER,
	RETRIEVING_USER_DATA,
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
	
	# If the operation was successful.
	if response_code == ResponseCodes.SUCCESS:
		
		# If the user was validated successfully, find their data.
		if RequestState.VALIDATING_USER == request_state:
			Firebase.retrieve_document("users/%s" % Firebase.user_info.id, http)
			request_state = RequestState.RETRIEVING_USER_DATA
			print("Sign in successful. Retrieving data...")
		
		# If the user's data was created or retrieved successfully, save it and enter application.
		elif RequestState.RETRIEVING_USER_DATA == request_state or RequestState.CREATING_USER_DATA == request_state:
			var data = response_body.result as Dictionary
			CurrentUser.role = data.fields.role.integerValue
			
			print("Logged in with role id: " + str(CurrentUser.role))
			var _r = get_tree().change_scene("res://scenes/screens/control.tscn")
	
	# If the user data was not found, try create new data.
	elif response_code == ResponseCodes.NOT_FOUND and RequestState.RETRIEVING_USER_DATA == request_state:
		CurrentUser.create_user_data(http)
		request_state = RequestState.CREATING_USER_DATA
		print("No user data. Creating new data...")
	
	# Any other case, give the user the error.
	else:
		notification.text = response_body.result.error.message.capitalize()
		login.disabled = false
		request_state = RequestState.NONE


#-------------------------------------------------------------------------------
func _on_Login_pressed() -> void:
	if RequestState.NONE != request_state:
		return 
	
	if username.text.empty() or password.text.empty():
		notification.text = "Invalid username or password"
		return
	
	Firebase.login(username.text, password.text, http)
	
	request_state = RequestState.VALIDATING_USER
	notification.text = "Authenticating..."
	login.disabled = true


#-------------------------------------------------------------------------------
func _on_Back_pressed():
	emit_signal("back_pressed")


#-------------------------------------------------------------------------------
