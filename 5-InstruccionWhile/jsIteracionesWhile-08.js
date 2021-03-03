//Binker David
function mostrar()
{
	let contador;
	let contadorDeNegativos;
	let acumulador;
	let numeroIngresado;
	let respuesta;
	let multiplicador;


	contadorDeNegativos=0;
	contador=0;
	contador2=0;
	acumulador=0;
	multiplicador=1;
	respuesta="si";

	while(respuesta == "si" || respuesta == "Si")
	{
		contador=contador+1;

		numeroIngresado = prompt("Ingrese numero #" +contador + ": ");
		numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado = prompt("Error, vuelva a ingresar numero: ");
			numeroIngresado = parseInt(numeroIngresado)
		}

		/*Evalúo si es negativo o positivo, y cuento cantidad de negativos
		ingresados*/
		if (numeroIngresado < 0)
		{
			contadorDeNegativos = contadorDeNegativos+1;

			multiplicador = multiplicador * numeroIngresado;

		}

		else
		{
			acumulador = acumulador+numeroIngresado;

		}

		respuesta = prompt("¿Desea ingresar otro numero? Si para continuar");
	}
	

	document.getElementById("txtIdSuma").value = acumulador;

	/*si no se ingresó ningún negativo, cargo 0 en "Producto"
	(de otra manera, llegaría con el 1 por defecto de Multiplicador)*/
	if (contadorDeNegativos == 0)
	{
		document.getElementById("txtIdProducto").value = 0;

	}
	else
	{
		document.getElementById("txtIdProducto").value = multiplicador;

	}
}
//FIN DE LA FUNCIÓN