/*Binker David. 
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.  
e)la cantidad de paises de america que tienen menos de 0 grados . 
f)el promedio de habitantes entre los paises ingresados . 
g)el promedio de habitantes entre los paises que superan los 40 grados       
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/
function mostrar()
{
	let cantidadDeIteraciones;
	let continenteDelPaisIngresado;
	let nombreDelPasiIngresado;
	let cantidadDeHabitantesDelPaisIngresado;
	let nivelDePobrezaDePaisIngresado;
	let temperaturaMinimaDelPaisIngresado;
	let contadorGeneralDeTemperaturasPares;
	let contadorDeTemperaturasImparesDeEuropa;
	let cantidadMinimaDeHabitantes;
	let nombreDelPaisConMenosHabitantes;
	let contadorDePaisesConMasDeCuarentaGrados;
	let contadorDePaisesAmericanosConMenosDeCeroGrados;
	let acumuladorTotalDeHabitantes;
	let promedioTotalDeHabitantes;
	let acumuladorDeHabitantesDePaisesConMasDeCuarentaGrados;
	let promedioDeHabitantesDePaisesConMasDeCuarentaGrados;
	let temperaturaMinimaDeTodos;
	let nombreDelPaisConTemperaturaMasBaja;
	let cantidadDeHabitantesDeAmerica;
	let cantidadDeHabitantesDeEuropa;
	let cantidadDeHabitantesDeAsia;
	let cantidadDeHabitantesDeAfrica;
	let cantidadDeHabitantesDeOceania;
	let continenteConMasHabitantes;

	contadorGeneralDeTemperaturasPares = 0;
	contadorDeTemperaturasImparesDeEuropa = 0;
	contadorDePaisesConMasDeCuarentaGrados = 0;
	contadorDePaisesAmericanosConMenosDeCeroGrados = 0;
	acumuladorTotalDeHabitantes = 0;
	promedioTotalDeHabitantes = 0;
	acumuladorDeHabitantesDePaisesConMasDeCuarentaGrados = 0;
	promedioDeHabitantesDePaisesConMasDeCuarentaGrados = 0;
	cantidadDeHabitantesDeAfrica = 0;
	cantidadDeHabitantesDeAmerica = 0;
	cantidadDeHabitantesDeAsia = 0;
	cantidadDeHabitantesDeOceania = 0;
	cantidadDeHabitantesDeEuropa = 0;

	for (cantidadDeIteraciones = 0; cantidadDeIteraciones < 5; cantidadDeIteraciones++)
	{
		//continente
		continenteDelPaisIngresado = prompt ("Indique continente del país, sin mayúsculas: ");
		while (continenteDelPaisIngresado != "america" && continenteDelPaisIngresado != "asia" && continenteDelPaisIngresado != "europa" &&continenteDelPaisIngresado != "africa" &&continenteDelPaisIngresado != "oceania")
		{
			continenteDelPaisIngresado = prompt ("Error, indique continente del país, sin mayúsculas: ");
		}
		//nombre
		nombreDelPasiIngresado = prompt ("Indique nombre del país ingresado");
		while (isNaN(nombreDelPasiIngresado)==false)
		{
			nombreDelPasiIngresado = prompt ("Error, indique nombre del país ingresado");
		}
		//cantidad de habitantes
		cantidadDeHabitantesDelPaisIngresado = prompt ("Indique cantidad de habitantes del país, en millones:");
		cantidadDeHabitantesDelPaisIngresado = parseInt(cantidadDeHabitantesDelPaisIngresado);
		while(isNaN(cantidadDeHabitantesDelPaisIngresado) == true || cantidadDeHabitantesDelPaisIngresado < 1 || cantidadDeHabitantesDelPaisIngresado > 7000)
		{
			cantidadDeHabitantesDelPaisIngresado = prompt ("Error, vuelva a indicar cantidad de habitantes del país en millones: ");
			cantidadDeHabitantesDelPaisIngresado = parseInt(cantidadDeHabitantesDelPaisIngresado);
		}

		//temperatura
		temperaturaMinimaDelPaisIngresado = prompt ("Indique temperatura mínima que se registra en el país indicado (entre -50 y 50): ");
		temperaturaMinimaDelPaisIngresado = parseInt(temperaturaMinimaDelPaisIngresado);
		while(isNaN(temperaturaMinimaDelPaisIngresado) == true || temperaturaMinimaDelPaisIngresado < -50 || temperaturaMinimaDelPaisIngresado > 50)
		{
			temperaturaMinimaDelPaisIngresado = prompt ("Error, indique temperatura mínima que se registra en el país indicado: ");
			temperaturaMinimaDelPaisIngresado = parseInt(temperaturaMinimaDelPaisIngresado);			
		}

		//nivel de pobreza
		nivelDePobrezaDePaisIngresado = prompt ("Indique nivel de pobreza del país ingresado (pobre, rico, o muy rico: ");
		//Para validar nivel de pobreza
		switch (continenteDelPaisIngresado)
		{
			case "europa":
				while (nivelDePobrezaDePaisIngresado != "rico" && nivelDePobrezaDePaisIngresado != "muy rico")
				{
					nivelDePobrezaDePaisIngresado = prompt ("Error, vuelva a ingresar nivel de pobreza del país (en europa no hay países pobres): ")
				}
				//para calcular temperaturas impares
				if (temperaturaMinimaDelPaisIngresado %2 != 0)
				{
					contadorDeTemperaturasImparesDeEuropa = contadorDeTemperaturasImparesDeEuropa + 1;
				}
				cantidadDeHabitantesDeEuropa = cantidadDeHabitantesDeEuropa + cantidadDeHabitantesDelPaisIngresado;
			break;
			
			case "america":
				while (nivelDePobrezaDePaisIngresado != "pobre" && nivelDePobrezaDePaisIngresado != "rico" && nivelDePobrezaDePaisIngresado != "muy rico")
				{
					nivelDePobrezaDePaisIngresado = prompt ("Error, vuelva a indicar nivel de pobreza del país ingresado: ")
				}
				//Para calcular países de america con menos de 0 grados
				if (temperaturaMinimaDelPaisIngresado < 0)
				{
					contadorDePaisesAmericanosConMenosDeCeroGrados = contadorDePaisesAmericanosConMenosDeCeroGrados + 1;
				}

				cantidadDeHabitantesDeAmerica = cantidadDeHabitantesDeAmerica + cantidadDeHabitantesDelPaisIngresado;
				break;
				
			case "oceania":
				while (nivelDePobrezaDePaisIngresado != "pobre" && nivelDePobrezaDePaisIngresado != "rico" && nivelDePobrezaDePaisIngresado != "muy rico")
				{
					nivelDePobrezaDePaisIngresado = prompt ("Error, vuelva a indicar nivel de pobreza del país ingresado: ")
				}
				cantidadDeHabitantesDeOceania = cantidadDeHabitantesDeOceania + cantidadDeHabitantesDelPaisIngresado;
				break;

			case "asia":
				while (nivelDePobrezaDePaisIngresado != "pobre" && nivelDePobrezaDePaisIngresado != "rico" && nivelDePobrezaDePaisIngresado != "muy rico")
				{
					nivelDePobrezaDePaisIngresado = prompt ("Error, vuelva a indicar nivel de pobreza del país ingresado: ")
				}
				cantidadDeHabitantesDeAsia = cantidadDeHabitantesDeAsia + cantidadDeHabitantesDelPaisIngresado;
				break;

			case "africa":
				while (nivelDePobrezaDePaisIngresado != "pobre" && nivelDePobrezaDePaisIngresado != "rico" && nivelDePobrezaDePaisIngresado != "muy rico")
				{
					nivelDePobrezaDePaisIngresado = prompt ("Error, vuelva a indicar nivel de pobreza del país ingresado: ")
				}
				cantidadDeHabitantesDeAfrica = cantidadDeHabitantesDeAfrica + cantidadDeHabitantesDelPaisIngresado;
				break;
		}
		//para calcular temperaturas pares
		if (temperaturaMinimaDelPaisIngresado %2 == 0)
		{
			contadorGeneralDeTemperaturasPares = contadorGeneralDeTemperaturasPares + 1;
		}

		if (cantidadDeIteraciones == 0)
		{
			cantidadMinimaDeHabitantes = cantidadDeHabitantesDelPaisIngresado;
			nombreDelPaisConMenosHabitantes = nombreDelPasiIngresado;

			temperaturaMinimaDeTodos = temperaturaMinimaDelPaisIngresado;
			nombreDelPaisConTemperaturaMasBaja = nombreDelPasiIngresado;			
		}
		else
		{
			//Para calcular el país con menos habitantes
			if (cantidadMinimaDeHabitantes > cantidadDeHabitantesDelPaisIngresado)
			{
				cantidadMinimaDeHabitantes = cantidadDeHabitantesDelPaisIngresado;
				nombreDelPaisConMenosHabitantes = nombreDelPasiIngresado;			
			}
			//Para calcular el país con menor temperatura
			if (temperaturaMinimaDelPaisIngresado < temperaturaMinimaDeTodos)
			{
				temperaturaMinimaDeTodos = temperaturaMinimaDelPaisIngresado;
				nombreDelPaisConTemperaturaMasBaja = nombreDelPasiIngresado;
			}
		}
		//Para calcular sobre los países con más de 40 grados
		if (temperaturaMinimaDelPaisIngresado > 40)
		{
			acumuladorDeHabitantesDePaisesConMasDeCuarentaGrados = acumuladorDeHabitantesDePaisesConMasDeCuarentaGrados + cantidadDeHabitantesDelPaisIngresado;
			contadorDePaisesConMasDeCuarentaGrados = contadorDePaisesConMasDeCuarentaGrados + 1;
		}

		//Para contar cantidad total de habitantes, de todos los países ingresados
		acumuladorTotalDeHabitantes = acumuladorTotalDeHabitantes + cantidadDeHabitantesDelPaisIngresado;

	}

	//Para sacar promedio total de habitantes
	promedioTotalDeHabitantes = acumuladorTotalDeHabitantes / 5;

	//Para sacar promedio de países con más de 40 grados, en caso de haber
	if (contadorDePaisesConMasDeCuarentaGrados > 0)
	{
		promedioDeHabitantesDePaisesConMasDeCuarentaGrados = acumuladorDeHabitantesDePaisesConMasDeCuarentaGrados / contadorDePaisesConMasDeCuarentaGrados;
	}

	//Para calcular continente con mas habitantes
	if (cantidadDeHabitantesDeAfrica > cantidadDeHabitantesDeAmerica && cantidadDeHabitantesDeAfrica > cantidadDeHabitantesDeAsia && cantidadDeHabitantesDeAfrica > cantidadDeHabitantesDeEuropa && cantidadDeHabitantesDeAfrica > cantidadDeHabitantesDeOceania)
	{
		continenteConMasHabitantes = "africa"
	}
	else
	{
		if (cantidadDeHabitantesDeEuropa > cantidadDeHabitantesDeOceania && cantidadDeHabitantesDeEuropa > cantidadDeHabitantesDeAsia && cantidadDeHabitantesDeEuropa > cantidadDeHabitantesDeAmerica)
		{
			continenteConMasHabitantes = "europa"
		}
		else
		{
			if (cantidadDeHabitantesDeAsia > cantidadDeHabitantesDeAmerica && cantidadDeHabitantesDeAsia > cantidadDeHabitantesDeOceania)
			{
				continenteConMasHabitantes = "asia"
			}
			else
			{
				if (cantidadDeHabitantesDeAmerica > cantidadDeHabitantesDeOceania)
				{
					continenteConMasHabitantes = "america"
				}
				else
				{
					continenteConMasHabitantes = "oceania"
				}
			}
		}
	}

	alert ("La cantidad de temperaturas pares es " + contadorGeneralDeTemperaturasPares + ". La cantidad de temperaturas impares de Europa es " + 
	contadorDeTemperaturasImparesDeEuropa + ". El nombre del pais con menos habitantes es " + nombreDelPaisConMenosHabitantes + 
	". La cantidad de paises con menos de 40 grados es: " + contadorDePaisesConMasDeCuarentaGrados + ". La cantidad de países de america con menos de 0 grados: " +
	contadorDePaisesAmericanosConMenosDeCeroGrados + ". El promedio de habitantes entre todos los países es de " + promedioTotalDeHabitantes + 
	". El promedio de habitantes de paises con mas de 40 grados es: " + promedioDeHabitantesDePaisesConMasDeCuarentaGrados + 
	". La temperatura mínima ingresada es: " + temperaturaMinimaDeTodos + ", el país que registra ese país es " + nombreDelPaisConTemperaturaMasBaja
	+ ". El continente con más habitantes es " + continenteConMasHabitantes);

}