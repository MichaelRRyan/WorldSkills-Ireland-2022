extends Control

onready var options_container : Control = get_node("%OptionsContainer")
onready var login_panel : Control = get_node("%LoginPanel")
onready var register_panel : Control = get_node("%RegisterPanel")


#-------------------------------------------------------------------------------
func _on_Login_pressed():
	#var _v = get_tree().change_scene("res://scenes/screens/control.tscn")
	options_container.hide()
	login_panel.show()


#-------------------------------------------------------------------------------
func _on_Register_pressed():
	#var _v = get_tree().change_scene("res://scenes/screens/control.tscn")
	options_container.hide()
	register_panel.show()


#-------------------------------------------------------------------------------
func _on_LoginPanel_back_pressed():
	login_panel.hide()
	options_container.show()


#-------------------------------------------------------------------------------
func _on_RegisterPanel_back_pressed():
	register_panel.hide()
	options_container.show()


#-------------------------------------------------------------------------------
