<?php
require_once('headers.php');

/*
	Insecure dummy api for testing the fetch request from the Apps.
*/

define( 'ROOT', dirname( __FILE__ ) );
require_once ROOT. '/chromephp/ChromePhp.php';

if(!isset($HTTP_RAW_POST_DATA)){
	$HTTP_RAW_POST_DATA = file_get_contents('php://input');
}

$decodeHTTP = urldecode($HTTP_RAW_POST_DATA);
$headers = getallheaders();
$query = array();
parse_str(substr($decodeHTTP, 1, strlen($decodeHTTP)), $query);
$response = array();

\ChromePHP::info($decodeHTTP);

$json = json_decode($decodeHTTP);
if(isset($json->username)
	&& isset($json->password)){
		$username = $json->username;
		$password = $json->password;
		if ($username === 'bob' && $password === 'abcde') {
			$response = json_encode(array('code' => 200, 'message' => 'Success'));
		} else {
			$response = json_encode(array('code' => 401, 'message' => 'Invalid Credentials'));
		}
} else {
	$response = json_encode(array('code' => 403, 'message' => 'Forbidden!'));
}

echo $response;
?>
