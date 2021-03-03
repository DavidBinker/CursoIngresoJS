//Binker David. Con If
function mostrar()
{
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;
	let porcentaje;
	let precioFinal;

	precioBase = 15000;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;


	if(estacionIngresada == "Invierno")
	{
		if(destinoIngresado == "Bariloche")
		{
			porcentaje = 20;
		}
		else
		{
			if(destinoIngresado == "Mar del plata")
			{
				porcentaje = -20;
			}else
			{
				porcentaje= -10;
			}
		}
	}
	else
	{
		if(estacionIngresada=="Verano")
		{
			if(destinoIngresado=="Bariloche")
			{
				porcentaje = -20;
			}
			else
			{
				if(destinoIngresado=="Mar del plata")
				{
					porcentaje = 20;
				}else
				{
					porcentaje = 10;
				}
			}
		}
		else
		{
			if(destinoIngresado=="Cordoba")
			{
				porcentaje = 0;
			}else
			{
				porcentaje = 10;
			}
		}
	}
	


    precioFinal = precioBase + (porcentaje * precioBase / 100);

	alert("El precio final sería " + precioFinal);

}//FIN DE LA FUNCIÓN
/*
//Binker David. Con Switch
function mostrar()
{
    let estacionIngresada;
    let destinoIngresado;
    let precioBase;
    let porcentaje;
    let precioFinal;

    precioBase = 15000;

    estacionIngresada = document.getElementById("txtIdEstacion").value;
    destinoIngresado = document.getElementById("txtIdDestino").value;

    switch (estacionIngresada)
    {
        case "Invierno":
            switch(destinoIngresado)
            {
                case "Bariloche":
                    porcentaje = 20;
                    break;
                case "Mar del plata":
                    porcentaje = -20;
                    break;
                default:
                    porcentaje = -10;
                    break;
            }
            break;
        case "Verano":
            switch(destinoIngresado)
            {
                case "Bariloche":
                    porcentaje = -20;
                    break;
                case "Mar del plata":
                    porcentaje = 20;
                    break;
                default:
                    porcentaje = 10;
                    break;
            }
            break;
        case "Primavera":
        case "Otoño":
            switch(destinoIngresado)
            {
                case "Cordoba":
                    porcentaje = 0;
                    break;
                default:
                    porcentaje = 10;
                    break;
            }
            break;
    }

    precioFinal = precioBase + (porcentaje * precioBase / 100);

    alert(precioFinal);

}//FIN DE LA FUNCIÓN*/