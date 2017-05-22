function mostrarData() {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var direccion = document.getElementById("address").value;
	var selector = document.getElementById("selector").value;

	var fomulario = document.getElementsByClassName("formulario")[0];
	var form = document.getElementById("el-formulario");


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

		
		form.classList.add("formulario-dos");
		
	}	

}

function datosUsuario(nombre,apellido,email,phone,direccion,selector){
	var datosClientes = document.getElementById("clientes");
	var datosCompra = document.getElementById("productos");

	datosClientes.innerHTML += "Señora : " + nombre + " " + apellido + "<br>";
	datosClientes.innerHTML += "Email : " + email + "<br>";
	datosClientes.innerHTML += "Teléfono : " + phone + "<br>";
	datosClientes.innerHTML += "Dirección : " + direccion + "<br><br>";	


	var teNegro = document.createElement("span");
	var textoTeNegro = document.createTextNode("Pack de té clásico\n Has elegido nuestro clásico té Negro \nEl té negro cuenta con cinco propiedades fundamentales. Estas son la de ser antioxidante, astringente, diurético, reconfortante y, además, estimulante. El té negro es una de las más maravillosas bebidas y esto no se debe solamente a su sabor. Sus magníficas cualidades la transforman en una infusión con todas las letras")
	var fotoTeNegro = document.createElement("img");
	fotoTeNegro.setAttribute("class","te-negro-f");
	teNegro.appendChild(textoTeNegro);
	teNegro.appendChild(fotoTeNegro);

	var teFruta = document.createElement("span");
	var textoTeFruta = document.createTextNode("Pack frutales\n Has elegido Hierbas y té con aromatizado con fruta \nLas frutas se combinan con plantas y especias para crear una gama de infusiones sin teína ligeras y refrescantes. Cada mezcla amplifica las cualidades de sus ingredientes y crea una infusión singular, ideal para tomar durante todo el día")
	var fotoTeFruta = document.createElement("img");
	fotoTeFruta.setAttribute("class","te-fruta-f");
	teFruta.appendChild(textoTeFruta);
	teFruta.appendChild(fotoTeFruta);

	var teVariedades = document.createElement("span");
	var textoTeVariedades = document.createTextNode("Pack variedades\n Has elegido Té verde, rojo y blanco \nLa diferencia entre los tipos de Té consiste en la forma en la que son procesados. Los diferentes tipos de té se destacan por el proceso al que son sometidos. Las hojas de la Camelia Sinensis se marchitan y oxidan si no se secan rápidamente después de que fueron cosechadas, las hojas se tornan oscuras rápidamente debido a que la clorofila se abre y desata un color cobrizo.")
	var fotoTeVariedades = document.createElement("img");
	fotoTeVariedades.setAttribute("class","te-variedades-f");
	teVariedades.appendChild(textoTeVariedades);
	teVariedades.appendChild(fotoTeVariedades);


	if(selector == "Pack de té clásico"){
		datosCompra.appendChild(teNegro);
	}else if(selector == "Pack frutales"){
		datosCompra.appendChild(teFruta);
	}else if(selector == "Pack variedades"){
		datosCompra.appendChild(teVariedades);
	}

}



