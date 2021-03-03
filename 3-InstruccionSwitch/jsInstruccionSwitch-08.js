//Binker David
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado)
	{
		case "Ushuaia":
		case "Bariloche":
			mensaje = "Acá hace frío";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Acá hace calor";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN