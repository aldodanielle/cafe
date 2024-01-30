console.log("Nueva orden");

function ordenAtendida(orden){
    if(orden === true){
        console.log("Atendiendo orden");
        console.log("...");
        console.log("Orden Espachada")
    } else{
        console.log("No");
        console.log("Espera un momento ...");
        console.log("Vuelve a verificar");
    }
}


let respuesta;
console.log("¿Hay una nueva orden?")
respuesta = false;
console.log(ordenAtendida(respuesta))
