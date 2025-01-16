// Get references to elements
const landingPage = document.getElementById("landing-page");
const aboutPage = document.getElementById("about-page");
const quizPage = document.getElementById("quiz-page");
const resultPage = document.getElementById("result-page");
const pauseOptions = document.getElementById("pause-options");

const startBtn = document.getElementById("start-btn");
const aboutBtn = document.getElementById("about-btn");
const backBtn = document.getElementById("back-btn");
const restartBtn = document.getElementById("restart-btn");
const mainMenuBtn = document.getElementById("main-menu-btn");
const resumeBtn = document.getElementById("resume-btn");
const restartQuizBtn = document.getElementById("restart-quiz-btn");
const mainMenuBtnResult = document.getElementById("main-menu-btn-result");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score-display");

const pauseBtn = document.getElementById("pause-btn");

let currentQuestionIndex = 0;
let score = 0;
let quizPaused = false;

const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "High-Level Text Manipulation Language"], correct: 0 },
    { question: "Which CSS property is used to change the background color?", options: ["color", "background-color", "bgcolor", "background"], correct: 1 },
    { question: "Which HTML element is used to define important text?", options: ["<important>", "<strong>", "<b>", "<i>"], correct: 1 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style System"], correct: 0 },
    { question: "Which HTML element is used to insert a line break?", options: ["<br>", "<break>", "<lb>", "<line>"], correct: 0 },
    { question: "Which JavaScript function is used to write messages to the console?", options: ["console.log()", "console.write()", "console.print()", "console.output()"], correct: 0 },
    { question: "Which attribute is used in HTML to define inline styles?", options: ["style", "styles", "class", "css"], correct: 0 },
    { question: "Which HTML element is used for the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<header>"], correct: 2 },
    { question: "Which JavaScript keyword is used to declare a variable?", options: ["var", "let", "const", "All of the above"], correct: 3 },
    { question: "Which CSS property is used to change text color?", options: ["color", "text-color", "font-color", "foreground"], correct: 0 },
    { question: "What does the DOM stand for?", options: ["Document Object Model", "Display Object Management", "Document Oriented Markup", "Dynamic Output Method"], correct: 0 },
    { question: "Which HTML attribute specifies an alternative text for an image?", options: ["alt", "title", "src", "href"], correct: 0 },
    { question: "What does the 'z-index' property in CSS control?", options: ["Visibility", "Stack order", "Opacity", "Width"], correct: 1 },
    { question: "Which JavaScript method is used to select an element by ID?", options: ["getElementById()", "querySelector()", "getElementByClassName()", "selectById()"], correct: 0 },
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "JavaScript Online Network", "Java Syntax Object Node", "JavaScript Offline Node"], correct: 0 },
    { question: "Which HTML tag is used to display a table?", options: ["<table>", "<tr>", "<td>", "<tab>"], correct: 0 },
    { question: "Which CSS property is used to make text bold?", options: ["font-style", "font-weight", "font-bold", "text-weight"], correct: 1 },
    { question: "What does HTTP stand for?", options: ["Hyper Text Transfer Protocol", "Hyperlinks Text Transfer Protocol", "High Text Transfer Protocol", "Hyperlinking Text Transfer Procedure"], correct: 0 },
    { question: "Which HTML element is used for a navigation bar?", options: ["<navbar>", "<nav>", "<menu>", "<navigation>"], correct: 1 },
    { question: "What does 'responsive design' mean?", options: ["Adapts to different screen sizes", "Uses media queries", "Adjusts layout dynamically", "All of the above"], correct: 3 },
];

startBtn.addEventListener("click", startQuiz);
aboutBtn.addEventListener("click", showAboutPage);
backBtn.addEventListener("click", showLandingPage);
restartBtn.addEventListener("click", restartQuiz);
mainMenuBtn.addEventListener("click", showLandingPage);
resumeBtn.addEventListener("click", resumeQuiz);
restartQuizBtn.addEventListener("click", restartQuiz);
mainMenuBtnResult.addEventListener("click", showLandingPage);

pauseBtn.addEventListener("click", pauseQuiz);

function showLandingPage() {
    landingPage.style.display = "block";
    aboutPage.style.display = "none";
    quizPage.style.display = "none";
    resultPage.style.display = "none";
    pauseOptions.style.display = "none";
}

function showAboutPage() {
    landingPage.style.display = "none";
    aboutPage.style.display = "block";
}

function startQuiz() {
    landingPage.style.display = "none";
    quizPage.style.display = "block";
    pauseOptions.style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("li");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect!";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(showResult, 1000);
    }
}

function showResult() {
    quizPage.style.display = "none";
    resultPage.style.display = "block";
    scoreDisplay.textContent = `Your score is: ${score} / ${questions.length}`;
}

function pauseQuiz() {
    quizPage.style.display = "none";
    pauseOptions.style.display = "block";
}

function resumeQuiz() {
    pauseOptions.style.display = "none";
    quizPage.style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    resultPage.style.display = "none";
    quizPage.style.display = "block";
    pauseOptions.style.display = "none";
}

