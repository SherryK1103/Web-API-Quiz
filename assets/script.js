var paraQuest = document.getElementById("question");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var startButton = document.getElementById("startButton");
var totalTime = 60;
var timeDisplay = document.getElementById("time");
var score = 0; // Variable to store the user's score
var scorerDisplay = document.getElementById("high-scores");
var scoreDisplay = document.getElementById("score");

// These are placeholder questions
var questions = ["What does HTML stand for?", "What does CSS stand for?", "What does DOM stand for?", "What planet are we on?"];
var index = 0;

var answers = [
    {
        question: "What does HTML stand for?",
        choice1: "1. Hey Tomorrow Maybe Learn",
        choice2: "2. Hyper Text Markup Language",
        choice3: "3. Hello Timer Monday Long",
        choice4: "4. Hyper Toddler Madeup Language",
        correctAnswer: 2,
    },

    {
        question: "What does CSS stand for?",
        choice1: "1. Cisco Silly Sass",
        choice2: "2. Caring Sharing Sharing",
        choice3: "3. Cool Sisters Soul",
        choice4: "4. Cascading Style Sheet",
        correctAnswer: 4,
    },

    {
        question: "What DOM stand for?",
        choice1: "1. Dior Otto Moon",
        choice2: "2. Doom Object Modal",
        choice3: "3. Document Object Model",
        choice4: "4. Dad Ostrich Morbid",
        correctAnswer: 3,
    },

    {
        question: "What does API stand for as in Web API's?",
        choice1: "1. Application Programming Interface",
        choice2: "2. Application Pulse Innertext",
        choice3: "3. Apples Peanuts Interesting",
        choice4: "4. Application Pour Inside",
        correctAnswer: 1,
    },
]

choice1.addEventListener('click', () => {
    if (answers[index].correctAnswer === 1) {
        score += 1; // increment the score if the answer is correct
    } else {
        totalTime -= 3;
    }
    updateScoreDisplay();
    index += 1;
    if (index === answers.length) {
        endQuiz();
    } else {
        displayQuest();
    }
});

choice2.addEventListener('click', () => {
    if (answers[index].correctAnswer === 2) {
        score += 1;
    } else {
        totalTime -= 3;
    }
    updateScoreDisplay();
    index += 1;
    if (index === answers.length) {
        endQuiz();
    } else {
        displayQuest();
    }
});

choice3.addEventListener('click', () => {
    if (answers[index].correctAnswer === 3) {
        score += 1;
    } else {
        totalTime -= 3;
    }
    updateScoreDisplay();
    index += 1;
    if (index === answers.length) {
        endQuiz();
    } else {
        displayQuest();
    }
});

choice4.addEventListener('click', () => {
    if (answers[index].correctAnswer === 4) {
        score += 1;
    } else {
        totalTime -= 3;
    }
    updateScoreDisplay();
    index += 1;
    if (index === answers.length) {
        endQuiz();
    } else {
        displayQuest();
    }
});


function timer() {
    totalTime -= 1;
    timeDisplay.textContent = "Time Remaining: " + totalTime;
    if (totalTime <= 0) {
        endQuiz();
    }
}

var timerInterval; // variable to store the interval ID

setInterval(timer, 1000);

function displayQuest() {
        if (index === answers.length) {
            endQuiz();
            return;
        }
        paraQuest.innerText = answers[index].question;
        choice1.innerText = answers[index].choice1;
        choice2.innerText = answers[index].choice2;
        choice3.innerText = answers[index].choice3;
        choice4.innerText = answers[index].choice4;
    }

function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);

    // Disable answer choices to perform any other actions
    choice1.disabled = true;
    choice2.disabled = true;
    choice3.disabled = true;
    choice4.disabled = true;

    // Display a message to indicate the end of the quiz
    paraQuest.textContent = "Quiz ended!";
    timeDisplay.textContent = "Time's up!";
}

function startTimer() {
    totalTime--;
    timeDisplay.textContent = "Time Remaining: " + totalTime;
    if (totalTime <= 0) {
        endQuiz();
    }
}

function updateScoreDisplay() {
    scoreDisplay.textContent = "Score: " + score;
}

startButton.addEventListener("click", function() {
    displayQuest();
    startTimer();
});
