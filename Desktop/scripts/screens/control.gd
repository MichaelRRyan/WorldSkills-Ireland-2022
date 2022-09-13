extends Control


#-------------------------------------------------------------------------------
func _on_ViewDatabase_pressed():
	var _v = get_tree().change_scene("res://scenes/screens/data.tscn")


#-------------------------------------------------------------------------------
func _on_SignOut_pressed():
	var _v = get_tree().change_scene("res://scenes/screens/authentication.tscn")


#-------------------------------------------------------------------------------
