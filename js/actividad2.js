function checkAnswer(questionName, correctAnswer) {
    const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
    const feedbackElement = document.getElementById(`feedback-${questionName}`);

    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            feedbackElement.textContent = '¡Respuesta correcta!';
            feedbackElement.style.color = 'green';
        } else {
            /*feedbackElement.textContent = 'Respuesta incorrecta. La respuesta correcta es: ' + correctAnswer;*/
            feedbackElement.textContent = 'Respuesta incorrecta.';
            feedbackElement.style.color = 'red';
        }
    } else {
        feedbackElement.textContent = 'Por favor, selecciona una respuesta.';
        feedbackElement.style.color = 'black';
    }
}