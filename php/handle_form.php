<?php

header("Cache-Control: no-cache");
header("Pragma: no-cache");
header("Content-Type: text/xml");
header("Content-Type: text/html; charset=utf-8");

date_default_timezone_set('America/New_York');

$errors = array();
$data = array();

if(empty($_POST['name']))
    $errors['name'] = 'Name is required.';
if(empty($_POST['phone']))
    $errors['phone'] = 'Phone number is required.';

if(!empty($errors)) {
    $data['success'] = false;
} else {
    $to_Email = "russelljr@jonescontractinginc.com";

    $name = $_POST['name'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $date = date("Y-m-d H:i:s");

    $filename = "../contacts/Request from " . $name . " " . $date . ".txt";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    

    $email_subject = "Form submission from ".$name." on ".$date;
    $email_message = wordwrap("Date: ".$date."\r\n".
                        "Name: ".$name."\r\n".
                        "Company: ".$company."\r\n".
                        "Phone: ".$phone."\r\n".
                        "Email: ".$email."\r\n".                        
                        "Message: ".$message, 70, "\r\n");
    
    $fn = file_put_contents($filename, $email_message);

    if($fn === true) {
        $data['success'] = true;
    }
    else {
        $data['success'] = false;
        $errors['file'] = 'Failed to write file.'
    }

//    $sm = mail($to_Email, $email_subject, $email_message, $headers);
    $sm = true;

    if($sm === true) {
        $data['success'] = true;
    }
    else {
        $data['success'] = false;
        $errors['mailer'] = 'Failed to send email.'
    }
}
$data['errors'] = $errors;
echo json_encode($data);

?>
   
