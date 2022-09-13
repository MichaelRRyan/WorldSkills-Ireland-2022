extends Control

onready var rows : Control = get_node("%Rows")
var data_row_scene = preload("res://scenes/components/data_row.tscn")


#-------------------------------------------------------------------------------
func generate_table(new_data : Array) -> void:
	
	for child in rows.get_children():
		rows.remove_child(child)
		child.queue_free()
	
	if not new_data.empty():
		var data_row : DataRow = data_row_scene.instance()
		rows.add_child(data_row)
		data_row.create_columns(new_data[0], true)
	
	for i in range(1, new_data.size()):
		var data_row : DataRow = data_row_scene.instance()
		rows.add_child(data_row)
		data_row.create_columns(new_data[i])
	

#-------------------------------------------------------------------------------
