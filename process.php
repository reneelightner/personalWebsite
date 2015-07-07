<?php
//add the recipient's address here
$myemail = 'reneelightner@gmail.com';
 
//grab named inputs from html 
	//generate email...
	$name = strip_tags($_POST['name']);
	$email = strip_tags($_POST['email']);
	$message = strip_tags($_POST['message']);
	$to = $myemail;
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message from your website. ".
	" Here are the details:\n Name: $name \n ".
	"Email: $email\n Message \n $message";
	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email";
	//and send!
	mail($to,$email_subject,$email_body,$headers);




?>