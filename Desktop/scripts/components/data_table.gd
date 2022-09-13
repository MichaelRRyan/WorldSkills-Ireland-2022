extends Control

var data_collection = [
	[ "Forename", "Surname", "Birthday", "Class", "Address", "Start Date", "End Date" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
	[ "Michael", "Rainsford Ryan", "15th May 2001", "Skill09-2018", "Athy", "Skill-09 IT Software Solutions for Business", "03.09.18", "03.09.20" ],
]

var data_row_scene = preload("res://scenes/components/data_row.tscn")

#-------------------------------------------------------------------------------
func _ready():
	generate_table(data_collection)


#-------------------------------------------------------------------------------
func generate_table(new_data : Array) -> void:
	
	if not new_data.empty():
		var data_row : DataRow = data_row_scene.instance()
		get_node("%Rows").add_child(data_row)
		data_row.create_columns(new_data[0], true)
	
	for i in range(1, new_data.size()):
		var data_row : DataRow = data_row_scene.instance()
		get_node("%Rows").add_child(data_row)
		data_row.create_columns(new_data[i])
	

#-------------------------------------------------------------------------------
