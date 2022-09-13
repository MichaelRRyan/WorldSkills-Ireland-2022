extends Control

onready var data_table : Control = get_node("%DataTable")
onready var fetching_data : Label = get_node("%FetchingData")
onready var http : HTTPRequest = get_node("%HTTPRequest")

const DATA_ORDER = [
	"forename",
	"surname",
	"birth_date",
	"birth_town",
	"gender",
	"street",
	"town",
	"class",
	"role",
	"start_date",
]

var persons = []


#-------------------------------------------------------------------------------
func _on_BackToMenu_pressed():
	var _v = get_tree().change_scene("res://scenes/screens/control.tscn")


#-------------------------------------------------------------------------------
func _on_GenerateCertificate_pressed():
	var _v = get_tree().change_scene("res://scenes/screens/registration_cert.tscn")


#-------------------------------------------------------------------------------
func _ready():
	Firebase.retrieve_document("persons", http)


#-------------------------------------------------------------------------------
func _on_HTTPRequest_request_completed(result, response_code, headers, body):
	var result_body := JSON.parse(body.get_string_from_ascii()).result as Dictionary
	print(result_body)
	print(response_code)
	
	if ResponseCodes.SUCCESS == response_code:
		var table_data = [ DATA_ORDER ]
		
		for document in result_body.documents:
			var person = Person.new(document.fields)
			table_data.append(person.get_data_in_order(DATA_ORDER))
			persons.append(person)
		
		data_table.generate_table(table_data)
		fetching_data.hide()
		
	else:
		fetching_data.text = "Unknown error occured. Please try again later."


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
