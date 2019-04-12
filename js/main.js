var arrayUsers = new Array('administrador','invitado');
var arrayPasswords = new Array('4dM1n','invitado');

jQuery(document).ready(function() {
	jQuery('#user').keyup(function(e) {
		if(e.keyCode != 8) {
			jQuery('#userHelpText').remove();
		}
	});
	jQuery('#password').keyup(function(e) {
		if(e.keyCode != 8) {
			jQuery('#passwordHelpText').remove();
		}
	});
});

function validateLogIn() {
	var user = jQuery('#user').val();
	var password = jQuery('#password').val();
	if(user == '') {
		jQuery('#userHelpText').remove();
		jQuery('#user').before('<span id="userHelpText" class="blankInputHelpText">El usuario es requerido para ingresar.</span>');
	}
	if(password == '') {
		jQuery('#passwordHelpText').remove();
		jQuery('#password').before('<span id="passwordHelpText" class="blankInputHelpText">La contraseña es requerida para ingresar.</span>');
	}
	if(arrayUsers.indexOf(user) >= 0 && arrayPasswords.indexOf(password) >= 0) {
		alert('Usuario logeado!');
		window.location.href = '/views/accessit.html';
	}
	/*for(i = 0;i <= arrayUsers.length;i++) {
		if(user == arrayUsers[i]) {
			alert('Es un usuario!');
		} else {
			alert('Intruso!');
		}
	}*/
}