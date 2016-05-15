var verificarCredito = function(ingresos){
    if(ingresos >= 100){
        console.log("¡Ganas mucho dinero! Estás calificado para manejar una tarjeta de crédito");
        } else if(ingresos < 100){
            console.log("Desgraciadamente no estás calificado para manejar una tarjeta de crédito. El capitalismo es así de cruel");
            }
    };
    
    verificarCredito(75);
    verificarCredito(125);
    verificarCredito(100);

  window.addEventListener("load",verificarCredito,false);