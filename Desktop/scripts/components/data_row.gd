class_name DataRow
extends Control


#-------------------------------------------------------------------------------
func create_columns(row_data : Array, is_header : bool = false) -> void:
	if is_header:
		$CheckBox.disabled = true
		$CheckBox.modulate = Color(0, 0, 0, 0)
	
	for column in row_data:
		var label = Label.new()
		label.text = str(column)
		label.rect_min_size.x = 200.0
		
		if is_header:
			label.uppercase = true
			
		add_child(label)
		add_child(VSeparator.new())


#-------------------------------------------------------------------------------
