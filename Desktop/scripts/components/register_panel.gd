extends VBoxContainer

signal back_pressed()

onready var http : HTTPRequest = get_node("%HTTPRequest")
onready var username : LineEdit = get_node("%UsernameInput")
onready var password : LineEdit = get_node("%PasswordInput")
onready var confirm_password : LineEdit = get_node("%ConfirmPasswordInput")
onready var notification : Label = get_node("%Notification")


#-------------------------------------------------------------------------------
func _on_HTTPRequest_request_completed(
		_result : int, 
		response_code : int,
		_headers : PoolStringArray, 
		body : PoolByteArray
	) -> void:
	var response_body := JSON.parse(body.get_string_from_ascii())
	if response_code != 200:
		notification.text = response_body.result.error.message.capitalize()
	else:
		notification.text = "Registration successful!"
		yield(get_tree().create_timer(2.0), "timeout")
		var _r = get_tree().change_scene("res://scenes/screens/control.tscn")


#-------------------------------------------------------------------------------
func _on_Register_pressed() -> void:
	if (password.text != confirm_password.text 
			or username.text.empty() or password.text.empty()):
		notification.text = "Invalid username or password"
		return
	
	Firebase.register(username.text, password.text, http)


#-------------------------------------------------------------------------------
func _on_Back_pressed():
	emit_signal("back_pressed")


#-------------------------------------------------------------------------------
