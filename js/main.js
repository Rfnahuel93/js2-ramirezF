for (let i = 1; i <= 20; i++){
    let ingresaNombre = prompt("Ingresa tu nombre"); 
    while (ingresaNombre != "") {
        alert("Turno N° " + i + " Nombre: " + ingresaNombre);
        alert("Calculador de prestamos | Eunoia |");
        let salida = "Bienvenido " + "| " + ingresaNombre + " |";
        alert(salida);
        let a = prompt("Ingrsa el Monto que necesitas");
        let b = prompt("Ingresa el Número de Cuotas");
        let salario = prompt("Ingrese su salario mensual")
        let t = a / 5;
        if (salario > t) {
            alert("El credito ha sido aprobado");
        }
        else {
            alert("El credito no ha sido aprobado");
        }
        let r = 23 / 20;
        let c = a * r;
        let d = c / b;
        let mensaje = "Su prestamo se le dara a pagar en " + b + " cuotas de $" + d;
        if (salario > t) {
            alert(mensaje);
        }
        else {
            alert("Muchas gracias por solicitar nuestra financiación");
        }
    }



}

