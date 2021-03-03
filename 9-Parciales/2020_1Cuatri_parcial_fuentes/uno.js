//Binker David
/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	let tipoDeProducto;
    let respuesta;
    let primerAlcoholIngresado;
    let precioMinimoAlcohol;

    cantidadUnidadesDelAcoholMasBarato = 0;
    cantidadDeUnidadesDeJabon = 0;
    precioMinimoAlcohol = 0;
    respuesta = "si";
    primerAlcoholIngresado = true;

    while (respuesta == "si")
    {
        tipoDeProducto = prompt("Indique tipo de producto");
        while(tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol")
        {
            tipoDeProducto=prompt("Error vuelva a ingresar tipo de producto: ");
        }

        precioIngresado = prompt("Indique precio del producto");
        precioIngresado = parseInt(precioIngresado);
        while(isNaN(precioIngresado) == true || precioIngresado <100 || precioIngresado > 300)
        {
            precioIngresado=prompt("Error vuelva a ingresar precio de producto: ");
            precioIngresado = parseInt(precioIngresado);
        }

    
        cantidadDeUnidades = prompt("Indique cantidad de unidades del producto");
        cantidadDeUnidades = parseInt(cantidadDeUnidades);
        while(isNaN(cantidadDeUnidades) == true || cantidadDeUnidades <0 || cantidadDeUnidades > 1000)
        {
            cantidadDeUnidades=prompt("Error vuelva a ingresar cantidad de unidades: ");
            cantidadDeUnidades = parseInt(cantidadDeUnidades);
        }

        marca = prompt("Indique marca");
        while(isNaN(marca) == false)
        {
            marca=prompt("Error vuelva a ingresar marca: ");
        }

        fabricante = prompt("Indique fabricante");
        while(isNaN(fabricante) == false)
        {
            fabricante=prompt("Error vuelva a ingresar fabricante: ");
        }


        ///CALCULO LAS COSAS

        switch(tipoDeProducto)
        {
            case "jabon":
               cantidadDeUnidadesDeJabon = cantidadDeUnidadesDeJabon + cantidadDeUnidades;
               break;
            case "alcohol":
                if (primerAlcoholIngresado == true || precioIngresado < precioMinimoAlcohol)
                {
                    primerAlcoholIngresado = false;
                    precioMinimoAlcohol = precioIngresado;
                    fabricanteMasBarato = fabricante;
                    cantidadUnidadesDelAcoholMasBarato = cantidadDeUnidades;
                }
                break;          
        }

        respuesta = prompt ("Desea ingresar otro producto?");
    }

        alert ("Del mas barato de los alcoholes, la cantidad de unidades es " + cantidadUnidadesDelAcoholMasBarato + ", su fabricante es " + fabricanteMasBarato + ". Hay en total " + cantidadDeUnidadesDeJabon + " unidades de jabon.");
}