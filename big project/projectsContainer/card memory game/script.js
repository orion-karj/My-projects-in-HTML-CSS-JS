const audio = new Audio('./Correct Answer sound effect [ ezmp3.cc ].mp3');
const h1 = document.getElementById('h1');

const cards = [
  { text: "😺", id: 1 }, { text: "😺", id: 1 },  // Cat
  { text: "🐶", id: 2 }, { text: "🐶", id: 2 },  // Dog
  { text: "🦒", id: 3 }, { text: "🦒", id: 3 },  // Cat
  { text: "🐭", id: 4 }, { text: "🐭", id: 4 },  // Mouse
  { text: "🐰", id: 5 }, { text: "🐰", id: 5 },  // Rabbit
  { text: "🦊", id: 6 }, { text: "🦊", id: 6 },  // Fox
  { text: "🦁", id: 7 }, { text: "🦁", id: 7 },  // Lion
  { text: "🐼", id: 8 }, { text: "🐼", id: 8 },  // Panda
  { text: "🐯", id: 9 }, { text: "🐯", id: 9 },  // Tiger
  { text: "🐵", id: 10 }, { text: "🐵", id: 10 }, // Monkey
  { text: "🐨", id: 11 }, { text: "🐨", id: 11 }, // Koala
  { text: "🐮", id: 12 }, { text: "🐮", id: 12 }, // Cow
  { text: "🐷", id: 13 }, { text: "🐷", id: 13 }, // Pig
  { text: "🦄", id: 14 }, { text: "🦄", id: 14 }, // Unicorn
  { text: "🐸", id: 15 }, { text: "🐸", id: 15 }  // Frog
];

const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
};

const ShuffledCards = shuffle(cards);

const displayItem = (items) => {
  document.getElementById('game-container').innerHTML = items.map((item) => {
    var {text, id} = item;
    return (
        `<div class="card" id="${id}">
          <div class="card-front"></div>
          <div class="card-back">${text}</div>
        </div>`
    )
  }).join('');
};
displayItem(cards);

const cardElements = document.querySelectorAll('.card');
let prevClickedElement = null;
let prevCardElement = null;
let correctPairCount = 0;

setInterval(() => {
  if (correctPairCount === 15) {
    document.querySelectorAll('.card').forEach(Element => {
      Element.style.display = 'none';
      h1.textContent = "You Won the game!!!🎉🎉🎉"
    });
  }
}, 500);

cardElements.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.disabled) {
      const cardFront = card.querySelector(".card-front");
      const cardBack = card.querySelector(".card-back");
      const frontVisibility = window.getComputedStyle(cardFront).backfaceVisibility;
  
      if (frontVisibility === "hidden") {
        cardFront.style.backfaceVisibility = "visible";
        cardBack.style.backfaceVisibility = "visible";
      } else {
        cardFront.style.backfaceVisibility = "hidden";
        cardBack.style.backfaceVisibility = "hidden";
      }
  
      setTimeout(() => {
        if (prevClickedElement === null) {
          prevClickedElement = cardBack.textContent;
          prevCardElement = card;
        } else {
          if (prevClickedElement === cardBack.textContent) {
            audio.play();
            prevCardElement.disabled = true;
            card.disabled = true;
            prevCardElement.querySelector(".card-back").textContent = "✅";
            cardBack.textContent = "✅";
            correctPairCount++;
            console.log(correctPairCount);
          } else {
            prevCardElement.querySelector(".card-front").style.backfaceVisibility = "hidden";
            prevCardElement.querySelector(".card-back").style.backfaceVisibility = "hidden";
  
            cardFront.style.backfaceVisibility = "hidden";
            cardBack.style.backfaceVisibility = "hidden";
          }
  
          prevClickedElement = null;
          prevCardElement = null;
        }
      }, 750);
    }});
});

