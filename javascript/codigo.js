var puntos = 300
puntos = parseInt(300);
var promociones = 10

function iniciarSesion () {
    let nombreApellido = prompt ("Por favor identifíquese con nombre y apellido")
}

function verificarPromocion() {
    alert ("¡Actualmente tiene " + promociones + " descuentos disponibles!")
    let pregunta1 = prompt ("¿Desea obtener uno de los cupones de descuentos disponibles?")
        if (pregunta1 == "si") {
            promociones -= 1 
            alert ("Le hemos enviado a su correo el codigo de descuento, actualmente tiene "+ promociones + " disponibles")
        }
        else if (pregunta1 == "no") {
            alert ("¡Recuerde que puede reclamar sus cupones en cualquier momento!")
        }
        else {
            alert ("Responda si o no")
        }
    seleccionarOperacion()

} 

function verificarPuntos () {
    alert ("Actualmente dispone de " + puntos + " puntos")
    seleccionarOperacion()      
}

function recargarPuntos () {
    var pregunta2 = parseInt(prompt('¿Cuántos puntos desea recargar?'))
        if (isNaN(pregunta2)){
            alert("Ingrese un número válido")
        }
        else {
            alert ("Se recargaron " + pregunta2 + " puntos")
            puntos += pregunta2
        }
    seleccionarOperacion()
    }

function hacerPedido () {
    let pregunta3 = prompt("¿Qué producto desea comprar?")
    let pregunta4 = prompt("Pickup o Delivery")
        if (pregunta4 == "pickup") {
            alert("El artículo " + pregunta3 + " estará listo en nuestro local en 30 minutos")
        }
        else if (pregunta4 == "delivery") {
            alert("El artículo " + pregunta3 + " llegará a su dirección en 1 hora")
        }
        else {
            alert("Escoja si es Pickup o Delivery")
        }
    seleccionarOperacion()       
}

function contacto () {
    prompt("Escríbanos su consulta o reclamo")
    alert("¡Se han envíado los comentarios! Nuestro equipo le responderá a su correo en no más de 24 horas.")
    seleccionarOperacion()
}

function finalizarSesión () {
    alert("Nos vemos pronto")
}

function seleccionarOperacion() {
    
    let op = prompt("¡Bienvenido! Por favor seleccione una opción")
    switch (op){
        case "1":
            verificarPromocion()
            break
        case "2":
            verificarPuntos()
            break
        case "3":
            recargarPuntos()
            break
        case "4":
            hacerPedido()
            break
        case "5":
            contacto()
            break
        case "6":
            finalizarSesión()
            break
        default:
            alert("Por favor ingrese una opción válida")
    }
}
