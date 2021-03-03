//Binker David
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "No se viaja";
					break;
			}
			break;

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "se viaja";
					break;
			}
			break;
			
		default:
			mensaje = "se viaja"
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN