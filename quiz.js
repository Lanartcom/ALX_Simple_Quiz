document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the submit button
    let submitButton = document.getElementById('submit-answer');
    
    // Add event listener to the submit button
    submitButton.addEventListener('click', checkAnswer);
});

function checkAnswer() {
    // Correct answer
    let correctAnswer = "4";
    
    // Retrieve selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer is selected
    if (userAnswer) {
        userAnswer = userAnswer.value;
        
        // Compare the user answer to the correct answer and provide feedback
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // Provide feedback if no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}
