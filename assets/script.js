var paraQuest = document.getElementById("question");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var startButton = document.getElementById("startButton");
var index = 0;
var totalTime = 600;


// These are placeholder questions
var questions = ["What is Sherry's name?", "How old is Sherry?", "What is Sherry's cat's name?", "What planet are we on?"];

var answers = [
    {
        question: "What is Sherry's name?",
        choice1: "1. Donna",
        choice2: "2. Sherry",
        choice3: "3. Catherine",
        choice4: "4. Meghan",
        correctAnswer: 2,
    },

    {
        question: "How old is Sherry?",
        choice1: "1. 2",
        choice2: "2. 12",
        choice3: "3. 150",
        choice4: "4. 37",
        correctAnswer: 4,
    },

    {
        question: "What is Sherry's cat's name?",
        choice1: "1. Fluffy",
        choice2: "2. Bozo",
        choice3: "3. Pacino",
        choice4: "4. Cat",
        correctAnswer: 3,
    },

    {
        question: "What planet are we on?",
        choice1: "1. Earth",
        choice2: "2. Mars",
        choice3: "3. Venus",
        choice4: "4. Pluto",
        correctAnswer: 1,
    },
]

choice1.addEventListener('click', () => {
    if (answers[index].correctAnswer == 1) {
        index += 1;
        displayQuest();
    }
    else {
       totalTime -= 3;
    }
 }); 

choice2.addEventListener('click', () => {
    if (answers[index].correctAnswer == 2) {
        index += 1;
        displayQuest();
    }
    else {
       totalTime -= 3;
    }
 });

 choice3.addEventListener('click', () => {
    if (answers[index].correctAnswer == 3) {
        index += 1;
        displayQuest();
    }
    else {
       totalTime -= 3;
    }
 });

 choice4.addEventListener('click', () => {
    if (answers[index].correctAnswer == 4) {
        index += 1;
        displayQuest();
    }
    else {
       totalTime -= 3;
    }
 });

function timer() {
    totalTime -= 1;
}

setInterval(timer, 1000);

 // display the timer and make it countdown. We need to do set interval 
 // update event listeners to proceed even if answer is wrong, just proceed with even less time. 

// for (let index = 0; index < questions.length; index++) {
   // paraQuest.innerText = questions[index];
   // choice1.innerText = answers[index].choice1;
   // choice2.innerText = answers[index].choice2;
   // choice3.innerText = answers[index].choice3;
   // choice4.innerText = answers[index].choice4;
//}

// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
   //  button.addEventListener('click', () => {
        // alert(button.innerText);
  // }); 
// })

// paraQuest.innerText = answers[index].question;
// choice1.innerText = answers[index].choice1;
// choice2.innerText = answers[index].choice2;
// choice3.innerText = answers[index].choice3;
// choice4.innerText = answers[index].choice4;


function displayQuest () {
paraQuest.innerText = answers[index].question;
choice1.innerText = answers[index].choice1;
choice2.innerText = answers[index].choice2;
choice3.innerText = answers[index].choice3;
choice4.innerText = answers[index].choice4;
}

// displayQuest()

startButton.addEventListener("click", displayQuest)

/* choice1.addEventListener('click', () => {
    if (answers[index].answer != 1) {
        totalTime -= 3;
     }
 
     index += 1;
       displayQuest();
  }); 

setInterval(myTimer, 1000);


setInterval(timer, 1000);



if (answers[index].answer == 2) {
         alert("correct")
     }
    else {
       alert("incorrect")
     } */
