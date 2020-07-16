/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado = prompt("Por favor ingrese su nombre.", "Nombre");
	txtIdNombre.value = nombreIngresado;//mostrar
	alert("Su nombre es: " + nombreIngresado);

	//entrada
	//	nombreIngresado = prompt("Por favor ingrese su nombre.", "Nombre");
	// nombreIngresado = txtIdNombre.value

	//salida
	//txtIdNombre.value = nombreIngresado;
	//alert("Su nombre es: " + nombreIngresado);
}

