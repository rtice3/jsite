<?php

header("Cache-Control: no-cache");
header("Pragma: no-cache");
header("Content-Type: text/xml");

date_default_timezone_set()

if($_POST) {

	$to_Email = "rtice3@gmail.com";

	$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
	$message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    

    $email_subject = "Form submission from ".$name.": ".$subject;
    $email_message = // date("l jS \of F Y h:i:s A")."\r\n".
    					$name."\r\n".
    					$phone."\r\n".
    					$email."\r\n".
    					$subject."\r\n\r\n".
    					$message;
    
    $sm = mail($to_Email, $email_subject, $email_message);

    echo $sm;
}

?>
   
