function mostrar()
{
	/*Binker David. El ejercicio indica que "mayor de edad" sería MAYOR
	a 18, no inclusive. Para ser más preciso no incluyo la edad de 18.*/
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>18)
	{
		alert("Sos mayor de edad");
	}

	if(edad<13)
	{
		alert("Sos un niño");
	}

	if(edad<18)
	{
		if(edad>12)
		{
		alert("Sos un adolescente");
		}
	}
}//FIN DE LA FUNCIÓN
