/*
Binker David
Ejercicio 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let importe;
	let porcentaje_a_restar;
	let multiplicacion
	let porcentaje_del_importe;
	let resultado

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje_a_restar = prompt("Ingrese, sólo con números, el porcentaje que desea restar al importe");
	porcentaje_a_restar = parseInt(porcentaje_a_restar);


	//calculo el porcentaje
	multiplicacion = porcentaje_a_restar * importe;

	porcentaje_del_importe = multiplicacion / 100;


	//resto el porcentaje al importe

	resultado = importe - porcentaje_del_importe;

	//muestro el resultado

	document.getElementById("txtIdResultado").value = resultado;
}