$(document).on("ready", inicio);

function inicio(){
	$("#container img").on("click", abrirFull);
	$("#imgFull").on("click", cerrarFull);
}

function abrirFull(){
	//alert($(this).attr('alt'));
	var nombre = $(this).attr('alt') + "_big";
	var direccion = "img/" + nombre + ".jpg";

	$("#imgFull").attr('src', direccion); /* asignamos la variable direccion */

	$("#previa").fadeIn(); //asignamos la imagen en el div con id #previa
}

function cerrarFull(){
	$("#previa").fadeOut();
}