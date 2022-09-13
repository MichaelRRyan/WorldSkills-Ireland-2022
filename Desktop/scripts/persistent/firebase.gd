extends Node

const PROJECT_ID := "worldskills-ireland-2022"

const REGISTER_URL := "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=%s"
const LOGIN_URL := "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=%s"
const FIRESTORE_URL := "https://firestore.googleapis.com/v1/projects/%s/databases/(default)/documents/" % PROJECT_ID

var user_info := {}

#-------------------------------------------------------------------------------
# ======== AUTH ========
#-------------------------------------------------------------------------------
func register(email : String, password : String, http : HTTPRequest) -> void:
	_authorise_user(email, password, http, REGISTER_URL  % Secret.API_KEY)


#-------------------------------------------------------------------------------
func login(email : String, password : String, http : HTTPRequest) -> void:
	_authorise_user(email, password, http, LOGIN_URL  % Secret.API_KEY)


#-------------------------------------------------------------------------------
# ======== CRUD ========
#-------------------------------------------------------------------------------
func create_document(path : String, fields : Dictionary, http : HTTPRequest) -> void:
	var document := { "fields": fields }
	var body := to_json(document)
	var url := FIRESTORE_URL + path
	var _r = http.request(url, _get_request_headers(), false, HTTPClient.METHOD_POST, body)


#-------------------------------------------------------------------------------
func retrieve_document(path : String, http : HTTPRequest) -> void:
	var url := FIRESTORE_URL + path
	var _r = http.request(url, _get_request_headers(), false, HTTPClient.METHOD_GET)


#-------------------------------------------------------------------------------
func update_document(path : String, fields : Dictionary, http : HTTPRequest) -> void:
	var document := { "fields": fields }
	var body := to_json(document)
	var url := FIRESTORE_URL + path
	var _r = http.request(url, _get_request_headers(), false, HTTPClient.METHOD_PATCH, body)


#-------------------------------------------------------------------------------
func delete_document(path : String, http : HTTPRequest) -> void:
	var url := FIRESTORE_URL + path
	var _r = http.request(url, _get_request_headers(), false, HTTPClient.METHOD_DELETE)


#-------------------------------------------------------------------------------
# ======== PRIVATE ========
#-------------------------------------------------------------------------------
func _get_user_info(result : Array) -> Dictionary:
	var result_body := JSON.parse(result[3].get_string_from_ascii()).result as Dictionary
	return {
		"token": result_body.idToken,
		"id": result_body.localId,
	}


#-------------------------------------------------------------------------------
func _get_request_headers() -> PoolStringArray:
	return PoolStringArray([
		"Content-Type: application/json",
		"Authorization: Bearer %s" % user_info.token
	])


#-------------------------------------------------------------------------------
func _authorise_user(
		email : String, 
		password : String, 
		http : HTTPRequest, 
		url : String
	) -> void:
	
	var body := {
		"email": email,
		"password": password,
		"returnSecureToken": true,
	}
	
	var _r = http.request(url, [], false, HTTPClient.METHOD_POST, to_json(body))
	var result := yield(http, "request_completed") as Array
	if result[1] == 200:
		user_info = _get_user_info(result)


#-------------------------------------------------------------------------------
