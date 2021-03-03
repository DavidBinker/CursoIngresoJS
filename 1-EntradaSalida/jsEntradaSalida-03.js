/**BINKER David.
Estadística
Se requiere generar un sistema para realizar estadísticas sobre los egresados en la universidad.


 "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,
se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d)el tipo de mercadería  que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function mostrar()
{
	let tipoIngresado;
	let nombreIngresado;
	let importeIngresado;
	let procedenciaIngresada;
	let pesoIngresado;
	let respuesta;

	let nombreComestibleMasPesado;
	let pesoMaximoComestible;
	let primerComestibleIngresado;

	let nombreDeProductoMasCaro;
	let precioMaximoDeTodoslosProductos;
	let contadorDeProductosGeneral;
	contadorDeProductosGeneral=0;

	let nombreDelElaboradoMasBarato;
	let precioMinimoDeLosElaborados;
	let contadorDeElaborados;
	let contadorDeNacional;
	let contadorDeImportados;
	let porcentajeDeElaboradosSobreTotal;
	contadorDeElaborados=0;
	contadorDeImportados=0;
	contadorDeNacional=0;

	let contadorDeLimpieza;
	let contadorDeComestible;
	let contadorDeOtros;
	let mercaderiaQueMasAparece;
	let promedioDePesosComestible;
	let promedioDePesosLimpieza;
	let promedioDePesosOtros;
	let acumuladorPesosLimpieza;
	let acumuladorPesocomestible;
	let acumuladorPesoOtros;
	contadorDeLimpieza=0;
	contadorDeComestible=0;
	contadorDeOtros=0;
	acumuladorPesosLimpieza=0;
	acumuladorPesocomestible=0;
	acumuladorPesoOtros=0;

	respuesta = "si";

	while (respuesta == "si")
	{
		contadorDeProductosGeneral++;

		//tipoingersado
		tipoIngresado = prompt("Indique tipo de producto");
		while (tipoIngresado != "limpieza" &&tipoIngresado != "comestible" &&tipoIngresado != "otros" )
		{
			tipoIngresado = prompt("Error indique tipo de producto");
		}
		//nombreingresado
		nombreIngresado = prompt("Indique nombre de producto");
		while (isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error indique nombre de producto");
		}
		//importe ingresado
		importeIngresado = prompt("Indique importe de producto");
		importeIngresado = parseInt(importeIngresado);
		while (isNaN(importeIngresado)==true || importeIngresado > 1000)
		{
			importeIngresado = prompt("Error indique importe de producto");
			importeIngresado = parseInt(importeIngresado);
		}
		//procedencia ingresada
		procedenciaIngresada = prompt("Indique procedencia de producto");
		while (procedenciaIngresada != "importado" &&procedenciaIngresada != "nacional" &&procedenciaIngresada != "elaborado" )
		{
			procedenciaIngresada = prompt("Error indique procedencia de producto");
		}
		//peso
		pesoIngresado = prompt("Indique peso de producto");
		pesoIngresado = parseInt(pesoIngresado);
		while (isNaN(pesoIngresado)==true || pesoIngresado > 30)
		{
			pesoIngresado = prompt("Error indique peso de producto");
			pesoIngresado = parseInt(pesoIngresado);
		}

		//TERMINA VALIDACIONES. CALCULO

		switch(tipoIngresado)
		{
			case "comestible":
				contadorDeComestible++;
				acumuladorPesocomestible = acumuladorPesocomestible + pesoIngresado;
				if (contadorDeComestible == 1 || pesoMaximoComestible < pesoIngresado)
				{
					nombreComestibleMasPesado = nombreIngresado;
					pesoMaximoComestible = pesoIngresado;
				}
				break;
			case "limpieza":
				contadorDeLimpieza++;
				acumuladorPesosLimpieza = acumuladorPesosLimpieza + pesoIngresado;
				break;
			case "otros":
				contadorDeOtros++;
				acumuladorPesoOtros = acumuladorPesoOtros + pesoIngresado;
				break;
		}

		switch (procedenciaIngresada)
		{
			case "elaborado":
				contadorDeElaborados++;
				if (contadorDeElaborados == 1 || precioMinimoDeLosElaborados > pesoIngresado)
				{
					nombreDelElaboradoMasBarato = nombreIngresado;
					precioMinimoDeLosElaborados = importeIngresado;
				}
				break;
		}

		//para contar producto mas caro
		if (contadorDeProductosGeneral == 1 || precioMaximoDeTodoslosProductos < importeIngresado)
		{
			precioMaximoDeTodoslosProductos = importeIngresado;
			nombreDeProductoMasCaro = nombreIngresado;
		}

		respuesta = prompt("desea ingresar otro producto?")

	}
	//TERMINA WHILE

	//b)
	document.write ("El nombre del producto más caro es " + nombreDeProductoMasCaro);
	//c)
	if (contadorDeElaborados > 0)
	{
		document.write("El más barato de los elaborados es " + nombreDelElaboradoMasBarato);
	}
	//d)
	if (contadorDeLimpieza > contadorDeComestible && contadorDeLimpieza > contadorDeOtros)
	{
		mercaderiaQueMasAparece = "los de limpieza";
	}
	else
	{
		if (contadorDeComestible > contadorDeOtros)
		{
			mercaderiaQueMasAparece = "los de comestibles";
		}
		else
		{
			mercaderiaQueMasAparece = "los de tipo 'otros'";
		}
	}
	document.write("La mercadería que mas aparece es " + mercaderiaQueMasAparece);
	//e
	if (contadorDeElaborados > 0)
	{
		porcentajeDeElaboradosSobreTotal = contadorDeElaborados / contadorDeProductosGeneral;
		document.write("El porcentaje de productos elaborados por sobre el total es de %" + porcentajeDeElaboradosSobreTotal);
	}
	//f) y a)
	if (contadorDeComestible > 0)
	{
		//a)
		document.write ("El más pesado de los comestibles es " + nombreComestibleMasPesado);

		promedioDePesosComestible = acumuladorPesocomestible / contadorDeComestible;
		document.write ("El promedio de peso de los comestibles es " + promedioDePesosComestible)
	}
	if (contadorDeLimpieza > 0)
	{
		promedioDePesosLimpieza = acumuladorPesosLimpieza / contadorDeLimpieza;
		document.write ("El promedio de pesos de limpieza es igual a " + promedioDePesosLimpieza);
	}
	if (contadorDeOtros > 0)
	{
		promedioDePesosOtros = acumuladorPesoOtros / contadorDeOtros;
		document.write ("El promedio de pesos de otros es de " + promedioDePesosOtros);
	}


}


