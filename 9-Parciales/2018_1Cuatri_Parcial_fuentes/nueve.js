//Binker David
function mostrar()
{
    let marcaDelProducto;
    let pesoDelProucto;
    let temperaturaAlmacenamiento;
    let contador;
    let contadorDeTemperaturasPares;
    let nombreDeMarcaPesada;
    let pesoMaximo;
    let pesoMinimo;
    let contadordeTemperaturasBajoCero;
    let acumulador;
    let promedio;

    contador = 0;
    contadorDeTemperaturasPares = 0;
    contadordeTemperaturasBajoCero = 0;
    acumulador = 0;
    respuesta = "si";

    while (respuesta == "si" || respuesta == "Si")
    {
        contador = contador + 1;

        marcaDelProducto = prompt ("Indique nombre de la marca del producto: ");

        pesoDelProucto = prompt ("Indique el peso de producto, entre 1 y 100: ");
        pesoDelProucto = parseInt(pesoDelProucto)


        while (isNaN(pesoDelProucto) == true || pesoDelProucto < 1 || pesoDelProucto > 100)
        {
            pesoDelProucto = prompt ("Error, indique numero entre uno y 100: ");
            pesoDelProucto = parseInt(pesoDelProucto);
        }

        acumulador = acumulador + pesoDelProucto;

        if (contador == 1)
        {
            nombreDeMarcaPesada = marcaDelProducto;
            pesoMaximo = pesoDelProucto;
            pesoMinimo = pesoDelProucto;
        }
        else
        {
            if (pesoDelProucto > pesoMaximo)
            {
                nombreDeMarcaPesada = marcaDelProducto;
            }
            else
            {
                if (pesoDelProucto < pesoMinimo)
                {
                    pesoMinimo = pesoDelProucto;
                }
            }
        }


        temperaturaAlmacenamiento = prompt("Indique la temperatura de almacenamiento (entre -30 y 30): ");
        temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);

        while (isNaN(temperaturaAlmacenamiento) == true || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30)
        {
            temperaturaAlmacenamiento = prompt("Error, vuelva a indicar la temperatura: ");
            temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);
        }

        if (temperaturaAlmacenamiento % 2 == 0)
        {
            contadorDeTemperaturasPares = contadorDeTemperaturasPares+1;
        }

        if (temperaturaAlmacenamiento < 0)
        {
            contadordeTemperaturasBajoCero = contadordeTemperaturasBajoCero + 1;
        }

        respuesta = prompt ("¿Desea ingresar datos de otro producto?")
    }

    promedio = acumulador / contador;

    document.write("La cantidad de temperaturas pares es de " + contadorDeTemperaturasPares + ", la marca del producto más pesado es " + nombreDeMarcaPesada + ". La cantidad de productos que se conservan a menos de 0 grados es " + contadordeTemperaturasBajoCero + ". El promedio de peso de todos los productos es de " + promedio + ". El peso maximo es " + pesoMaximo + ", mientras que el peso minimo es " + pesoMinimo);
}
