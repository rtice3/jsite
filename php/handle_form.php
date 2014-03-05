<?php

header("Cache-Control: no-cache");
header("Pragma: no-cache");
header("Content-Type: text/xml");

if($_POST) {

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
    
    @mail($to_Email, 'Form submission: '.$subject, $message .'  -'.$name);

    echo "Hi ".$name .", Thank you for your email! We will be in touch with you shortly.";
}

?>
   
