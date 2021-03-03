//Binker David
//Con if (cantidad) y switch (marca)
function CalcularPrecio () 
{

 	let cantidadDeLamparas;
    let precio;
    let marca;
    let porcentaje;
    let impuesto;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    precio = cantidadDeLamparas*35;


    if (cantidadDeLamparas>5)
    {
        porcentaje=50;
    }

    else
    {
        if(cantidadDeLamparas==5)
        {
            switch(marca)
            {
                case "ArgnentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
        }

        else
        {
            if(cantidadDeLamparas==4)
            {
                switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentaje = 25;
                        break;
                    default:
                        porcentaje = 20;
                        break;
                }

            }

            else
            {
                if(cantidadDeLamparas==3)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje = 15;
                            break;
                        case "FelipeLamparas":
                            porcentaje = 10;
                            break;
                        default:
                            porcentaje = 5;
                            break;
                    }
                }

                else
                {
                    porcentaje=0;
                }
            }
        }
    }

    precio = precio - (precio * porcentaje / 100);


    if(precio > 120)
    {
        impuesto = precio * 10 / 100;
        precio= precio + impuesto;
        alert("IIBB Usted pago " + impuesto);
    }

    document.getElementById("txtIdprecioDescuento").value = precio;
}