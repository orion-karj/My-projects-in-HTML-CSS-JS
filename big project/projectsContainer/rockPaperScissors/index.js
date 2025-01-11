const btns = document.querySelectorAll('.btns');
const playerChoiseDisplay = document.getElementById('playerChoiseDisplay');
const compChoiseDisplay = document.getElementById('compChoiseDisplay');
const gameScore = document.getElementById('gameScore');
const options = ["🪨", "📃", "✂️"];
function decideResult(playerChoise, compChoice) {
    let didPlayerWin = false;
    let isTie = false;
    switch (playerChoise) {
        case "🪨":
            if (compChoice === 0) {
                isTie = true;
            }
            didPlayerWin = compChoice === 1 ? false : true;
            break; 
        case "📃":
            if (compChoice === 1) {
                isTie = true;
            }
            didPlayerWin = compChoice === 2 ? false : true;
            break; 
        case "✂️":
            if (compChoice === 2) {
                isTie = true;
            }
            didPlayerWin = compChoice === 0 ? false : true;
            break; 
    }
    return { didPlayerWin, isTie };
}
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let playerChoise = e.target.textContent;
        console.log('player:', playerChoise);
        let compChoice = Math.floor(Math.random() * options.length);
        console.log('comp:', options[compChoice]);
        playerChoiseDisplay.style.display = "block";
        playerChoiseDisplay.innerHTML = `player choise:  ${playerChoise}`;
        compChoiseDisplay.style.display = "block";
        compChoiseDisplay.innerHTML = `coputer choise:  ${options[compChoice]}`;
        
        const { didPlayerWin, isTie } = decideResult(playerChoise, compChoice);

        if (isTie) gameScore.innerHTML = 'TIE';
        else gameScore.innerHTML = didPlayerWin ? 'WIN' : 'LOSE';
        gameScore.style.display = 'block';
    });
});