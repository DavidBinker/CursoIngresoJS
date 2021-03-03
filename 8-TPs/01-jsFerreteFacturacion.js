/*  Binker David
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = precio1 + precio2 + precio3;

    alert("La suma de los tres precios es igual a " + resultado);

}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultado;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);
    
    resultado = (precio1+precio2+precio3) / 3;

    alert("El promedio de los tres precios es de " + resultado);
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let sumaDePrecios;
    let Iva;
    let PrecioFinalMasIva;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    sumaDePrecios = precio1  + precio2 + precio3;

	Iva = (sumaDePrecios * 21) / 100;

    PrecioFinalMasIva = Iva + sumaDePrecios;

    alert("El precio final más IVA 21% es de " + PrecioFinalMasIva);
}