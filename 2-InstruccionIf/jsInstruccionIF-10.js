//Binker David

function mostrar()
{
	let nota
	let mensaje

	nota = Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

	if(nota > 8)
	{
		mensaje = "EXCELENTE"
	}
	else
	{
		if(nota > 3)
		{
			mensaje = "APROBÓ"
		}
		else
		{
			mensaje = "Vamos, la proxima se puede"
		}
	}

	alert("La nota es " + nota + ", " + mensaje)


}//FIN DE LA FUNCIÓN