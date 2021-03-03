/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/
function mostrar()
{
  let tipoIngresado;
  let cantidadDeBolsasIngresada;
  let precioPorBolsa;
  let respuesta;
  let precioPorProducto;
  let precioTOTALdeLaCompra;
  let acumuladorCantidadTotalBolsas;
  let descuento;
  let precioCONDescuento;
  let contadorDeCAL;
  let contadorDeCEMENTO;
  let contadorDeARENA;
  let tipoCONMASBOLSAS;
  let primerIngresoDeArena;
  let primerIngresoDeCal;
  let primerIngresoDeCemento;
  let precioMaximoARENA;
  let precioMaximoCAL;
  let precioMaximoCEMENTO;
  let tipoMasCaro;

  contadorDeCAL=0;
  contadorDeCEMENTO=0;
  contadorDeARENA=0;
  primerIngresoDeArena=true;
  primerIngresoDeCal=true;
  primerIngresoDeCemento=true;

  precioTOTALdeLaCompra = 0;
  acumuladorCantidadTotalBolsas = 0;

  respuesta = "si";

  while (respuesta=="si")
  {
    //valido
    tipoIngresado = prompt("ingrese tipo de producto: ");
    while (tipoIngresado !="arena" &&tipoIngresado !="cal" &&tipoIngresado !="cemento")
    {
      tipoIngresado = prompt("error ingrese tipo de producto: ");
    }

    cantidadDeBolsasIngresada = prompt("ingrese cantidad de bolsas de producto: ");
    cantidadDeBolsasIngresada = parseInt(cantidadDeBolsasIngresada);
    while (isNaN(cantidadDeBolsasIngresada)==true || cantidadDeBolsasIngresada < 0)
    {
      cantidadDeBolsasIngresada = prompt("error ingrese cantidad de bolsas de producto: ");
      cantidadDeBolsasIngresada = parseInt(cantidadDeBolsasIngresada);
    }

    precioPorBolsa = prompt("ingrese precio por bolsa de producto: ");
    precioPorBolsa = parseInt(precioPorBolsa);
    while (isNaN(precioPorBolsa)==true || precioPorBolsa < 0)
    {
      precioPorBolsa = prompt("error ingrese precio por bolsa de producto: ");
      precioPorBolsa = parseInt(precioPorBolsa);
    }
    //terminé de validar

    //calculo precio por producto y total
    precioPorProducto = precioPorBolsa * cantidadDeBolsasIngresada;
    precioTOTALdeLaCompra = precioTOTALdeLaCompra + precioPorProducto;

    acumuladorCantidadTotalBolsas = acumuladorCantidadTotalBolsas + cantidadDeBolsasIngresada;

    //tipo con mas cantidad de bolsas
    switch (tipoIngresado)
    {
      case "arena":
        contadorDeARENA++;
        if (primerIngresoDeArena == true || precioMaximoARENA < precioPorBolsa)
        {
          precioMaximoARENA = precioPorBolsa;
          primerIngresoDeArena=false;
        }
        break;
      case "cemento":
        contadorDeCEMENTO++;
        if (primerIngresoDeCemento == true || precioMaximoCEMENTO < precioPorBolsa)
        {
          precioMaximoCEMENTO = precioPorBolsa;
          primerIngresoDeCemento=false;
        }
        break;
      case "cal":
        contadorDeCAL++;
        if (primerIngresoDeCal == true || precioMaximoCAL < precioPorBolsa)
        {
          precioMaximoCAL = precioPorBolsa;
          primerIngresoDeCal=false;
        }
        break;
    }

    respuesta = prompt("Desea ingresar otro producto?");
  }
  //termina el while


  document.write ("El importe total a pagar, sin descuento es " + precioTOTALdeLaCompra);

  if (acumuladorCantidadTotalBolsas > 10)
  {
    if (acumuladorCantidadTotalBolsas > 30)
    {
      descuento = 25;
    }
    else
    {
      descuento= 15;
    }
    precioCONDescuento = precioTOTALdeLaCompra - (precioTOTALdeLaCompra * descuento / 100);
    document.write (". El importe total, CON descuento es de " + precioCONDescuento)
  }

  //para calcular tipo con mas unidades
  if (contadorDeCAL > contadorDeARENA && contadorDeCAL > contadorDeCEMENTO)
  {
    tipoCONMASBOLSAS = "la cal";
  }
  else
  {
    if (contadorDeARENA > contadorDeCEMENTO)
    {
      tipoCONMASBOLSAS = "la arena";
    }
    else
    {
      tipoCONMASBOLSAS = "el cemento"
    }
  }
  document.write (". El tipo con mas unidades es " + tipoCONMASBOLSAS);

  //para calcular tipo mas caro
  if (precioMaximoCAL > precioMaximoARENA && precioMaximoCAL > precioMaximoCEMENTO)
  {
    tipoMasCaro = "la cal";
  }
  else
  {
    if (precioMaximoARENA > precioMaximoCEMENTO)
    {
      tipoMasCaro = "la arena";
    }
    else
    {
      tipoMasCaro = "el cemento"
    }
  }
  document.write (". El tipo mas caro es " + tipoMasCaro);
}
