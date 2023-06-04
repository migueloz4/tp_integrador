function calcularResumen(cantidad, categoria){
	let porcentaje;
	if(categoria=='estudiante'){
		porcentaje=0.20;
	}
	else if(categoria=='trainee'){
		porcentaje=0.50;
	}
	else{
		porcentaje=0.15;
	}
	let resultado = (200*cantidad)*porcentaje; 
	return resultado;
}

function obtenerCantidad(){
	var inputElemento = document.getElementById("cantidad");
	var cantidad = inputElemento.value; 
	return cantidad;
}
function obtenerCategoria(){
	var categoria = document.getElementById("categoria").value;
	return categoria; 
}

function mostrarResumen(){
	var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Total a pagar: $"+calcularResumen(obtenerCantidad(),obtenerCategoria());
}
function borrarResumen(){
	var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";
}

function borrarDatos(){
	var inputNombre = document.getElementById("nombre");
	var inputApellido = document.getElementById("apellido");
	var inputCorreo = document.getElementById("correo");
	var inputCantidad = document.getElementById("cantidad");

	inputNombre.value = "";
	inputApellido.value = "";
	inputCorreo.value = "";
	inputCantidad.value = "";
	borrarResumen();
}