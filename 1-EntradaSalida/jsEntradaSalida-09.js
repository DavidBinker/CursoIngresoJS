/*
Binker David
Ejercicio 9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let porcentaje_a_sumar;
	let multiplicacion
	let porcentaje_del_sueldo;
	let resultado

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	porcentaje_a_sumar = prompt("Ingrese, sólo con números, el porcentaje que desea sumar al sueldo");
	porcentaje_a_sumar = parseInt(porcentaje_a_sumar);


	//calculo el porcentaje
	multiplicacion = porcentaje_a_sumar * sueldo;

	porcentaje_del_sueldo = multiplicacion / 100;


	//sumo el porcentaje al sueldo

	resultado = sueldo + porcentaje_del_sueldo;

	//muestro el resultado

	document.getElementById("txtIdResultado").value = resultado;
}
