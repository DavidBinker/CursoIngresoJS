/* Binker David
while 09(el menor de los pares y el mayor de los negativos ...solo si hay)
*/
function mostrar()
{	// declarar variables

	let numeroIngresado;
	let respuesta;
	let primerNumeroPar;
	let numeroMenorPar;
	let primerNumeroNegativo;
	let NumeroNegativoMayor;

	//iniciar variables


	primerNumeroPar = true;
	primerNumeroNegativo = true;

	for(respuesta = "si"; respuesta=="si"; respuesta = prompt ("¿Desea ingresar otro número?"))
	{
		numeroIngresado = prompt ("ingrese numero: ");
		numeroIngresado = parseInt(numeroIngresado);

		
		if (numeroIngresado%2 == 0)
		{
			if (primerNumeroPar == true || numeroIngresado < numeroMenorPar)
			{
				numeroMenorPar = numeroIngresado;
				primerNumeroPar = false;
			}
		}
		
		if (numeroIngresado < 0)
		{
			if (primerNumeroNegativo == true || NumeroNegativoMayor < numeroIngresado)
			{
				NumeroNegativoMayor = numeroIngresado;
				primerNumeroNegativo = false;
			}
		}
		

	}
	//Termina el For

	if (primerNumeroPar == false && primerNumeroNegativo == false)
	{
		alert ("El menor de los pares es " + numeroMenorPar + " y el mayor de los negativos es " + NumeroNegativoMayor);
	}
	else
	{
		if (primerNumeroPar == false)
		{
			alert ("El menor de los pares es " + numeroMenorPar);
		}
		else
		{
			if (primerNumeroNegativo == false)
			alert ("El mayor de los negativos es " + NumeroNegativoMayor);
		}
	}

}//FIN DE LA FUNCIÓN