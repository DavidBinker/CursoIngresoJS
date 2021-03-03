
/**Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */
function mostrar()
{
	let respuesta;
	let tipoDeProductoIngresado;
	let precioIngresado;
	let cantidadDeUnidadesIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let precioMasCaroDeJabon;
	let primerJabon;
	let cantidadDeUnidadesDelJabonCaro;
	let fabricanteDelJabonCaro;
	let acumuladorDeUnidadesDeBarbijo;
	let acumuladorDeUnidadesDeJabon;
	let acumuladorDeUnidadesDeAlcohol;
	let contadorDeBarbijosIngresados;
	let contadorDeJabonesIngresados;
	let contadorDeAlcoholesIngresados;
	let promedioPorCompraDelTipoConMasProductos;
	let acumuladorPrecioDeJabon;
	let acumuladorPrecioDeBarbijo;
	let acumuladorPrecioDeAlcohol;

	respuesta = "si";
	acumuladorDeUnidadesDeBarbijo = 0;
	acumuladorDeUnidadesDeAlcohol = 0;
	acumuladorDeUnidadesDeJabon = 0;
	contadorDeAlcoholesIngresados = 0;
	contadorDeBarbijosIngresados = 0;
	contadorDeJabonesIngresados = 0;
	acumuladorPrecioDeAlcohol = 0;
	acumuladorPrecioDeBarbijo = 0;
	acumuladorPrecioDeJabon = 0;

	while (respuesta == "si")
	{
		tipoDeProductoIngresado = prompt("Indique tipo de producto: ");
		while(tipoDeProductoIngresado != "barbijo" && tipoDeProductoIngresado != "jabon" && tipoDeProductoIngresado && "alcohol")
		{
			tipoDeProductoIngresado = prompt("Error, indique tipo de producto: ");
		}

		//precio
		precioIngresado = prompt("Indique precio del producto: ");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado)==true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("ERROR, indique precio del producto: ");
			precioIngresado = parseInt(precioIngresado);		
		}

		//cantidad de unidades
		cantidadDeUnidadesIngresada = prompt("Indique cantidad de unidades: ");
		cantidadDeUnidadesIngresada = parseInt(cantidadDeUnidadesIngresada);
		while(isNaN(cantidadDeUnidadesIngresada)==true || cantidadDeUnidadesIngresada < 1 || cantidadDeUnidadesIngresada > 1000)
		{
			cantidadDeUnidadesIngresada = prompt("ERROR, indique cantidad de unidades: ");
			cantidadDeUnidadesIngresada = parseInt(cantidadDeUnidadesIngresada);		
		}

		//marca
		marcaIngresada = prompt("Indique marca del producto: ");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada = prompt("Error, vuelva a indicar marca del producto: ");
		}
		
		//marca
		fabricanteIngresado = prompt("Indique fabricante del producto: ");
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado = prompt("Error, vuelva a indicar fabricante del producto: ");
		}		

		//CALCULOS
		switch(tipoDeProductoIngresado)
		{
			case "jabon":
				acumuladorDeUnidadesDeJabon = acumuladorDeUnidadesDeJabon  + cantidadDeUnidadesIngresada;
				contadorDeJabonesIngresados = contadorDeJabonesIngresados + 1;
				if (contadorDeAlcoholesIngresados = 1 || precioMasCaroDeJabon < precioIngresado)
				{
					primerJabon = false;
					precioMasCaroDeJabon = precioIngresado;
					fabricanteDelJabonCaro = fabricanteIngresado;
					cantidadDeUnidadesDelJabonCaro = cantidadDeUnidadesIngresada;
				}
				acumuladorPrecioDeJabon = acumuladorPrecioDeJabon + precioIngresado;
			break;


			case "barbijo":
				acumuladorDeUnidadesDeBarbijo = acumuladorDeUnidadesDeBarbijo + cantidadDeUnidadesIngresada;
				contadorDeBarbijosIngresados = contadorDeBarbijosIngresados + 1;
				acumuladorPrecioDeBarbijo = acumuladorPrecioDeBarbijo + precioIngresado;
			break;


			case "alcohol":
				acumuladorDeUnidadesDeAlcohol = acumuladorDeUnidadesDeAlcohol + cantidadDeUnidadesIngresada;
				contadorDeAlcoholesIngresados = contadorDeAlcoholesIngresados + 1;
				acumuladorPrecioDeAlcohol = acumuladorPrecioDeAlcohol + precioIngresado;
				break;
		}

		respuesta = prompt("¿Desea ingresar otro producto?");
	}
	//TERMINA EL WHILE

	//para sacar tipo con mas productos
	if (acumuladorDeUnidadesDeJabon > acumuladorDeUnidadesDeAlcohol && acumuladorDeUnidadesDeJabon > acumuladorDeUnidadesDeBarbijo)
	{
		promedioPorCompraDelTipoConMasProductos = acumuladorPrecioDeJabon / contadorDeJabonesIngresados;
	}
	else
	{
		if (acumuladorDeUnidadesDeAlcohol > acumuladorDeUnidadesDeBarbijo)
		{
			promedioPorCompraDelTipoConMasProductos = acumuladorPrecioDeAlcohol / contadorDeAlcoholesIngresados;
		}
		else
		{
			promedioPorCompraDelTipoConMasProductos = acumuladorPrecioDeBarbijo / contadorDeBarbijosIngresados;
		}
	}

	alert ("Del más caro de los jabones, la cantidad de unidades es " + cantidadDeUnidadesDelJabonCaro + " y el fabricante es "
	+ fabricanteDelJabonCaro + ". Del tipo de producto con más unidades, el promedio por compra es de " + promedioPorCompraDelTipoConMasProductos +
	". En total se compraron " + acumuladorDeUnidadesDeBarbijo + " unidades de barbijos.");
}
