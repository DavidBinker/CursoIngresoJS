/*  Binker David
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoterreno;
    let anchoterreno;
    let cantidadDeAlambre;

    largoterreno = document.getElementById("txtIdLargo").value;
    anchoterreno = document.getElementById("txtIdAncho").value;

    largoterreno = parseInt(largoterreno);
    anchoterreno = parseInt(anchoterreno);

    cantidadDeAlambre = (largoterreno*2 + anchoterreno*2) * 3;

    alert("La cantidad de alambre necesaria es de " + cantidadDeAlambre + " metros");

}
function Circulo () 
{
    let radio;
    let circunferencia;
    let cantidadDeAlambre;

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    circunferencia = (radio*2) * 3.14;

    cantidadDeAlambre = circunferencia * 3;

    alert("La cantidad necesaria de alambre es de " + cantidadDeAlambre + " metros");
	
}
function Materiales () 
{
    let largoterreno;
    let anchoterreno;
    let metrocuadrado;
    let bolsasDeCemento;
    let bolsasDeCal;

    largoterreno = document.getElementById("txtIdLargo").value;
    anchoterreno = document.getElementById("txtIdAncho").value;

    largoterreno = parseInt(largoterreno);
    anchoterreno = parseInt(anchoterreno);

    metrocuadrado = largoterreno * anchoterreno;

    bolsasDeCemento = metrocuadrado * 2;
    bolsasDeCal = metrocuadrado * 3;

    alert("Se necesitarían " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de Cal para las medidas ingresadas");
}