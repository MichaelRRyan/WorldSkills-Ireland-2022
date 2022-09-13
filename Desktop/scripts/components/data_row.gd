class_name DataRow
extends Control


#-------------------------------------------------------------------------------
func create_columns(row_data : Array, is_header : bool = false) -> void:
	for column in row_data:
		var label = Label.new()
		label.text = column
		
		if is_header:
			label.uppercase = true
			
		add_child(label)


#-------------------------------------------------------------------------------
