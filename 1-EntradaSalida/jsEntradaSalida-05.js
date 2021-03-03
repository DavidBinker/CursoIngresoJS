/*
Binker
Ejercicio 5 bis
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	apellido=prompt("Ingrese su apellido");

	alert(apellido + ", su nombre es " + nombre + " y su edad es de " + edad);

}

/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan

*/
