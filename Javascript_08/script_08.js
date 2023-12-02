// Ejercicio 08
var num= parseInt(prompt("Ingrese números/ Ingrese 0 para finalizar ")); // Convertimos a entero
let min, max, prom, suma=0, cont=0;
min= num;
max= num;
suma= num;
while(num!=0){
    num=parseInt(prompt("Ingrese números/ Ingrese 0 para finalizar: "));
    suma= suma + num;
    cont++;
    if(num<min){
        min= num;
    } else if(num>max){
        max= num;
    }
}
alert("El mayor es: " + max + "\nEl menor es: " + min + "\nEl promedio es: " + suma/cont);