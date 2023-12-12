<?php
function processForm() {
    $submission_successful = false;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Collect form data
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $address = $_POST['address'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // Your email address where you want to receive emails
        $to = 'malickabee01@gmail.com';

        // Subject for the email
        $email_subject = "New Form Submission: $subject";

        // Message body for the email
        $email_body = "You have received a new form submission:\n\n";
        $email_body .= "First Name: $fname\n";
        $email_body .= "Last Name: $lname\n";
        $email_body .= "Address: $address\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Phone: $phone\n";
        $email_body .= "Subject: $subject\n";
        $email_body .= "Message:\n$message\n";

        // Headers for the email
        $headers = "From: $email";

        // Attempt to send email
        $mail_success = mail($to, $email_subject, $email_body, $headers);

        // Auto-response to the user
        if ($mail_success) {
            $auto_response_subject = "Thank you for your submission";
            $auto_response_message = "Dear $fname,\n\nThank you for submitting the form. We will get back to you as soon as possible.";
            mail($email, $auto_response_subject, $auto_response_message, $headers);
            $submission_successful = true;
        }
    }

    // Return the appropriate message
    if ($submission_successful) {
        return '<p>Thank you for submitting the form!</p>';
    } else {
        return '<p>Form not submitted. Please try again.</p>';
    }
}

// Call the function and echo the result
echo processForm();
?>
