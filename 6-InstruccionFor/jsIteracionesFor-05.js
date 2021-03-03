/*BINKER David
Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt ("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(; numeroIngresado !=9;)
	{
		numeroIngresado = prompt ("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);		
	}
}