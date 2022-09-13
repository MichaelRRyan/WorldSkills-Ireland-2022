extends Node

#-------------------------------------------------------------------------------
enum Role {
	NONE = -1,
	STUDENT = 0,
	TEACHER = 1,
	ADMIN = 2,
}


#-------------------------------------------------------------------------------
var username := ""
var password := ""
var role : int = Role.NONE


#-------------------------------------------------------------------------------
func create_user_data(http):
	var user_document = { "role": { "integerValue": Role.NONE } }
	Firebase.create_document("users?documentId=%s" % Firebase.user_info.id, user_document, http)


#-------------------------------------------------------------------------------



#-------------------------------------------------------------------------------
