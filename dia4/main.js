let numero = Math.floor(Math.random() * 10 + 1);

let intentos = 3;

while(intentos > 0) {
    let guess = prompt("Adivina el número del 1 al 10: ");
    if(guess == numero) {
        alert("¡Lo has adivinado!");
        break;
    } else {
        intentos--;
        alert("Incorrecto, te quedan " + intentos + " intentos");
    }
}