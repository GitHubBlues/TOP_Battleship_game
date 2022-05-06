import { makeBoard } from "../factories/gameboardFactory.js";
import { makeBoards } from "../ui/mainBoards.js"
import { makePlayer } from "../factories/playerFactory.js";
import { makeWinnerWindow } from "../ui/modal.js";
import placeShipComputer from "./placeShipsComputer.js"

const playGame = (() => { 
    const player = makePlayer()
    const boardA = makeBoard()
    const boardB = makeBoard()
    let turn

    function placeShipPlayer() { 
        const boardcells = document.querySelectorAll(".cell-placement")
        const shipIDs = ["sh-1", "sh-2", "sh-3", "sh-4", "sh-5"]
        let shipCoord
        for (let i=0; i<5; i++) {
            console.log(i)
            shipCoord = []
            boardcells.forEach( (cell, index) => {
                if ( cell.classList.contains( shipIDs[i]) ) {
                    shipCoord.push(index)
                }   
            })
            boardB.placeShip( shipCoord )
        }
    };

    function clearBoard() {
        const mainContainer = document.querySelector(".main-container");
        mainContainer.innerHTML = "";
    };

    function startGame() {
        placeShipPlayer();
        clearBoard();
        placeShipComputer.doPlacement( boardA );
        makeBoards(); 
        turn = "A";      // Computer starts
        turnPlayerA(turn)
    };

    function turnPlayerA(turn) {  
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
        makeWinnerWindow(winner);
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

            if ( boardA.allSunk(boardA.dbShips)) {
                endGame("B")
            }  
            turn = "A"
            turnPlayerA(turn) 
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
    
    return { startGame, clickForAttack }

})()

export { playGame }