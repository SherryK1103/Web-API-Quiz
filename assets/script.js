var paraQuest = document.getElementById("question");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");

// These are placeholder questions
var questions = ["What is Sherry's name?", "How old is Sherry?", "What is Sherry's cat's name?", "What planet are we on?"];

var answers = [
    {
        choice1: "1. Donna",
        choice2: "2. Sherry",
        choice3: "3. Catherine",
        choice4: "4. Meghan",
        answer: 2,
    },

    {
        choice1: "1. 2",
        choice2: "2. 12",
        choice3: "3. 150",
        choice4: "4. 37",
        answer: 4,
    },

    {
        choice1: "1. Fluffy",
        choice2: "2. Bozo",
        choice3: "3. Pacino",
        choice4: "4. Cat",
        answer: 3,
    },

    {
        choice1: "1. Earth",
        choice2: "2. Mars",
        choice3: "3. Venus",
        choice4: "4. Pluto",
        answer: 1,
    },
]

for (let index = 0; index < questions.length; index++) {
    paraQuest.innerText = questions[index];
    choice1.innerText = answers[index].choice1;
    choice2.innerText = answers[index].choice2;
    choice3.innerText = answers[index].choice3;
    choice4.innerText = answers[index].choice4;
    
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(button.innerText);
    });
})