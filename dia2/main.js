let name = prompt('¿Cuál es tu nombre?');
let age = prompt('¿Cuántos años tienes?');
let lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');

 alert(`Hola ${name},tienes ${age} y ya estás aprendiendo ${lenguaje}!`);

 let calificacion = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SI o 2 para NO`);

 if(calificacion == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
 } else if (calificacion == 2) {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
 }