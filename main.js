const colorBox = document.getElementById("colorBox")
const colorButtons = document.querySelectorAll(".color-btn")
const gameStatus = document.getElementById("gameStatus")
const scoreDisplay = document.getElementById("score")
const newGameButton = document.getElementById("newGameButton")

let color = ["red", "blue", "green", "yellow", "purple", "orange"]
let targetColor = ""
let score = 0

function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length())]
    colorBox.style.backgroundColor = targetColor
    
    let shuffledColors = [...colors].sort(() => Math.random() - 0.5) 

    colorButtons.forEach((btn,index) => {
    btn.style.backgroundColor = shuffledColors[index]
    btn.onclick = () => checkGuess(shuffledColors[index])
})

    gameStatus.textContent = ""
}

function checkGuess() {
    if (color === targetColor) {
        gameStatus.textContent = "Correct"
        gameStatus.style.color = "green"
        score++
        scoreDisplay.textContent = score
    }else{
        gameStatus.textContent = "Wrong! Try again"
        gameStatus.style.color = "red"
    }
}

newGameButton.onclick = startGame

startGame()