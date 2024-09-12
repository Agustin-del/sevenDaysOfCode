let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = []

while(true) {
    let agregarOEliminar;
    let pregunta;

    if(frutas.length > 0 | lacteos.length > 0 | congelados.length > 0 | dulces.length > 0) {
        agregarOEliminar = prompt("¿Deseas agregar un alimento? O eliminar un alimento a la lista? 1 , 2 o 3 para salir");
    } else {
        pregunta = prompt("¿Deseas agregar un alimento? si o no")
    }
    if(pregunta === "no" | agregarOEliminar == 3) {
        break;
    }
    if (agregarOEliminar == 1 | pregunta == "si") {

        let alimento = prompt("¿Cuál es el alimento que deseas agregar? ");
        let categoria = prompt("¿En qué categoría se encaja el alimento? frutas, lacteos,  congelados, dulces");
        switch (categoria) {
            case "frutas":
                frutas.push(alimento);
                break;
            case "lacteos":
                lacteos.push(alimento);
                break;
            case "congelados":
                congelados.push(alimento);
                break;
            case "dulces":
                dulces.push(alimento);
                break;
        } 
    } else if (agregarOEliminar == 2) {
        let elementoAEliminar = prompt(`Frutas: ${frutas} \nLacteos: ${lacteos} \nCongelados: ${congelados} \nDulces: ${dulces} \n¿Qué alimento deseas eliminar?`);
        let existeElElemento = false;
        for(element of lacteos) {
            if (element == elementoAEliminar) {
                eliminarElemento(elementoAEliminar, lacteos);
                existeElElemento = true;
            }
        }   
        for(element of frutas) {
            if(element == elementoAEliminar) {
                eliminarElemento(elementoAEliminar, frutas);
                existeElElemento = true;
            }
        }
        for(element of congelados) {
            if(element == elementoAEliminar) {
                eliminarElemento(elementoAEliminar, congelados);
                existeElElemento = true;
            }
        }
        for(element of dulces) {
            if (element == elementoAEliminar, dulces) {
                eliminarElemento(elementoAEliminar);
                existeElElemento = true;
            }
        }
        if (!existeElElemento) {
            alert("El alimento no estaba en la lista");
        }
    } 
}

function eliminarElemento(elemento, array) {
    let indice = array.indexOf(elemento);
    if(indice != -1) {
        array = array.splice(indice, 1);
    }
}

if (frutas.length > 0) {
    console.log(`Frutas: ${frutas.join()}`);
}
if (lacteos.length > 0) {
    console.log(`Lacteos: ${lacteos.join()}`);
}
if(congelados.length > 0) {
    console.log(`Congelados: ${congelados.join()}`);
}
if(dulces.length > 0) {
    console.log(`Dulces: ${dulces.join()}`)
}