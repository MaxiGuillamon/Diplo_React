//Programar un contador de caracteres para un textarea.


const textarea = document.getElementById("texto");
        const contador = document.getElementById("contador");

        textarea.addEventListener("input", function() {
            contador.textContent = textarea.value.length;
        });