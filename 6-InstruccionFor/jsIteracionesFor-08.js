/*BINKER David
al presionar el botón pedir un número.
Informar si el numero es PRIMO o no.
*/
function mostrar()
{

	let numeroIngresado;
	let numeroAnterior;
	let limite;

	numeroIngresado=prompt("ingrese numero");

	limite=(numeroIngresado/2);

	for(numeroAnterior=2; numeroAnterior<limite ;numeroAnterior++)
	{
		if(numeroIngresado% numeroAnterior==0 )
		{
			break;
		}
	}

	//Recordatorio para mí
	//Si la iteración llega al número límite y no encuentra divisor, entonces el For
	//sumará 1 más a numeroAnterior, superando el límite y saliendo del loop.
	//Entonces cuando el número es primo, "numeroAnterior" siempre termina superando el límite.
	//Si el número tiene algún divisor, lo encuentra antes o al llegar al límite.
	if(numeroAnterior>limite)
	{
		alert("es primo");
	}else
	{
		alert("No es primo");
	}

}//FIN DE LA FUNCIÓN