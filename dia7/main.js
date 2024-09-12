function suma(num1, num2) {
    return num1 + num2;
}

function resta (num1, num2) {
    return num1 - num2;
}

function multiplicacion (num1, num2) {
    return num1 * num2;
}

function division (num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    } else {
        return "No se puede dividir por cero";
    }
}

while(true) {
    let operacion = prompt("Elige una operación a realizar: suma, resta, multiplicacion, division o salir");

    if(operacion !== "suma" && operacion !== "resta" && operacion !== "multiplicacion" && operacion !== "division" && operacion !== "salir") {
        alert("Operación no válida");
        operacion = prompt("Elige una operación a realizar: suma, resta, multiplicacion, division, salir");
    }
    
    if (operacion === "salir") {
        alert("Hasta la vista");
        break;
    }

    let num1 = parseInt(prompt("Ingresa el primer número"));
    let num2 = parseInt(prompt("Ingresa el segundo número"));
    switch(operacion) {
        case "suma": 
            alert(`La suma de ${num1} y ${num2} es: ${suma(num1, num2)}`);
            break;
        case "resta":
            alert(`La resta de ${num1} y ${num2} es: ${resta(num1, num2)}`);
            break;
        case "multiplicacion":
            alert(`El producto de ${num1} y ${num2} es: ${multiplicacion(num1, num2)}`);
            break;
        case "division":
            if(num2 != 0) {
                alert(`El cociente entre ${num1} y ${num2} es: ${division(num1, num2)}`);
            } else {
                alert(division(num1, num2));
            }
            break;
    }
}
