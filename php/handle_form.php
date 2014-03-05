<?php

header("Cache-Control: no-cache");
header("Pragma: no-cache");
header("Content-Type: text/xml");

$ip = $_SERVER['REMOTE_ADDR'];
$msg = "Hello World to user from " . $ip . " at ". date("h:i:s A");

print "<?xml version='1.0' encoding='UTF-8'?>";
print "<message>$msg</message>";

if($_POST)
{
    if(!isset['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		die();
	}

	$to_Email = "rtice3@gmail.com";

	$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
	$message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    
    
    //proceed with PHP email.
    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n".
    'X-Mailer: PHP/' . phpversion();
    
    @mail($to_Email, 'Form submission: '.$subject, $message .'  -'.$name, $headers);

?>
    alert("Hi ".$name .", Thank you for your email! We will get be in touch shortly.");
<?php
}
?>