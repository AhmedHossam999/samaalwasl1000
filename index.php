<?php
if (!empty($_POST["send"]))
    $name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$toemail = "ahmedhossam4416@gmail.com";

$mailheaders = "Name: " . $name .
    "\r\n" . "Email:" . $email . " \r\n Message:\t" . $message . "\r\n";

if (mail($toemail, $name, $mailheaders)) {
    $messagee = "your information is received successfully.";
}
