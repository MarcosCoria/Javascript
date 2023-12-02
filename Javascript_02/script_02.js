//Ejercicio 02
const PI= 3.141592653589793;
let radio= prompt("Ingrese el radio de una circunferencia: ");
function calcularArea(a){
    area= PI* Math.pow(a,2);
    return area
}
function calcularPerimetro(a){
    perimetro= 2* PI * a;
    return perimetro;
}
alert("El área del círculo es: " + calcularArea(radio) + "\nEl perímetro del círculo es : "  + calcularPerimetro(radio));