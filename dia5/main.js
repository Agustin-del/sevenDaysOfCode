
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = []
let pregunta = "";
do {
    pregunta = prompt("¿Deseas agregar un alimento a tu lista de compras? si o no");
     if (pregunta == "si") {
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
    }
} while (pregunta == "si");

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