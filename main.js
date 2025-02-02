const colorBox = document.getElementById("colorBox");
const colorButtons = document.querySelectorAll(".color-btn");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;

    let shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    
    colorButtons.forEach((btn, index) => {
        btn.style.backgroundColor = shuffledColors[index];
        btn.onclick = () => checkGuess(shuffledColors[index]);
    });

    gameStatus.textContent = "";
    gameStatus.className = "";
}

function checkGuess(color) {
    gameStatus.classList.remove("wrong", "correct");

    if (color === targetColor) {
        gameStatus.textContent = "Correct!";
        gameStatus.style.color = "green";
        gameStatus.classList.add("correct");
        score++;
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.style.color = "red";
        gameStatus.classList.add("wrong");
    }

    scoreDisplay.textContent = score;

    // Continue to the next round after 1 second
    setTimeout(startGame, 1000);
}

// New Game resets everything
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    startGame();
}

newGameButton.onclick = resetGame; // Resets score + starts a new round

startGame();
