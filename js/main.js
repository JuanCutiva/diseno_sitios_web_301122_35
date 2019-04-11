jQuery(document).ready(function() {
	var arrayUsers = new Array('administrador','invitado');
	var arrayPasswords = new Array('4dM1n','invitado');
});

function validateUser() {
	var user = document.getElemenById('user').value;
	var password = document.getElemenById('password').value;
	for(i = 0;i <= arrayUsers.length;i++) {
		if(user == arrayUsers[i]) {
			alert('Es un usuario!');
		} else {
			alert('Intruso!');
		}
	}
}