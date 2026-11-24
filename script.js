
// Lista de notas
let notas = [];

// Obtener el formulario
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    // Limpiar la lista
    notas = [];

    // Limpiar resultados anteriores
    document.getElementById("resultados").innerHTML = "";

    // Guardar las 5 notas en la lista
    for (let i = 1; i <= 5; i++) {

        let nota = parseFloat(document.getElementById("nota" + i).value);

        if (nota < 0 || nota > 5 || isNaN(nota)) {
            document.getElementById("resultados").innerHTML =
                '<p class="error">Error: las notas deben estar entre 0 y 5.</p>';
            return;
        }

        notas.append(nota);
    }

    // Mostrar resultados
    let contenido = "<h2>===== RESULTADOS =====</h2>";

    for (let i = 0; i < 5; i++) {

        contenido += '<div class="resultado">';

        contenido += "<h3>Estudiante " + (i + 1) + "</h3>";

        contenido += "<p>Nota: " + notas[i].toFixed(1) + "</p>";

        if (notas[i] >= 3.0) {

            contenido += '<p class="aprobado">Estado: APROBADO</p>';

        } else {

            contenido += '<p class="reprobado">Estado: REPROBADO</p>';

        }

        contenido += "</div>";
    }

    document.getElementById("resultados").innerHTML = contenido;

});
