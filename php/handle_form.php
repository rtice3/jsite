<?php

header("Cache-Control: no-cache");
header("Pragma: no-cache");
header("Content-Type: text/xml");

date_default_timezone_set('America/New_York');

if($_POST) {

	$to_Email = "rtice3@gmail.com";

	$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
	$message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

	$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    

    $email_subject = "Form submission from ".$name.": ".$subject;
    $email_message = wordwrap(date("l jS \of F Y h:i:s A")."\r\n".
    					$name."\r\n".
    					$phone."\r\n".
    					$email."\r\n".
    					$subject."\r\n\r\n".
    					$message, 70, "\r\n");
    
    $sm = mail($to_Email, $email_subject, $email_message);

    if($sm) {
    	echo true;
    }
    else {
    	echo false;
    }
    echo $sm;
}

?>
   
