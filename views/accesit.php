<div class="user-menu">
	<div class="dropdown">
		<div id="username" class="name">
			<?php
			$user = $_POST["user"];
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
include_once '../parts/header.html';
?>
<div>
	Holaaa estas en la nueva pagina
</div>
<?php
include_once '../parts/footer.html';
?>