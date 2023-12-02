/* Ejercicio 10: 
'split' convierte a Array por defecto con una 'coma' por elemento
'reverse' invierte el Array 
'join' une o intercala un carácter. En este caso, une sin dejar espacio */

//-- FORMA 1 --
var palabra= prompt("Ingrese una palabra: ");
let invertir= (a) => a.split("").reverse().join("");
alert(invertir(palabra));

/* -- FORMA 2 --
var palabra= prompt("Ingrese una palabra: ");
let vector= Array.from(palabra); // Convertir a array
vector.reverse();
alert(vector);

   -- FORMA 2 --
var palabra= prompt("Ingrese una palabra: ");
var aux= (palabra.split("").reverse()); // Convertir a array
alert(aux2);
*/