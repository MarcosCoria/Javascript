//Ejercicio 06
var num= prompt("Ingrese un número: ");
num= parseInt(num); // Convertimos a entero
// -- FORMA N1 --
comparacion= (num%2==0)? "Es par" : "No es par";
alert(comparacion);

// --FORMA N2--
// if(num%2==0){
//     alert("Es par");
// } else {
//     alert("No es par");
// }