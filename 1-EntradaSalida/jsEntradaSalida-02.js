/**Binker David
 * Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado  
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal (el tipo, no el nombre)
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano */
function mostrar()
{
	let tipoDeMascota;
	let tipoDePelajeIngresado;
	let edadIngresada;
	let nombreIngresado;
	let razaIngresada;
	let pesoIngresado;
	let estadoClinicoIngresado;
	let temperaturaCorporalIngresada;
	let respuesta;
	let pesoMaximoDePerro;
	let nombreDelPerroMasPesado;
	let primerPerroIngresado;
	let contadorDeAnimalesEnfermos;
	let contadorDeAnimalesGeneral;
	let porcentajeDeAnimalesEnfermos;
	let ultimaMascotaDeTipoOtraCosa;
	let primerAnimalSinPelo;
	let temperaturaMinimaDeAnimalSinPelo;
	let nombreDelAnimalSinPeloConMenosTemperatura;
	let contadorDeGatos;
	let contadorDePerros;
	let contadorDeOtraCosa;
	let acumuladorDeTemperaturasDeGatos;
	let acumuladorDeTemperaturasDePERROS;
	let acumuladorDeTemperaturasDeOtraCosa;

	respuesta = "si";
	primerPerroIngresado = true;
	contadorDeAnimalesEnfermos = 0;
	contadorDeAnimalesGeneral = 0;
	porcentajeDeAnimalesEnfermos = 0;
	primerAnimalSinPelo = true;
	acumuladorDeTemperaturasDeGatos=0;
	acumuladorDeTemperaturasDePERROS=0;
	acumuladorDeTemperaturasDeOtraCosa=0;
	contadorDeGatos=0;
	contadorDePerros=0;
	contadorDeOtraCosa=0;

	while (respuesta == "si")
	{

		//para calcular total de mascotas
		contadorDeAnimalesGeneral = contadorDeAnimalesGeneral + 1;

		//para tipo de mascota
		tipoDeMascota = prompt ("Indique especie de la mascota (gato, perro u otra cosa): ");
		while (tipoDeMascota != "gato" && tipoDeMascota != "perro" && tipoDeMascota != "otra cosa")
		{
			tipoDeMascota = prompt ("Error, vuelva a indicar tipo de mascota: ")
		}

		//para ingresar tipo de pelaje
		tipoDePelajeIngresado = prompt("Indique el tipo de pelaje de la mascota (corto, largo, o sin pelo");
		while (tipoDePelajeIngresado != "corto" && tipoDePelajeIngresado != "largo" && tipoDePelajeIngresado != "sin pelo")
		{
			tipoDePelajeIngresado = prompt ("Error, vuelva a indicar tipo de pelaje de la mascota: ")
		}

		//para ingresar edad de la mascota
		edadIngresada = prompt ("Indique edad de la mascota: ");
		edadIngresada = parseInt (edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 1 || edadIngresada > 25)
		{
			edadIngresada = prompt ("Error, vuelva a indicar edad de la mascota: ");
			edadIngresada = parseInt (edadIngresada);
		}

		//para ingresar nombre de la mascota
		nombreIngresado = prompt ("Indique nombre de la mascota: ");
		while (isNaN (nombreIngresado) == false)
		{
			nombreIngresado = prompt ("Error, vuelva a indicar nombre de la mascota: ");
		}

		//para ingresar raza
		razaIngresada = prompt ("Indique raza de la mascota: ");
		while (isNaN (razaIngresada) == false)
		{
			razaIngresada = prompt ("Error, vuelva a indicar raza de la mascota: ");
		}

		//para ingresar peso de la mascota
		pesoIngresado = prompt ("Indique peso de la mascota");
		pesoIngresado = parseInt(pesoIngresado);

		//Para validar PESO y TEMPERATURA de la mascota (ambos parámetros cambian según el tipo de mascota ingresado).
		//(para no preguntar 2 veces por tipodeMascota -redundancia-)
		switch(tipoDeMascota)
		{
			case "perro":
				//Para validar peso
				while (isNaN(pesoIngresado)==true || pesoIngresado < 4 || pesoIngresado > 80)
				{
					pesoIngresado = prompt ("Error, vuelva a indicar peso del perro");
					pesoIngresado = parseInt(pesoIngresado);
				}
				//Para ingresar y validar temperatura
				temperaturaCorporalIngresada = prompt ("Indique la temperatura corporal del perro: ");
				while (isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 35 || temperaturaCorporalIngresada > 41)
				{
					temperaturaCorporalIngresada = prompt ("Error, vuelva a ingresar temperatura corporal del animal: ")
				}		
				//para encontrar perro más pesasdo
				if (primerPerroIngresado == true || pesoMaximoDePerro < pesoIngresado)
				{
					pesoMaximoDePerro = pesoIngresado;
					primerPerroIngresado = false;
					nombreDelPerroMasPesado = nombreIngresado;
				}

				//para el promedio de temperatura
				contadorDePerros = contadorDePerros +1;
				acumuladorDeTemperaturasDePERROS = acumuladorDeTemperaturasDePERROS + temperaturaCorporalIngresada;
				break;


			case "gato":
				//Para validar peso
				while (isNaN(pesoIngresado)==true || pesoIngresado < 2 || pesoIngresado > 11)
				{
					pesoIngresado = prompt ("Error, vuelva a indicar peso de la mascota");
					pesoIngresado = parseInt(pesoIngresado);
				}
				//Para ingresar y validar temperatura
				temperaturaCorporalIngresada = prompt ("Indique la temperatura corporal del gato: ");
				while (isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 38 || temperaturaCorporalIngresada > 43)
				{
					temperaturaCorporalIngresada = prompt ("Error, vuelva a ingresar temperatura corporal del gato: ")
				}	
				//para el promedio de temperatura
				contadorDeGatos = contadorDeGatos +1;
				acumuladorDeTemperaturasDeGatos = acumuladorDeTemperaturasDeGatos + temperaturaCorporalIngresada;

				break;


			case "otra cosa":
				//Para validar peso
				while (isNaN(pesoIngresado)==true || pesoIngresado < 1 || pesoIngresado > 10)
				{
					pesoIngresado = prompt ("Error, vuelva a indicar peso de la mascota");
					pesoIngresado = parseInt(pesoIngresado);
				}
				//Para ingresar y validar temperatura
				temperaturaCorporalIngresada = prompt ("Indique la temperatura corporal del animal: ");

				while (isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 25 || temperaturaCorporalIngresada > 42)
				{
					temperaturaCorporalIngresada = prompt ("Error, vuelva a ingresar temperatura corporal del animal: ")
				}
				//Para sacar nombre de la última mascota de tipo otra cosa
				ultimaMascotaDeTipoOtraCosa = nombreIngresado;

				break;
		}

		//para estado clínico
		estadoClinicoIngresado = prompt ("Indicar el estado clínico: ");
		while (estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion")
		{
			estadoClinicoIngresado = prompt("Error, vuelva a indicar estado clínico: ");
		}

		//////////////////////////TERMINÉ DE VALIDAR DATOS

		//Para encontrar animal sin pelo con más temperatura
		if (tipoDePelajeIngresado == "sin pelo")
		{
			if (primerAnimalSinPelo == true || temperaturaMinimaDeAnimalSinPelo > temperaturaCorporalIngresada)
			{
				temperaturaMinimaDeAnimalSinPelo = temperaturaCorporalIngresada;
				primerAnimalSinPelo = false;
				nombreDelAnimalSinPeloConMenosTemperatura = nombreIngresado;
			}
		}

		//para contar animales enfermos
		if(estadoClinicoIngresado == "enfermo")
		{
			contadorDeAnimalesEnfermos = contadorDeAnimalesEnfermos + 1;
		}

	}

	if (contadorDeAnimalesEnfermos > 1)
	{
		porcentajeDeAnimalesEnfermos = contadorDeAnimalesEnfermos / contadorDeAnimalesGeneral * 100;
	}

	alert ("El perro más pesado es " + nombreDelPerroMasPesado + ". El porcentaje de animales enfermos sobre la cantidad total de mascotas es de %" + porcentajeDeAnimalesEnfermos +
	". El nombre del último animal de tipo otra cosa es " + ultimaMascotaDeTipoOtraCosa + ". ")
}
