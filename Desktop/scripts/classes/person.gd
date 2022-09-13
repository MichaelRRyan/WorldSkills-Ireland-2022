class_name Person
extends Node

var data = {
	"forename": "",
	"surname": "",
	"birth_date": "",
	"birth_town": "",
	"gender": "",
	"street": "",
	"town": "",
	"class": "",
	"role": -1,
	"start_date": "",
}

const ROLE_STRING = {
	"-1": "None",
	"0": "Student",
	"1": "Teacher",
	"2": "Admin",
}


#-------------------------------------------------------------------------------
func get_data_in_order(data_order : Array) -> Array:
	var data_array = []
	
	for key in data_order:
		if data.has(key):
			
			if "date" in key:
				data_array.append(data[key].split("T")[0])
			elif "role" == key:
				data_array.append(ROLE_STRING[str(data[key])])
			else:
				data_array.append(data[key])
		else:
			print_debug("Person has no \"%s\" key" % str(key))
			
	return data_array


#-------------------------------------------------------------------------------
func _init(fields):
	for key in data.keys():
		if fields.has(key):
			data[key] = fields[key].values()[0]
		else:
			print_debug("Person data has no \"%s\" key" % str(key))


#-------------------------------------------------------------------------------
