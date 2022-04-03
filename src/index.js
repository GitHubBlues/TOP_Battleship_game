import "./index.css";
import {makeShip} from "./factories/shipFactory.js";
import {makeBoard} from "./factories/gameboardFactory.js";
import {makePlayer} from "./factories/playerFactory.js";

const player = makePlayer()
const boardA = makeBoard()
boardA.placeShip( [1,2,3,4,5,6,7,8,9] )
boardA.placeShip( [15,16,17] )
boardA.placeShip( [25,26,27,28,29] )
boardA.placeShip( [31,32,33,34,35,36,37,38,39] )
const boardB = makeBoard()
boardB.placeShip( [51,52,53,54,55,56,57,58,59] )
boardB.placeShip( [94,95,96] )
boardB.placeShip( [65,66,67,68,69,30] )
boardB.placeShip( [71,72,73,74,75,76,77,78,79] )
console.log(boardB.dbShips)

const mainContainer = document.querySelector(".main-container");

const boardLeft = document.createElement("div");
const boardRight = document.createElement("div");
boardLeft.classList.add("board-left")
boardRight.classList.add("board-right")

for (let i=0; i<100; i++) {
    let gridcell = document.createElement("div");
    gridcell.classList.add("cell-left");
    gridcell.classList.add("cell-"+ i.toString());
    boardLeft.appendChild(gridcell);
}

for (let i=0; i<100; i++) {
    let gridcell = document.createElement("div");
    gridcell.classList.add("cell-right");
    gridcell.classList.add("cell-"+ i.toString());
    gridcell.addEventListener("click", clickForAttack);
    boardRight.appendChild(gridcell);
}

mainContainer.appendChild(boardLeft)
mainContainer.appendChild(boardRight)

let turn = "A"
turnPlayerA()

function turnPlayerA() {  
    let attackCoord
    if (turn == "A"){
        attackCoord = player.randomAttack(boardB.gbProgress)
        boardB.receiveAttack(attackCoord)
        if ( boardB.allSunk(boardB.dbShips)) {
             endGame("A")
        }  
        paintCellBackground(boardB)
        turn = "B"                        
    } 
}


function endGame(winner) {
    console.log(winner + "won")
}

function clickForAttack(e) {
    const gridcellRight = document.querySelectorAll(".cell-right")
    if (turn = "B") {
        const id = e.target.classList[1].split('-')[1]
        boardA.receiveAttack(id)
        if( boardA.gbProgress[id] == 0 ){
            gridcellRight[id].style.background = "grey"
        } else if ( boardA.gbProgress[id] == -99 ) {
            gridcellRight[id].style.background = "orange"
        } else if ( boardA.gbProgress[id] == 1000 ) {
            gridcellRight[id].style.background = "green"
        }
        console.log(boardB.allSunk(boardB.dbShips))
        console.log(boardA.allSunk(boardA.dbShips))
        console.log(boardA.dbShips)
        console.log(boardB.dbShips)

        if ( boardA.allSunk(boardA.dbShips)) {
            endGame("B")
        }  
        turn = "A"
        turnPlayerA() 
    }
}


function paintCellBackground(board) {
    const gridcellLeft = document.querySelectorAll(".cell-left")
    for (let i=0; i<100; i++) {
        if( board.gbProgress[i] == 0 ){
            gridcellLeft[i].style.background = "grey"
        } else if ( board.gbProgress[i] == -99 ) {
            gridcellLeft[i].style.background = "orange"
        } else if ( board.gbProgress[i] == 1000 ) {
            gridcellLeft[i].style.background = "green"
        }
    }
}