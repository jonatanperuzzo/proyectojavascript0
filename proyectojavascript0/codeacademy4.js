var x = function a(){
	var edad = prompt("Podes empezar a jugar.\n" + " ¿Cual es tu edad? ");
	var respuesta = parseInt(edad);

	if(respuesta < 18){
		console.log("Jugas bajo tu propia responsabilidad");
	} else {
		console.log("Podes empezar a jugar!!!!");
	}

	introduccion = 'Blancanieves y Batman estaban en el paradero de bus, esperando para poder ir de compras. Había una venta de liquidación,' +
	 'y ambos necesitaban comprar prendas nuevas. Batman nunca te cayó bien. Caminas hacia él';

	 console.log(introduccion);

	 console.log("Batman te mira con odio.");

		userAnswer = prompt("¿Te crees muy de buenas, idiota?");

		console.log(userAnswer);

		if(userAnswer == "si" || userAnswer == "Si"){
			console.log( "Batman te golpea bien fuerte. ¡Él es Batman, y tú eres tú! ¡Pero claro que Batman te ganaría!");
		} else {
			console.log("Decidiste que no te sientes con suerte. ¡Bien hecho! Haz ganado el juego de evitar que Batman te rompa la cara");
		}

		var retroalimentacion = prompt("Califica mi Juego del 1 al 10: ");
		var calificacion = parseInt(retroalimentacion);

		if(calificacion >= 8 ){
			alert("Este es solo el comienzo de mi imperio de juegos. ¡Si quieres saber más, no te desconectes!");
		} else {
			alert("¡¿Me rompí la espalda haciendo este juego para que me des esa calificación?! ¡Es el colmo! ¡Ya verás!");
		}
}

window.addEventListener("load",x,false);