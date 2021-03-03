/*Binker David
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let mensaje;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("ingrese f ó m .");

	}

	switch(sexoIngresado)
	{
		case "f":
			mensaje = "Ingresó 'femenino'";
			break;
		case "m":
			mensaje = "Ingresó 'masculino'";
			break;
	}

	document.getElementById("txtIdSexo").value = mensaje;

}//FIN DE LA FUNCIÓN