<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Registration Form 5</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="../CSS/reg.css">
</head>

<body>
  <div class="container">
    <div class="tabs">
      <div id="btn"></div>
      <button type="button" class="toggle-btn" onclick="login()">Log In</button>
      <button type="button" class="toggle-btn" onclick="registration()">Register</button>
    </div>
    <div class="social-icons">
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
    </div>

    <form action="auth.php" method="post" id="login" class="form">
      <input type="text" class="input-filed" placeholder="User Id required" name="login">
      <input type="text" class="input-filed" placeholder="Password" name="pass">
      <input type="checkbox" class="check-box"><span>Remember Password</span>
      <button type="submit" class="submit-btn">Log in</button>
    </form>

    <form action="reg.php" method="post" id="register" class="form">
      <input type="text" class="input-filed" placeholder="User Id" name="login">
      <input type="email" class="input-filed" placeholder="Email Id" name="email">
      <input type="text" class="input-filed" placeholder="Password" name="pass"> 
      <input type="checkbox" class="check-box"><span>I agree to the terms & conditions</span>
      <button type="submit" class="submit-btn">Register</button>
    </form>
  </div>

  <script>
    var logIn = document.getElementById("login");
    var register = document.getElementById("register");
    var button = document.getElementById("btn");

    function registration() {
      logIn.style.left = "-400px";
      register.style.left = "50px";
      button.style.left = "110px";
    }

    function login() {
      logIn.style.left = "50px";
      register.style.left = "450px";
      button.style.left = "0";
    }
  </script>
</body>

</html>