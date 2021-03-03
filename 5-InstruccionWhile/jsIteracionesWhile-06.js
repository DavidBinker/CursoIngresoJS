//Binker David
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;


	contador=0;
	acumulador=0;

	while(contador<5)
	{
		contador=contador+1;

		numeroIngresado = prompt("Ingrese numero #" +contador + ": ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt("Error, vuelva a ingresar numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}

		acumulador = acumulador+numeroIngresado;
	}
	
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN