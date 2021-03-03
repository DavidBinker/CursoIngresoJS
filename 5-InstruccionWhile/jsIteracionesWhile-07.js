//Binker David
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let respuesta


	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta == "si" || respuesta == "Si")
	{
		contador=contador+1

		numeroIngresado = prompt("Ingrese numero #" +contador + ": ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt("Error, vuelva a ingresar numero: ");
			numeroIngresado = parseInt(numeroIngresado)
		}

		acumulador = acumulador+numeroIngresado

		respuesta = prompt("¿Desea ingresar otro numero? Si para continuar")
	}
	
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN