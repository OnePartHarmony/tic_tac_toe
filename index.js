const allBoxes = document.querySelectorAll(".box")
const turn = document.getElementById("turn")


const winConditions = () => {
    let box1 = document.getElementById("box1").innerText
    let box2 = document.getElementById("box2").innerText
    let box3 = document.getElementById("box3").innerText
    let box4 = document.getElementById("box4").innerText
    let box5 = document.getElementById("box5").innerText
    let box6 = document.getElementById("box6").innerText
    let box7 = document.getElementById("box7").innerText
    let box8 = document.getElementById("box8").innerText
    let box9 = document.getElementById("box9").innerText

    let row1Win = (box1 === box2 && box1 === box3) && (box1 == "X" || box1 == "O")
    let row2Win = (box4 === box5 && box4 === box6) && (box4 == "X" || box4 == "O")
    let row3Win = (box7 === box8 && box7 === box9) && (box7 == "X" || box7 == "O")
    let collumn1Win = (box1 === box4 && box1 === box7) && (box1 == "X" || box1 == "O")
    let collumn2Win = (box2 === box5 && box2 === box8) && (box2 == "X" || box2 == "O")
    let collumn3Win = (box3 === box6 && box3 === box9) && (box3 == "X" || box3 == "O")
    let diagonal1Win = (box1 === box5 && box1 === box9) && (box1 == "X" || box1 == "O")
    let diagonal2Win = (box3 === box5 && box3 === box7) && (box3 == "X" || box3 == "O")

    let someWin = (row1Win || row2Win || row3Win || collumn1Win || collumn2Win || collumn3Win || diagonal1Win || diagonal2Win)
    return someWin
}

let playerTurn = "X"

const decidePlayer = () => {
    let boxesWithX = 0
    let boxesWithO = 0
    for (i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].innerText == "X") {
            boxesWithX++
        } else if (allBoxes[i].innerText == "O") {
            boxesWithO++
        }
    }
        if (boxesWithO + boxesWithX == 9){
            turn.innerText = "It's a tie!"
        } else if (winConditions() == true) {
            for (i = 0; i < allBoxes.length; i++) {
                allBoxes[1].removeEventListener("click", clickBox)
            }
                turn.innerText = `${playerTurn} Wins!`
                if (playerTurn === "X") {
                    document.getElementById("xWins").innerText += "1"
                } else if (playerTurn === "O") {
                    document.getElementById("oWins").innerText += "1"
                 }
        } else if (boxesWithX > boxesWithO) {
            playerTurn = "O"
            turn.innerText = "O's Turn"
        } else {
            playerTurn = "X"
            turn.innerText = "X's Turn"
        }
}

function clickBox() { 
    if (turn.innerText == "X's Turn") {
        this.innerText = "X"
    } else if (turn.innerText == "O's Turn") {
        this.innerText = "O"
    }
    decidePlayer()
}

const clickable = () => {
    for (i = 0; i < allBoxes.length; i++) {
        allBoxes[i].addEventListener("click", clickBox, {once: true})
    }
}
clickable()

const clearBoard = () => {
    for (i = 0; i < allBoxes.length; i++) {
        allBoxes[i].innerText = ""
    }
    decidePlayer()
    clickable()
}
document.getElementById("reset").addEventListener("click", clearBoard)

