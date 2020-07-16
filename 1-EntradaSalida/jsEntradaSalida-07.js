/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
/*var primerNumero;
var segundoNumero;
var resultado;


	primerNumero = parseInt(txtIdNumeroUno.value);
	segundoNumero = parseInt(txtIdNumeroDos.value);*/

function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = parseInt(txtIdNumeroUno.value);
	segundoNumero = parseInt(txtIdNumeroDos.value);

	resultado = primerNumero + segundoNumero;
	alert("La suma es :"+ parseInt(resultado));	
}

function restar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = parseInt(txtIdNumeroUno.value);
	segundoNumero = parseInt(txtIdNumeroDos.value);
	resultado = primerNumero - segundoNumero;
	alert("La resta es :"+ parseInt(resultado));
	
}

function multiplicar()
{ 	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = parseInt(txtIdNumeroUno.value);
	segundoNumero = parseInt(txtIdNumeroDos.value);
	resultado = primerNumero * segundoNumero;
	alert("La multiplicacion es :"+ parseInt(resultado));
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = parseInt(txtIdNumeroUno.value);
	segundoNumero = parseInt(txtIdNumeroDos.value);
	resultado = primerNumero / segundoNumero;
	alert("La divicion es :"+parseInt(resultado));
}

