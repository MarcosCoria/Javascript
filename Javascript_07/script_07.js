// Ejercicio 07 
var num = prompt("Defina un número límite: ");
num = parseInt(num); // Convertimos a entero
let aux = 0; // Variable temporal
while (aux < num) {
    var a = prompt("Ingrese un número: ");
    a= parseInt(a); // Convertimos a entero
    aux = aux + a;
    alert("Valor actual: " + aux + ", el límite es: " + num);
}
alert("Sumatoria total: " + aux +  "; límite superado.");