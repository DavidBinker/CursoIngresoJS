//Binker David
function mostrar()
{
	let distancia
	let tiempo
	let velocidad

	distancia = prompt("Ingrese distancia recorrida")
	tiempo = prompt("Ingreso el tiempo que tardo en horas")

	distancia = parseInt(distancia)
	tiempo = parseInt(tiempo)

	velocidad = distancia / tiempo

	if(velocidad < 61)
	{
		alert("muy lento")
	}else
	if(velocidad < 81)
	{
		alert("lento")
	}else
	if(velocidad < 101)
	{
		alert ("buen ritmo")
	}else
	if(velocidad < 121)
	{
		alert("ahi de la ley")
	}else
	{
		alert("eso no se hace")
	}
}//FIN DE LA FUNCIÓN