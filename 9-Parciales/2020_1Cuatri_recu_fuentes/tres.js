/** Binker David
 Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura. V
b) Cuantos mayores de edad( más de 17) estan solteros V
c) La cantidad de Mujeres que hay solteras o viudas. V
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura V
e) El promedio de edad entre las mujeres casadas. */
function mostrar()
{
	let nombreIngresado;
	let nacionalidadIngresada;
	let edadIngresada;
	let sexoIngresado;
	let estadocivilIngresado;
	let temperaturaCorporalIngresada;
	let respuesta;
	let temperaturaMaxima;
	let primeraPersonaIngresada;
	let nacionalidadDePersonaConMasTemperatura;
	let contadorDeMayoresDeEdadSolteros;
	let contadorDEMujeresViudas;
	let contadorDeMujeresCasadas;
	let contadorDeTerceraEdadConAltaTemperatura;
	let acumuladorDeEdadMujeresCasadas;
	let promedioDeEdadMujeresCasadas;

	respuesta = "si";
	primeraPersonaIngresada = true;
	contadorDeMayoresDeEdadSolteros = 0;
	contadorDEMujeresViudas = 0;
	contadorDeMujeresCasadas = 0;
	contadorDeTerceraEdadConAltaTemperatura = 0;
	acumuladorDeEdadMujeresCasadas = 0;
	promedioDeEdadMujeresCasadas= 0;

	while (respuesta == "si")
	{
		nombreIngresado = prompt("Indique su nombre: ");
		while (isNaN(nombreIngresado)== false)
		{
			nombreIngresado = prompt("Error indique su nombre de nuevo: ");
		}

		nacionalidadIngresada = prompt("Indique su nacionalidad: ");
		while (isNaN(nacionalidadIngresada)== false)
		{
			nacionalidadIngresada = prompt("Error indique su nacionalidad de nuevo: ");
		}

		edadIngresada = prompt("Indique su edad: ");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada)== true || edadIngresada < 1 || edadIngresada > 100)
		{
			edadIngresada = prompt("Error indique su edad de nuevo: ");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Indique su sexo (f o m): ");
		while (sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error indique su sexo de nuevo: ");
		}

		estadocivilIngresado = prompt("Indique su estado civil (soltero, casado, viudo): ");
		while (estadocivilIngresado != "soltero" && estadocivilIngresado != "casado" && estadocivilIngresado != "viudo")
		{
			estadocivilIngresado = prompt("Error indique su estado civil (soltero, casado, viudo) de nuevo: ");
		}


		temperaturaCorporalIngresada = prompt("Indique su temperatura corporal: ");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while (isNaN(temperaturaCorporalIngresada)== true || temperaturaCorporalIngresada < 35 || temperaturaCorporalIngresada > 42)
		{
			temperaturaCorporalIngresada = prompt("Error indique su temperatura corporal de nuevo: ");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		}

		//TERMINÉ DE VALIDAR

		//para sacar maxima temperatura
		if (primeraPersonaIngresada == true || temperaturaMaxima < temperaturaCorporalIngresada)
		{
			temperaturaMaxima = temperaturaCorporalIngresada;
			nacionalidadDePersonaConMasTemperatura = nacionalidadIngresada;
			primeraPersonaIngresada = false;
		}

		//para encontrar cuantos mayores de 17 están solteros, y cuántas mujeres viudas y casadas hay

		switch (estadocivilIngresado)
		{
			case "soltero":
				if (edadIngresada > 17)
				{
					contadorDeMayoresDeEdadSolteros++;
				}
				break;
			case "casado":
				if (sexoIngresado == "f" && edadIngresada > 17)
				{
					contadorDeMujeresCasadas++;
					acumuladorDeEdadMujeresCasadas = acumuladorDeEdadMujeresCasadas + edadIngresada;
				}
				break;
			case "viudo":
				if (sexoIngresado == "f" && edadIngresada > 17)
				{
					contadorDEMujeresViudas++;
				}
				break;
		}

		//para encontrar mayores de 60 años con mas de 38 grados
		if (edadIngresada > 60 && temperaturaCorporalIngresada > 38)
		{
			contadorDeTerceraEdadConAltaTemperatura++;
		}


		//para volver a cargar datos
		respuesta = prompt ("Desea cargar mas datos?")
	}

	if (contadorDeMujeresCasadas > 0)
	{
		promedioDeEdadMujeresCasadas = acumuladorDeEdadMujeresCasadas / contadorDeMujeresCasadas;
	}
	else
	{
		promedioDeEdadMujeresCasadas = " ninguno, no se ingresaron mujeres casadas."
	}

	document.write ("La nacionalidad de la persona con más temperatura es " + nacionalidadDePersonaConMasTemperatura);
	document.write (". Hay " + contadorDeMayoresDeEdadSolteros + " mayores de edad solteros. ");
	document.write ("Hay " + contadorDeMujeresCasadas + " mujeres casadas y " + contadorDEMujeresViudas + " mujeres viudas. ");
	document.write ("Hay " + contadorDeTerceraEdadConAltaTemperatura + " personas de más de 60 años con más de 38 grados.");
	document.write ("El promedio de edad entre las mujeres casadas es de " + promedioDeEdadMujeresCasadas);
}
