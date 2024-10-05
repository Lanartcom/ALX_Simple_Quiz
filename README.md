# Simple Quiz Application

This is a basic JavaScript-based quiz application that allows users to answer a single question, check their answer, and receive immediate feedback. The quiz is built with HTML for structure, CSS for styling, and JavaScript for logic and interactivity.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Future Enhancements](#future-enhancements)

## Project Overview
The goal of this project is to create a simple interactive quiz that checks if the user's selected answer is correct and provides feedback accordingly. The user is presented with a single multiple-choice question, and upon submitting their answer, the application evaluates the response and shows whether it was correct or incorrect.

## Features
- Single question multiple-choice quiz.
- Immediate feedback after submitting the answer.
- Lightweight and easy-to-understand code structure using HTML, CSS, and JavaScript.

## How It Works
1. The HTML file provides the structure for the quiz, including:
   - A question.
   - Three multiple-choice answers as radio buttons.
   - A "Submit Answer" button to check the selected answer.
   - A feedback area where the result ("Correct" or "Incorrect") is displayed.
   
2. The CSS file (`style.css`) can be used to style the quiz layout, making it visually appealing.

3. The JavaScript file (`quiz.js`) handles the logic:
   - It listens for a click event on the "Submit Answer" button.
   - When clicked, it checks which radio button is selected.
   - The selected answer is compared with the correct answer.
   - Feedback is provided in a message, either congratulating the user or prompting them to try again.

## Usage
1. Open the `index.html` file in any modern web browser.
2. The quiz will display a question and three possible answers.
3. Select an answer by clicking one of the radio buttons.
4. Click the "Submit Answer" button to check your answer.
5. Feedback will appear below the question, indicating whether your answer was correct or incorrect.

## Technologies Used
- **HTML5**: For structuring the quiz interface.
- **CSS3**: For basic styling of the quiz elements.
- **JavaScript (ES6)**: For handling quiz logic and interactivity.

