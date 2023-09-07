// Obtener todas las preguntas
const questions = document.querySelectorAll(".question");

// Contador de puntos
let puntos = 0;

// Función para mostrar la siguiente pregunta
function showNextQuestion(currentQuestionIndex) {
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].style.display = "block";
    }
}

// Función para calcular los puntos
function calcularPuntos() {
    // Obtener todas las respuestas seleccionadas en las preguntas correspondientes
    const selectedAnswers = [];
    questions.forEach((question, index) => {
        if ([0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 14, 15, 18, 19].includes(index)) {
            const radioButton = question.querySelector('input[type="radio"]:checked');
            if (radioButton && radioButton.value === "Si") {
                puntos += 5;
            }
        }
        else if([9, 16, 17].includes(index)) {
            const radioButton = question.querySelector('input[type="radio"]:checked');
            if (radioButton && radioButton.value === "No") {
                puntos += 5;
            }
        }
        else if([8].includes(index)) {
            const radioButton = question.querySelector('input[type="radio"]:checked');
            if (radioButton && radioButton.value === "NoEsCierta"){
                puntos += 5;
            }
        }
        else if([13].includes(index)){
            const radioButton = question.querySelector('input[type="radio"]:checked');
            if (radioButton && radioButton.value === "SiLoSe"){
                puntos += 5;
            }
        }
    });

    // Actualizar el contador de puntos en la página
    const puntosContainer = document.getElementById("puntos");
    if (puntosContainer) {
        puntosContainer.textContent = `Total Puntos: ${puntos}`;
    }
}

// Escuchar cambios en las respuestas
questions.forEach((question, index) => {
    const radioButtons = question.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(radioButton => {
        radioButton.addEventListener("change", () => {
            // Ocultar la pregunta actual
            question.style.display = "none";

            // Mostrar la siguiente pregunta
            showNextQuestion(index + 1);

            // Calcular los puntos al responder
            calcularPuntos();
        });
    });
});

// Mostrar la primera pregunta al cargar la página
showNextQuestion(0);
