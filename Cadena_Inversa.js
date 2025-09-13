console.log ("Este programa retorna una cadena con los caracteres en inversa");

const CADENA = "reconocer";                         // Escriba el arreglo de entrada (EDITAR)
let inversa = "";                                   // Crear variable para mostrar resultado en inversa

for (let i = CADENA.length - 1 ; i>=0 ; i--) {      // Ciclo For para invertir la cadena inicial; Comienza con el último caracter y lo recorre hasta el primero
    inversa += CADENA[i];                           // Guarda la cadena invertida letra por letra dentro de la variable "inversa"
}

console.log (`La cadena invertida es: ${inversa}`); // Imprime la cadena invertida

if (CADENA === inversa)                             // Verifica si es palíndromo o no
    console.log("Es un palíndromo (1)");            // Caso 1: Sí es un palíndromo: la cadena original es exactamente igual a la invertida
else

    console.log("No es un palíndromo (0)");          // Caso 0: No es un palíndromo: la cadena original no coincide con la invertida
