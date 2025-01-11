const colorDisplay = document.getElementById("color-display");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset-button");
const getSquares = document.querySelectorAll(".square");
const squares = Array.from(getSquares);

function generateRgb() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function selectRgbFromRandomSquare(array) {
    const randomSquare = squares[Math.floor(Math.random() * array.length)];
    return getComputedStyle(randomSquare).backgroundColor;
}

function startGame() {
    squares.forEach((square) => {
    square.style.backgroundColor = generateRgb();
    square.style.display = "block";
    messageDisplay.textContent = "";
    squares.disabled = false;
})};

resetButton.addEventListener('click', () => {
    startGame();

    const correctRgb = selectRgbFromRandomSquare(squares)
    colorDisplay.textContent = correctRgb;

    squares.forEach((square) => {
        square.addEventListener('click', () => {
            if (!squares.disabled) {
                if (getComputedStyle(square).backgroundColor === correctRgb) {
                    messageDisplay.textContent = "Correct!!!"
                    messageDisplay.style.color = "green";
                    squares.disabled = true;
                } else {
                    messageDisplay.textContent = "False, Try Again :)"
                    square.style.display = "none";
                    messageDisplay.style.color = "red";
                }   
            }
        })
    })
})