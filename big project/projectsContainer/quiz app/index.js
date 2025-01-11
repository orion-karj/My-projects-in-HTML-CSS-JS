const questionDisplay = document.getElementById('question');
const nextqbtn = document.getElementById('nextqbtn');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const resultDisplay = document.getElementById('resultDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const btns = document.querySelectorAll('.choiceBtn');


// create a JSON file with all of the questions

const questions = [ {question: "what is 2 + 2 ?", answer: 4},
                    {question: "what is 2 + 3 ?", answer: 5},
                    {question: "what is 2 + 5 ?", answer: 7},
                    {question: "what is 2 + 8 ?", answer: 10},
                    {question: "what is 2 + 1 ?", answer: 3}
];

const btnOpttions = [ {option1: 4, option2: 3, option3: 5, option4: 6},
                      {option1: 2, option2: 1, option3: 3, option4: 5},
                      {option1: 5, option2: 7, option3: 22, option4: 3},
                      {option1: 8, option2: 10, option3: 6, option4: 1},
                      {option1: 45, option2: 2, option3: 3, option4: 9}
];

// create a function to display the questions / next questions
let questionNum = 0;
let firstPress = true;

function next(e) {
    if (firstPress) {
        firstPress = false;  // Skip the first press
    } else {
        questionNum++;  // Increment on subsequent presses
    }
    if (questionNum) {
        questionDisplay.textContent = 'no more questions'
        green.textContent = "";
        blue.textContent = "";
        yellow.textContent = "";
        red.textContent = "";
        resultDisplay.style.display = "none";
        scoreDisplay.textContent = `you answerd ${score}/${questions.length} qestions correctly!`
        scoreDisplay.style.display = "block";


    }
    questionDisplay.textContent = questions[questionNum].question;
    green.textContent = btnOpttions[questionNum].option1;
    blue.textContent = btnOpttions[questionNum].option2;
    yellow.textContent = btnOpttions[questionNum].option3;
    red.textContent = btnOpttions[questionNum].option4;
    console.log(questionNum);
    console.log(questions[questionNum].answer);
    setTimeout(next, 10000);

    
    resultDisplay.style.display = " none";
    scoreDisplay.style.display = "none";
}
// create a function to check the selcted answer

let score = 0;

btns.forEach(function (i) {
    i.addEventListener('click', () => {
        if (Number(i.textContent) === questions[questionNum].answer) {
            resultDisplay.style.display = " block";
            resultDisplay.textContent = "you are correct!"
            score++
        } else {
            resultDisplay.style.display = " block";
            resultDisplay.textContent = "you are wrong :("
            setTimeout(next, 1000);
        }
    });
  });

