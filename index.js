const board = document.getElementById("board")
const turn = document.getElementById("turn")
const box1 = document.getElementById("box1").innerText
const box2 = document.getElementById("box2").innerText
const box3 = document.getElementById("box3").innerText
const box4 = document.getElementById("box4").innerText
const box5 = document.getElementById("box5").innerText
const box6 = document.getElementById("box6").innerText
const box7 = document.getElementById("box7").innerText
const box8 = document.getElementById("box8").innerText
const box9 = document.getElementById("box9").innerText

const allBoxes = document.querySelectorAll(".box")

//win conditions
const row1Win = (box1 === box2 && box1 === box3) && (box1 == "X" || box1 == "O")
const row2Win = (box4 === box5 && box4 === box6) && (box4 == "X" || box4 == "O")
const row3Win = (box7 === box8 && box7 === box9) && (box7 == "X" || box7 == "O")
const collumn1Win = (box1 === box4 && box1 === box7) && (box1 == "X" || box1 == "O")
const collumn2Win = (box2 === box5 && box2 === box8) && (box2 == "X" || box2 == "O")
const collumn3Win = (box3 === box6 && box3 === box9) && (box3 == "X" || box3 == "O")
const diagonal1Win = (box1 === box5 && box1 === box9) && (box1 == "X" || box1 == "O")
const diagonal2Win = (box3 === box5 && box3 === box7) && (box3 == "X" || box3 == "O")

const someWin = (row1Win || row2Win || row3Win || collumn1Win || collumn2Win || collumn3Win || diagonal1Win || diagonal2Win)


// turns alternate x and o, and a tie is called if all boxes fill with no win.
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
    } console.log(boxesWithO + boxesWithX, someWin)
        if (boxesWithO + boxesWithX == 9 && someWin == false){
            turn.innerText = "It's a tie!"
        } else if (boxesWithX > boxesWithO) {
            playerTurn = "O"
            turn.innerText = "O's Turn"
        } else {
            playerTurn = "X"
            turn.innerText = "X's Turn"
        }
}


// Depending on player, clicking a box will mark x or o
function clickBox() { 
    if (turn.innerText == "X's Turn") {
        this.innerText = "X"
    } else if (turn.innerText == "O's Turn") {
        this.innerText = "O"
    }
    decidePlayer()
}




//reset button clears board and makes boxes clickable
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


