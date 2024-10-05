function checkAnswer() {
    // Define the correct answer
    let correctAnswer = "4";
    
    // Get the user's selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare userAnswer with correctAnswer and update feedback
    let feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect";
    }
}

// Wait until the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    // Select the submit button
    let submitButton = document.getElementById('submit-answer');

    // Add click event listener to the submit button
    submitButton.addEventListener('click', checkAnswer);
});
