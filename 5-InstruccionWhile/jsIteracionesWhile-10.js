//Binker David
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorDeCeros;
	let contadorDePositivos;
	let contadorDePares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	sumaNegativos = 0;
	sumaPositivos = 0;
	contador = 0;
	contadorDeCeros = 0;
	contadorDePositivos = 0;
	contadorDeNegativos = 0;
	contadorDePares = 0;

	respuesta="si";

	while(respuesta == "si" || respuesta == "Si")
	{
		contador=contador+1;

		numeroIngresado = prompt("Ingrese numero #" +contador + ": ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt("Error, vuelva a ingresar numero: ");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado % 2 == 0)
		{
			contadorDePares = contadorDePares+1;
		}

		if (numeroIngresado > 0)
		{
			contadorDePositivos = contadorDePositivos+1;

			sumaPositivos = sumaPositivos+numeroIngresado;

		}

		else
		{
			if(numeroIngresado < 0)
			{
				contadorDeNegativos = contadorDeNegativos+1;

				sumaNegativos = sumaNegativos + numeroIngresado;
			}
			else
			{
				if(numeroIngresado==0)
				{
					contadorDeCeros = contadorDeCeros+1;
				}
			}
		}

		respuesta = prompt("¿Desea ingresar otro numero? Si para continuar");
	}

	promedioPositivos = sumaPositivos / contadorDePositivos;
	promedioNegativos = sumaNegativos / contadorDeNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de los negativos es igual a " + sumaNegativos + 
	", " + "la suma de los positivos es igual a " + sumaPositivos + ". La cantidad de positivos ingresados es de "
	+ contadorDePositivos + ". La cantidad de negativos, es de " + contadorDeNegativos
	+ ". La cantidad de ceros ingresados es de " + contadorDeCeros + ". Se ingresó " +
	contadorDePares + " números pares. " + "El promedio de los números positivos es de "+
	promedioPositivos + ". El promedio de los negativos es de "+ promedioNegativos +
	". La diferencia entre positivos y negativos es de: " + diferencia + ".");
} 