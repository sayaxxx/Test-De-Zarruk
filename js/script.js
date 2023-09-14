const questions = document.querySelectorAll(".question");
let puntos = 0;

function showNextQuestion(currentQuestionIndex) {
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].style.display = "block";
    }
}

function calcularPuntos() {

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

    const puntosContainer = document.getElementById("puntos");
    if (puntosContainer) {
        puntosContainer.textContent = `Total Puntos: ${puntos}`;
    }
}

questions.forEach((question, index) => {
    const radioButtons = question.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(radioButton => {
        radioButton.addEventListener("change", () => {

            question.style.display = "none";

            showNextQuestion(index + 1);
            preguntasRespondidas += 1
            calcularPuntos();
        });
    });
});

var preguntasRespondidas = 0;

var opcionesRespuesta = document.querySelectorAll('input[type="radio"]');
opcionesRespuesta.forEach(function(opcion) {
    opcion.addEventListener('change', function() {

        opcion.setAttribute('data-answered', 'true');
        
        preguntasRespondidas = document.querySelectorAll('input[type="radio"][data-answered="true"]').length;

        if (preguntasRespondidas === 20) {
            console.log("Todas las preguntas han sido respondidas.");
            const puntosTexto = document.getElementById("puntosText");

            const btnRetryTest = document.querySelector("#retryTest");
            btnRetryTest.style.display = "block";

            const resultadoElement = document.querySelector(".resultado");
            resultadoElement.style.display = "block";

            if (puntos >=0 && puntos <=35){
                puntosTexto.textContent =  `El Infierno\n\n
                Está rajado. Si tiene productos o servicios con poca generación de caja, que consumen gran cantidad de capital de trabajo y tiene alto endeudamiento, por favor, consulte con un asesor financiero antes de que se quiebre. Si no tiene problemas de liquidez, dele gracias a los dioses del olimpo financiero, seguramente tiene productos y servicios con muy buena generacion de caja.`
            } if (puntos >=40 && puntos <=60){
                puntosTexto.textContent = `El Purgatorio\n\n
                Se puede decir que está haciendo las cosas bien en cuanto al monitoreo de la caja y si tiene un negocio rentable con flujos de caja positivos, puede dormir tranquilo, pero siga haciendo la tarea. Si está teniendo problemas de liquidez tiene suficientes indicadores para analizar la situación y tomar desiciones.`
            } if (puntos >=65 && puntos <=90){
                puntosTexto.textContent = `Camino al cielo.\n\nSu seguimiento a los flujos de caja y el uso de indicadores basados en la caja, le está diciendo exactamente qué está pasando con la liquidez de la empresa. Ojalá tenga buenos niveles de caja, pues está mirando el impacto de sus desiciones en sus flujos de caja. Si el resultado del seguimiento le muestra bajos niveles de efectivo, deberá replantarse sus objetivos estratégicos e ir tomando ya desiciones gerenciales con productos y servicios que sean mayores generadores de caja.`
            } if (puntos >=95 && puntos <=100){
                puntosTexto.textContent = `El cielo.\n\n
                En lo referente a los temas de las desciiones gerenciales, su impacto en la caja, y su monitoreo permanente a los niveles de caja, lo tendrá en el cielo siempre y cuando tenga una muy buena salud financiera; fruto de un modelo de nogocio rentable, En caso de una cisis empresarial o económica, actuando rápido, usted estará a salvo porque sabrá siempre cúando se avecina la tormenta. Que tenga siempre buen viento y buena mar`
            }
        }
    });
});

document.getElementById("retryTest").addEventListener("click", function() {
    location.reload();
});


showNextQuestion(0);
