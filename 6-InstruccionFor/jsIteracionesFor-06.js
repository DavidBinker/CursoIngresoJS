//Binker David
function mostrar()
{
	let numeroIngresado;
	let i;
	let contadorDePares;

	contadorDePares = 0;
	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 0; i < numeroIngresado; i++)
	{
		if (i % 2 == 0)
		{
			contadorDePares++;
			console.log(i);
		}
	}

	console.log("Hay " + contadorDePares + " números pares");

}//FIN DE LA FUNCIÓN