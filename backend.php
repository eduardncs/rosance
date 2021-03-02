<?php
function showSuccess($message){
    echo "<script>toast(".$message.")</script>";
}
function showError($message){
    echo "<script>Etoast('".$message."')</script>";
}
if(isset($_POST["action"]) && $_POST['action'] === "sendEmail"){
    if(empty($_POST['data']['name']) or empty($_POST['data']['email']) or empty($_POST['data']['message']) or empty($_POST['data']['title']))
        return showError("Please fill out all fields...");
    $subject = $_POST['data']['title']." from ".$_POST['data']['name'];
    $message = $_POST['data']['message']." message sent from https://rosance.com by ".$_POST['data']['email'];
    $header = "From: ".$_POST['data']['email']."\r\n";
    $header .= "MIME-Version: 1.0 \r\n";
    $header .= "Content-type: text/html\r\n";

    $return = mail("eduardncs@gmail.com",$subject,$message, $header);
    if($return)
        echo showSuccess("Thank you for contacting me. I will get back to you as soon as possible");
    else
        echo showError("Ooops , it\'s embarasing it looks like something went wrong , please use other contact method ...");
}
?>