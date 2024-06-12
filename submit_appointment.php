<?php
// submit_appointment.php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vet_clinic";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];

$sql = "INSERT INTO appointments VALUES ('$name', '$email', '$phone')";

$response = [];
if ($conn->query($sql) === TRUE) {
    // Send email
    $to = $email;
    $subject = "Appointment Confirmation";
    $message = "Hello $name,\n\nYour appointment is confirmed for $date at $time.\n\nThank you,\nVeterinary Clinic";
    $headers = "From: no-reply@vetclinic.com"; 

    

    if (mail($to, $subject, $message, $headers)) {
        $response['message'] = "Appointment booked and email sent!";
    } else {
        $response['message'] = "Appointment booked, but email could not be sent.";
    }
} else {
    $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
echo json_encode($response);
?>
