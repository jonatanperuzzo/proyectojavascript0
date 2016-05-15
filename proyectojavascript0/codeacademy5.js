var cuarto = function(numero){
    return numero / 4;
};

if (cuarto(12) % 3 === 0 ) {
  console.log("La sentencia es true");
} else {
  console.log("La sentencia es false");
}


window.addEventListener("load",cuarto,false);