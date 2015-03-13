<?php

header("Cache-Control: no-cache");
header("Pragma: no-cache");
header("Content-Type: text/xml");
header("Content-Type: text/html; charset=utf-8");

date_default_timezone_set('America/New_York');

function header_status($statusCode) {
    static $status_codes = null;

    if ($status_codes === null) {
        $status_codes = array (
            100 => 'Continue',
            101 => 'Switching Protocols',
            102 => 'Processing',
            200 => 'OK',
            201 => 'Created',
            202 => 'Accepted',
            203 => 'Non-Authoritative Information',
            204 => 'No Content',
            205 => 'Reset Content',
            206 => 'Partial Content',
            207 => 'Multi-Status',
            300 => 'Multiple Choices',
            301 => 'Moved Permanently',
            302 => 'Found',
            303 => 'See Other',
            304 => 'Not Modified',
            305 => 'Use Proxy',
            307 => 'Temporary Redirect',
            400 => 'Bad Request',
            401 => 'Unauthorized',
            402 => 'Payment Required',
            403 => 'Forbidden',
            404 => 'Not Found',
            405 => 'Method Not Allowed',
            406 => 'Not Acceptable',
            407 => 'Proxy Authentication Required',
            408 => 'Request Timeout',
            409 => 'Conflict',
            410 => 'Gone',
            411 => 'Length Required',
            412 => 'Precondition Failed',
            413 => 'Request Entity Too Large',
            414 => 'Request-URI Too Long',
            415 => 'Unsupported Media Type',
            416 => 'Requested Range Not Satisfiable',
            417 => 'Expectation Failed',
            422 => 'Unprocessable Entity',
            423 => 'Locked',
            424 => 'Failed Dependency',
            426 => 'Upgrade Required',
            500 => 'Internal Server Error',
            501 => 'Not Implemented',
            502 => 'Bad Gateway',
            503 => 'Service Unavailable',
            504 => 'Gateway Timeout',
            505 => 'HTTP Version Not Supported',
            506 => 'Variant Also Negotiates',
            507 => 'Insufficient Storage',
            509 => 'Bandwidth Limit Exceeded',
            510 => 'Not Extended'
        );
    }

    if ($status_codes[$statusCode] !== null) {
        $status_string = $statusCode . ' ' . $status_codes[$statusCode];
        header($_SERVER['SERVER_PROTOCOL'] . ' ' . $status_string, true, $statusCode);
    }
}

if($_POST) {

	$to_Email = "russelljr@jonescontractinginc.com";

	$name = $_POST["name"];
    $company = $_POST["company"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$message = $_POST["message"];
    $date = date("Y-m-d H:i:s");

    $filename = "../contacts/Request from " . $name . " " . $date . ".txt";

	$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    

    $email_subject = "Form submission from ".$name." on ".$date;
    $email_message = wordwrap($date."\r\n".
    					$name."\r\n".
                        $company."\r\n".
    					$phone."\r\n".
    					$email."\r\n".    					
    					$message, 70, "\r\n");
    
    $fn = file_put_contents($filename, $email_message);

//    $sm = mail($to_Email, $email_subject, $email_message);
    $sm = true;

    $data = array();

    if($sm === true) {
    	$data['success'] = true;
    }
    else {
    	$data['success'] = false;
    }
    echo json_encode($data);
}

?>
   
