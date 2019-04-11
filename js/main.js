jQuery(document).ready(function() {
	var arrayUsers = new Array('administrador','invitado');
	var arrayPasswords = new Array('4dM1n','invitado');
});

function validateUser() {
	var user = document.getElementById('user').value;
	var password = document.getElementById('password').value;
	for(i = 0;i <= arrayUsers.length;i++) {
		if(user == arrayUsers[i]) {
			alert('Es un usuario!');
		} else {
			alert('Intruso!');
		}
	}
}