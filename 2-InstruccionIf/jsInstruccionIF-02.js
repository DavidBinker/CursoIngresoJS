//Binker David
function mostrar()
{
	let peso;
	let altura;
	let IMC;

	peso = prompt("Ingrese su peso");
	altura = prompt("Ingrese su altura en centimetros");

	peso = parseInt(peso);
	altura = parseInt(altura);

	altura = altura / 100

	IMC = peso / (altura*altura);

	if(IMC < 18.6)
	{
		alert("Bajo peso");
	}else
	if(IMC < 25)
	{
		alert("Peso normal");
	}else
	if(IMC < 27)
	{
		alert("Preobesidad");
	}else
	if(IMC < 30)
	{
		alert("Obesidad I");
	}else
	if(IMC < 35)
	{
		alert("Obesidad II");
	}else
	{
		alert("Obesidad III");
	}
}//FIN DE LA FUNCIÓN