<?php
include_once './parts/header.html';
?>
<center>
	<div class="container">
		<div class="login-container">
			<form action="./accesit.php" method="get">
				<span id="title-login">Campus Virtual</span>
				<br><br><br>
				<input type="text" id="user" name="input-user" autocomplete="off" placeholder="Usuario" value="administrador">
				<br><br>
				<input type="password" id="password" name="input-password" placeholder="Contrase&ntilde;a" value="4dM1n">
				<br><br><br>
				<input type="submit" id="login" name="input-login" value="Ingresar" onclick="validateLogIn()">
			</form>
		</div>
	</div>
</center>
<?php
include_once './parts/footer.html';
?>