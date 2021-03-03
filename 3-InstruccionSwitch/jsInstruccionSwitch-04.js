//Binker David
function mostrar()
{
	//tomo el mes
	let mesdelaño;
	
	mesdelaño = document.getElementById("txtIdMes").value;
	
	switch(mesdelaño)
	{
		case "Febrero":
			mensaje = "Este mes tiene 28 días";
			break;
		case "Abril":
			mensaje = "Este mes tiene 30 días";
			break;
		case "Junio":
			mensaje = "Este mes tiene 30 días";
			break;
		case "Septiembre":
			mensaje = "Este mes tiene 30 días";
			break;
		case "Noviembre":
			mensaje = "Este mes tiene 30 días";
			break;				
		default:
			mensaje = "Este mes tiene 31 días";
			break;
	}
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN