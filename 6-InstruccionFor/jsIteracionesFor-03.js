/*Binker David
al presionar el botón pedir la cantidad de veces que quiero 
repetir el mensaje "Hola UTN FRA"*/
function mostrar()
{
	let numeroIngresado;
	let i;

	numeroIngresado = prompt ("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(i = 0; i < numeroIngresado; i ++)
	{
		console.log(i + "Hola UTN FRA");
	}
}