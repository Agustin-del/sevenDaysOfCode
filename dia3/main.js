let area = prompt("¿Quieres seguir por el área de front-end o el área de back-end? Responde con 1 o 2");

if (area == 1) {
    alert("Así que quieres aprender front-end.")
    let framework = prompt("¿Quieres aprender react o vue?");
} else if (area == 2) {
    alert("Así que quieres aprender back-end.")
    let framework = prompt("¿Quieres aprender C# o Java?");
}

let especializacion = prompt("¿Deseas seguir especializandote en el área elegida o ser full stack? Responde 1 o 2" );

if (especializacion == 1) {
    alert("Así que quieres seguir especializandote en el área elegida.");
} else if (especializacion == 2) {
    alert("Así que quieres ser full stack.");
}

let listaDeAprendizaje = [];
let aprendizaje = "";
do {
    aprendizaje = prompt("¿Qué tecnología te gustaría aprender?");
    if(aprendizaje !== "ninguna") {
        alert(`Creo que ${aprendizaje} es una muy buena opción`);
        listaDeAprendizaje.push(aprendizaje);
    }
} while (aprendizaje !== "ninguna");
