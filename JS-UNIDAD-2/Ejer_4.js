//Recorrer un array de números y devuelva el mayor.
const numeros = [34, 67, 23, 89, 2, 100, 45]; // Array de números

let mayor = numeros[0]; // Inicializar la variable 'mayor' con el primer elemento del array

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log("El número mayor es:", mayor);