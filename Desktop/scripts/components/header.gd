extends Panel

export var title_string : String = "Title" setget set_title


func set_title(value : String) -> void:
	$Title.text = value
