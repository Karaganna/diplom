<?php
session_start();

require_once('db.php');

$login = $_POST['login'];
$pass = $_POST['pass'];
$email = $_POST['email'];

// Проверка на пустые поля
if(empty($login) || empty($pass) || empty($email)){
    echo "Заполните все поля";
} else {
    $sql = "INSERT INTO `users` (login, pass, email) VALUES ('$login', '$pass', '$email')";

    if ($conn->query($sql) === TRUE) {
        $_SESSION['login'] = $login; // Сохранение логина в сессию
        header("Location: /path/to/other/folder/account.php"); // Перенаправление в личный кабинет
        exit();
    } else {
        echo "Ошибка: " . $conn->error;
    }

    $conn->close();
}
?>
