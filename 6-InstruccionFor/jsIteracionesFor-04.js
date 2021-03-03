/*BINKER David
Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{
	let repeticiones;

	for(repeticiones = 1; repeticiones !=0; repeticiones++)
	{
		console.log(repeticiones);
		if (repeticiones == 17)
		{
			break;
		}
	}
}