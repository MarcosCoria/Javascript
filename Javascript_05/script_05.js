/* Ejercicio 05 
1-Para texto se puede utilizar ` 
2-Para los switchs se debe utilizar ' en caso de Strings
*/
 var num1 = prompt("Ingrese primer valor: ");
 var num2 = prompt("Ingrese segundo valor: ");
 num1 = parseInt(num1); //Convertimos a entero
 num2 = parseInt(num2); //Convertimos a entero
 var flag = false;
 while (flag == false) {
     var opc = prompt("MENÚ\nS-Suma\nR-Resta\nM-Multiplicación\nD-División\nF-Finalizar: ");
     switch (opc) {
         case 'S': case 's':
             var suma = `La suma entre ${num1} y ${num2} equivale a ${num1 + num2}`;
             alert(suma);
             break;
         case 'R': case 'r':
             var resta = `La resta entre ${num1} y ${num2} equivale a ${num1 - num2}`;
             alert(resta);
             break;
         case 'M': case 'm':
             var multiplicacion = `La multiplicación entre ${num1} y ${num2} equivale a ${num1 * num2}`;
             alert(multiplicacion);
             break;
         case 'D': case 'd':
             if (num2 != 0) {
                 var division = `La división entre ${num1} y ${num2} equivale a ${num1 / num2}`;
                 alert(division);
             } else {
                 alert("No se puede dividir por 0");
             }
             break;
         case 'F': case 'f':
             alert("Finalizando");
             flag=true;
             break;
         default:
             alert("Error");
             break;
     }
 }