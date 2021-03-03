
//	var destinoIngresado =txtIdDestino.value;
//	alert(destinoIngresado);

//Binker David
function mostrar()
{
	//tomo la hora
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			mensaje = "Se encuentra al Sur";
			break;
		case "Cataratas":
			mensaje = "Se encuentra al Norte";
			break;
		case "Mar del plata":
			mensaje = "Se encuentra al Este";
			break;
		case "Ushuaia":
			mensaje = "Se encuentra al Sur";
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN