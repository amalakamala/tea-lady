function mostrarData() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var direccion = document.getElementById("address").value;
	var selector = document.getElementById("selector").value;


	if(nombre == ""){
 		alert("Ingrese Nombre");
 		return false;
	}else if( apellido == "") {
 		alert("Ingrese Apellido");
 		return false;
	}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email)) ) {
 		alert("Ingrese correctamente su Email");
 		return false;
	}else if(direccion == "") {
 		alert("Ingrese correctamente su Dirección");
 		return false;
	}else if(!(/\+569[0-9]{8}/.test(phone))) {
 		alert("Ingrese correctamente su Télefono");
 		return false;
	}else if(!document.getElementById("selector").value){
		alert("Elige tu set de té favorito");
		return false;
	}else if(!document.getElementById("checkbox").checked){
		alert("Creo que deberias recibir nuestro Newsletter");
		return false;
	}else{
		document.getElementById("nombre").value ="";
		document.getElementById("apellido").value = "";
		document.getElementById("email").value = "";
		document.getElementById("phone").value = "";
		document.getElementById("address").value = "";
		document.getElementById("selector").value = "";	
		document.getElementById("checkbox").checked = "";	
		datosUsuario(nombre,apellido,email,phone,direccion,selector);
	}	

}

function datosUsuario(nombre,apellido,email,phone,direccion,selector){
	var datosClientes = document.getElementById("clientes");
	var datosCompra = document.getElementById("productos");

	datosClientes.innerHTML += "Señora : " + nombre + " " + apellido + "<br>";
	datosClientes.innerHTML += "Email : " + email + "<br>";
	datosClientes.innerHTML += "Teléfono : " + phone + "<br>";
	datosClientes.innerHTML += "Dirección : " + direccion + "<br>";	

	if(selector == "Pack de té clásico"){
		datosCompra.innerHTML = selector + " <p>Has elegido nuestro clásico té Negro<p>"
	}else if(selector == "Pack frutales"){
		datosCompra.innerHTML = selector + "<p>Has elegido nuestro té de Hierbas y té con aromatizado con fruta<p>"
	}else if(selector == "Pack variedades"){
		datosCompra.innerHTML = selector + "<p>Has elegido nuestros Tés verde, rojo y blanco<p>"
	}

}



