/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{	//crea la variable
	var nombreIngresado;
	//asigna la variable
	nombreIngresado= prompt("Por favor, ingrese su nombre", "Nombre");
	//muestra un alert con el nombre concatenado con la variable y el string
	alert("Su nombre es: " + nombreIngresado);
}

