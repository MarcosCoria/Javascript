// Ejercicio 11:
var aux= prompt("Ingresa una frase: ");
let vector= aux.split(" "); // Vector que contien las palabras separadas por espacios
var palabra="";
for(i=0; i<vector.length;i ++){
   if(vector[i].length>palabra.length){ // Si el largo contenido del vector es mayor al largo de la palabra
      palabra= vector[i]; // La palabra toma su valor
   }
}
alert("Frase original: " + aux +  "\nLa palabra más larga es: " + palabra);