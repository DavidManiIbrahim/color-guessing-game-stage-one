const colorBox = document.getElementById("colorBox")
const colorButtons = document.querySelectorAll(".color-btn")
const gameStatus = document.getElementById("gameStatus")
const scoreDisplay = document.getElementById("score")
const newGameButton = document.getElementById("newGameButton")

let color = ["red" , "blue" , "green" , "yellow" , "purple" , "orange"]
let targetColor = ""
let score = 0

function startGame() {
    console.log("clicked")
    targetColor = color[Math.floor(Math.random() * color.length)]
    colorBox.style.backgroundColor = targetColor
    
    let shuffledColors = [...color].sort(() => Math.random() - 0.5) 

    colorButtons.forEach((btn, index) => {
    btn.style.backgroundColor = shuffledColors[index]
    btn.onclick = () => checkGuess(shuffledColors[index])
})

    gameStatus.textContent = ""
}

function checkGuess(color) {
    if (color === targetColor) {
        gameStatus.textContent = "Correct!"
        gameStatus.style.color = "green"
        gameStatus.classList.add("correct")
        score++
        scoreDisplay.textContent = score
    }else{
        gameStatus.textContent = "Wrong! Try again"
        gameStatus.style.color = "red"
        gameStatus.classList.add("wrong")
    }
}

newGameButton.onclick = startGame

startGame()