const h1 = document.getElementById('h1');
const passageElement = document.getElementById('passage');
const typingArea = document.getElementById('typing-area');
const timerDisplay = document.getElementById('timer');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const restartButton = document.getElementById('restart-btn');
let countdown = 60;
let timerId;

const passages = [
  "As the brilliant hues of the setting sun painted the sky with shades of orange, pink, and violet, the gentle breeze carried the scent of blooming jasmine across the fields, where children laughed and played, their voices echoing in the distance as if in harmony with the rustling leaves of the ancient oak trees that stood as silent witnesses to the fleeting beauty of the evening",
  "In the bustling heart of the city, where skyscrapers reached for the heavens and streets buzzed with the ceaseless activity of people rushing to their destinations, a solitary artist stood at his easel on a quiet corner, capturing the vibrant chaos of urban life with every meticulous brushstroke, creating a masterpiece that would forever preserve the spirit of the metropolis",
  "As the weary travelers trudged through the dense forest, where towering trees stretched endlessly towards the sky and the sunlight struggled to pierce through the thick canopy of leaves, the haunting calls of unseen creatures echoed through the shadows, creating an eerie symphony that reminded them of the mysteries and dangers lurking in the depths of the untamed wilderness",
  "Beneath the vast expanse of the star-studded night sky, where galaxies shimmered like diamonds scattered across an infinite velvet canvas, the young astronomer gazed through his telescope with a sense of wonder and awe, marveling at the incomprehensible beauty of the universe while contemplating the possibility of life existing on distant worlds far beyond the reach of human imagination",
  "In the quiet village nestled between rolling hills and lush green meadows, where time seemed to stand still and the chiming of the church bell marked the passing hours, the villagers gathered in the town square to celebrate the annual harvest festival, a joyous occasion filled with laughter, music, dancing, and a shared gratitude for the bountiful gifts of nature"
].map((passage) => passage.toLocaleLowerCase());

function converSentencesIntoLeters(e) {
  e = String(e)
  const characters = e.split("");
  return characters;
}

function converSentencesIntoWords(e) {
  e = String(e);
  const characters = e.split(" ");
  return characters;
}

function startTime() {
  if (!timerId) {
    timerId = setInterval(() => {
      countdown--;
      timerDisplay.textContent = `Time Left: ${countdown}s`;
      if (countdown <= 0) {
        clearInterval(timerId);
        timerId = null;
        passageElement.style.display = "none";
        typingArea.style.display = "none";
        timerDisplay.style.display = "none";
        h1.textContent = "Your Stats:"
      }
    }, 1000);
  }
}

function selectRandomElememt(array) {
  const randomElemnt = Math.floor(Math.random() * array.length);
  return array[randomElemnt];
}

let randomSentence;

typingArea.addEventListener('click', () => {
  startTime();
})

typingArea.addEventListener('input', (e, span) => {
  const letersOfTheSentence = converSentencesIntoLeters(randomSentence);
  const userInput = converSentencesIntoLeters(e.target.value);
  const targetText = randomSentence;
  let incorrectCharacters = 0;

  passageElement.innerHTML = "";

  for (let i = 0; i < targetText.length; i++) {
    const span = document.createElement('span');
    const userChar = userInput[i] || '';

    if (userChar === targetText[i]) {
      span.textContent = userChar;
      span.style.color = 'black';
    } else if (userChar) {
      span.textContent = userChar;
      span.style.color = 'red';
      incorrectCharacters++;
    } else {
      span.textContent = targetText[i];
      span.style.color = 'gray';
    }

    if (userChar === " " && targetText[i] !== " ") {
      span.textContent = "_";
      span.style.color = "red";
      incorrectCharacters++;
    }
    passageElement.appendChild(span);
  }

  const totalCharacters = userInput.length;
  const accuracy = (100 - ((incorrectCharacters / totalCharacters) * 100)).toFixed(2);
  accuracyDisplay.textContent = `Accuracy: ${accuracy}%`;

  const wordsOfTheSentence = converSentencesIntoWords(userInput);
  wpmDisplay.textContent = `WPM: ${wordsOfTheSentence.length}`
});

restartButton.addEventListener('click', () => {
  randomSentence = selectRandomElememt(passages)
  passageElement.textContent = randomSentence;
  passageElement.style.display = "block";
  typingArea.style.display = "block";
  typingArea.value = "";
  timerDisplay.style.display = "block";
  timerDisplay.textContent = "Time Left: 60s";
  countdown = 60;
  wpmDisplay.textContent = "WPM: ";
  accuracyDisplay.textContent = "Accuracy: 100%";
  h1.textContent = "Typing Speed Test";
})