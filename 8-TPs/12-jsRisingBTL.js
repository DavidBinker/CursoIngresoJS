/*Binker David.

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let LegajoIngresado;
	let NacionalidadIngresada;

	edadIngresada = 0;
	sexoIngresado = 0;
	estadoCivilIngresado = 0;
	sueldoBrutoIngresado = 0;
	LegajoIngresado = 0;
	NacionalidadIngresada = 0; 

	while(edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("Ingrese una edad entre 18 y 90 años inclusive");
	}

	while(sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Indique su sexo: M para masculino, F para femenino");
	}

	while(estadoCivilIngresado != 4 && estadoCivilIngresado != 3 && estadoCivilIngresado != 2 && estadoCivilIngresado != 1)
	{
		estadoCivilIngresado = prompt("Indique su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}

	while(sueldoBrutoIngresado < 8000)
	{
		sueldoBrutoIngresado = prompt("Indique su sueldo bruto, a partir de 8000");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado)
	}

	while(LegajoIngresado < 1000 || LegajoIngresado > 9999)
	{
		LegajoIngresado = prompt("Indique número de legajo, numérico de 4 cifras sin ceros a la izquierda");
		
		LegajoIngresado = parseInt(LegajoIngresado);
	}

	while (NacionalidadIngresada != "A" && NacionalidadIngresada != "E" && NacionalidadIngresada != "N")
	{
		NacionalidadIngresada = prompt("Indique su nacionalidad: A para argentinos, E para extranjeros, N para nacionalizados");
	}

	switch(estadoCivilIngresado)
	{
		case "1":
			estadoCivilIngresado = "Soltero";
			break;

		case "2":
			estadoCivilIngresado = "Casado";
			break;

		case "3":
			estadoCivilIngresado = "Divorciado";
			break;

		default:
			estadoCivilIngresado = "Divorciado";
			break;
	}

	switch(NacionalidadIngresada)
	{
		case "A":
			NacionalidadIngresada = "Argentinos";
			break;

		case "E":
			NacionalidadIngresada = "Extranjeros";
			break;

		default:
			NacionalidadIngresada = "Nacionalizados";
			break;
	}

	if(sexoIngresado == "F")
	{
		sexoIngresado = "Femenino"; 
	}else
	{
		sexoIngresado = "Masculino";
	}

	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;
	document.getElementById("txtIdLegajo").value = LegajoIngresado;
	document.getElementById("txtIdNacionalidad").value = NacionalidadIngresada;

}
