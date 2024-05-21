<?php
session_start();

require_once('db.php');

$login = $_POST['login'];
$pass = $_POST['pass'];

if(empty($login) || empty($pass)){
    echo "Заполните все поля";
} else {
    $sql = "SELECT * FROM `users` WHERE login = '$login' AND pass = '$pass'";
    $result = $conn->query($sql);

    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        $_SESSION['login'] = $row['login'];
        header("Location: /path/to/other/folder/account.php"); // Перенаправление в личный кабинет
        exit();
    } else {
        echo "Нет такого пользователя";
    }

    $conn->close();
}
?>
