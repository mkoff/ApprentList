<?php
$to  = 'm.kofanov@gmail.com';

$subject = 'Mail from ApprentList.com';

$message = 'User' . $_POST['name'] . ' sent you a email:<br />' . $_POST['email'] . '<br />
and chose ' . $_POST['select-apprent-type'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

$headers .= 'To: ApprentList <m.kofanov@gmail.com>' . "\r\n";
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";

mail($to, $subject, $message, $headers);
?>