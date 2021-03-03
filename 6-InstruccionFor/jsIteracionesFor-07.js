/*BINKER David
Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 
al número ingresado, y mostrar la cantidad de numeros divisores encontrados. */
function mostrar()
{
	let numeroIngresado;
	let i;
	let contadorDeDivisores;

	contadorDeDivisores = 0;
	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 1; i < numeroIngresado || i == numeroIngresado; i++)
	{
		if (numeroIngresado % i == 0)
		{
			contadorDeDivisores++;
			console.log(i);
		}
	}

	console.log("Hay " + contadorDeDivisores + " números divisores");

}//FIN DE LA FUNCIÓN