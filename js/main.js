var arrayUsers = new Array('administrador','invitado');
var arrayPasswords = new Array('4dM1n','invitado');

jQuery(document).ready(function() {
	jQuery('#user').keyup(function(e) {
		if(e.keyCode != 8) {
			jQuery('#user-helptext').remove();
		}
	});
	jQuery('#password').keyup(function(e) {
		if(e.keyCode != 8) {
			jQuery('#password-helptext').remove();
		}
	});
});

function validateLogIn() {
	var user = jQuery('#user').val();
	var password = jQuery('#password').val();
	if(user == '') {
		jQuery('#user-helptext').remove();
		jQuery('#user').before('<span id="user-helptext" class="blank-input-helptext">El usuario es requerido para ingresar.</span>');
	}
	if(password == '') {
		jQuery('#password-helptext').remove();
		jQuery('#password').before('<span id="password-helptext" class="blank-input-helptext">La contraseña es requerida para ingresar.</span>');
	}
	if(user != '' && password != ''){
		if(arrayUsers.indexOf(user) >= 0 && arrayPasswords.indexOf(password) >= 0) {
		    //window.location.href = '/juancutiva.github.io/views/accesit.php';
		    return true;
	    } else {
	    	jQuery('#user-helptext').remove();
	    	jQuery('#password-helptext').remove();
	    	jQuery('#user').before('<span id="user-helptext" class="blank-input-helptext">Usuario o contraseña incorrectos.</span>');
	    }
	}
	/*for(i = 0;i <= arrayUsers.length;i++) {
		if(user == arrayUsers[i]) {
			alert('Es un usuario!');
		} else {
			alert('Intruso!');
		}
	}*/
}