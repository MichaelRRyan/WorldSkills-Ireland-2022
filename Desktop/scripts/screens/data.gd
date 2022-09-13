extends Control


#-------------------------------------------------------------------------------
func _on_BackToMenu_pressed():
	var _v = get_tree().change_scene("res://scenes/screens/control.tscn")


#-------------------------------------------------------------------------------
func _on_GenerateCertificate_pressed():
	var _v = get_tree().change_scene("res://scenes/screens/registration_cert.tscn")


#-------------------------------------------------------------------------------
func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	var result_body := JSON.parse(body.get_string_from_ascii()).result as Dictionary
	print(result_body)
	print(response_code)
	
#	match response_code:
#		404:
#			notification.text = "Please enter your information."
#			new_document = true
#			return
#		200:
#			if information_sent:
#				notification.text = "Information saved successfully."
#				information_sent = false
#			set_competitor(result_body.fields)


#-------------------------------------------------------------------------------
func _on_Submit_pressed():
	pass
	#competitor.name = { "stringValue": name_input.text }
	#competitor.date_of_birth = { "timestampValue": dob_input.text }
	#competitor.is_male = { "booleanValue": is_male_input.pressed }
	#competitor.county = { "stringValue": county_input.text }
	#competitor.in_attendance = { "booleanValue": in_attendance_input.pressed }

#	if new_document:
#		Firebase.create_document("competitors?documentId=%s" % Firebase.user_info.id, competitor, http)
#	else:
#		Firebase.update_document("competitors/%s" % Firebase.user_info.id, competitor, http)
#	information_sent = true


#-------------------------------------------------------------------------------
