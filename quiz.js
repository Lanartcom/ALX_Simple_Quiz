function checkAnswer() {
   
    let correctAnswer = "4";
    
   
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    
    let feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect";
    }
}


document.addEventListener("DOMContentLoaded", function() {
   
    let submitButton = document.getElementById('submit-answer');

   
    submitButton.addEventListener('click', checkAnswer);
});
