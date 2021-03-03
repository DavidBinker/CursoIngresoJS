/*Binker David
Enunciado:
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let respuesta;

	let nombreDePersonaConMastemperatura;
	let maximaTemperaturaIngresada;
	let primerPersonaIngresada;
	primerPersonaIngresada=true;

	let contadorDeSolteros;
	let contadorDeViudos;
	contadorDeSolteros=0;
	contadorDeViudos=0;

	let contadorDeMayoresConTemperaturaalta;
	contadorDeMayoresConTemperaturaalta=0;
	let acumuladorDeEdadSolteros;
	acumuladorDeEdadSolteros=0;
	respuesta="si";

	while (respuesta=="si")
	{
		//validaciones
		nombreIngresado = prompt("Ingrese nombre de la persona");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado = prompt("Error, indique nombre de la persona");
		}

		edadIngresada = prompt("Ingrese edad de la persona");
		edadIngresada =parseInt(edadIngresada)
		while(isNaN(edadIngresada)==true || edadIngresada < 0 || edadIngresada > 115)
		{
			edadIngresada = prompt("Error, indique edad de la persona");
		}
		
		sexoIngresado = prompt("Ingrese sexo de la persona");
		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error, indique sexo de la persona");
		}

		estadoCivilIngresado = prompt("Ingrese estado civil de la persona");
		while(estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Error, indique estado civil de la persona");
		}

		temperaturaCorporalIngresada = prompt("Ingrese temperatura de la persona");
		temperaturaCorporalIngresada =parseInt(temperaturaCorporalIngresada)
		while(isNaN(temperaturaCorporalIngresada)==true || temperaturaCorporalIngresada < 34 || temperaturaCorporalIngresada > 42)
		{
			temperaturaCorporalIngresada = prompt("Error, indique temperatura de la persona");
		}

		//terminé de validar

		//para encontrar persona con mas temperatura
		if (primerPersonaIngresada == true || maximaTemperaturaIngresada < temperaturaCorporalIngresada)
		{
			maximaTemperaturaIngresada = temperaturaCorporalIngresada;
			primerPersonaIngresada = false;
			nombreDePersonaConMastemperatura = nombreIngresado;
		}

		//para contar solteros y viudos
		if (sexoIngresado == "m")
		{
			switch (estadoCivilIngresado)
			{
				case "soltero":
					contadorDeSolteros++;
					acumuladorDeEdadSolteros = acumuladorDeEdadSolteros + edadIngresada;
					break;
				case "viudo":
					contadorDeViudos++;
					break;
			}
		}

		//personas de tercera edad con mas de 38º
		if (temperaturaCorporalIngresada > 38)
		{
			if (edadIngresada > 60)
			{
				contadorDeMayoresConTemperaturaalta++;
			}
		}



		respuesta = prompt("Desea ingresar datos de otra persona?");
	}
	//TERMINA EL WHILE

	document.write("El nombre de la persona con máxima temperatura ingresada es " + nombreDePersonaConMastemperatura);
	document.write("El número de solteros ingresado es de " + contadorDeSolteros + ". El número de viudos es de " + contadorDeViudos);
	document.write ("El número de mayores de 60 años con más de 38 de temperatura es de " + contadorDeMayoresConTemperaturaalta);


}
