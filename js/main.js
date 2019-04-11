var arrayUsers = new Array('administrador','invitado');
var arrayPasswords = new Array('4dM1n','invitado');

jQuery(document).ready(function() {
	
});

function validateLogIn() {
	var user = jQuery('#user').val();
	var password = jQuery('#password').val();
	if(user == '') {
		jQuery('#user').before('<span class="blankInputHelpText">El usuario es requerido para ingresar.</span>');
	}
	if(password == '') {
		jQuery('#password').before('<span class="blankInputHelpText">La contraseña es requerida para ingresar.</span>');
	}
	if(arrayUsers.indexOf(user) >= 0) {
		jQuery('#password').focus();
	}
	/*for(i = 0;i <= arrayUsers.length;i++) {
		if(user == arrayUsers[i]) {
			alert('Es un usuario!');
		} else {
			alert('Intruso!');
		}
	}*/
}