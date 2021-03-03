//Binker David
function mostrar()
{
	//tomo el mes
	let mesdelaño
	
	mesdelaño = document.getElementById("txtIdMes").value;
	
	switch(mesdelaño)
	{
		case "Febrero":
			mensaje = " Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días"
			break;
	}
	
	alert(mensaje)

}//FIN DE LA FUNCIÓN