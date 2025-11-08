//Generar una función que calcule el promedio de 2 notas de parciales por ejemplo la
//materia Historia.


function calcularPromedio() {
    let nota1 = prompt("Ingresá la nota del primer parcial:"); // Solicitamos la primera nota al usuario
    let nota2 = prompt("Ingresá la nota del segundo parcial:");// Solicitamos la segunda nota al usuario

    
    nota1 = 10;
    nota2 = 7;

    // Calculamos el promedio
    let promedio = (nota1 + nota2) / 2;

    alert("El promedio de Historia es: " + promedio);
}

calcularPromedio();