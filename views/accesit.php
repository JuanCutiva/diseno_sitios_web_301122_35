<?php
include_once '../parts/header.html';
?>
<div class="user-menu">
	<div class="dropdown">
		<div id="username" class="name">
			<img src="/juancutiva.github.io/img/user-profile-img.png" alt="user-img">
			<?php
			$user = $_POST["input-user"];
			echo $user;
			?>
		</div>
		<div class="dropdown-content">
			<a href="#">Mi cuenta</a>
			<a href="#">Configuración</a>
			<a href="/juancutiva.github.io/index.html">Cerrar sesión</a>
		</div>
	</div>
</div>
<?php
include_once '../parts/footer.html';
?>