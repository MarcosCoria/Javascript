/* Ejercicio 09
1- split ("") hace referencia a cada carácter porque se fija en que no haya espacio
2- join (" ") lo que hace es intercalar o unir el carácter 'espacio' o cualquier otro
*/
var aux= prompt("Ingrese una frase: ");
alert(aux.split("").join(" "));