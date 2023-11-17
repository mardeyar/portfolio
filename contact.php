<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $recipient = "deyarmondmark@gmail.com";
    $emailSubject = "New Message: $subject";
    $emailBody = "***You've received a new message***\n\nName: $name\nEmail: $email\n\n$message";

    $headers = "From: $email";

    // Send
    if(mail($recipient, $emailSubject, $emailBody, $headers)) {
        echo "Email sent";
    } else {
        echo "Failed to send email";
    }
}

?>