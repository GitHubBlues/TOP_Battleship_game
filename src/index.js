import "./index.css";

import {makeShip} from "./factories/shipFactory.js";
import {makeBoard} from "./factories/gameboardFactory.js";
import {makePlayer} from "./factories/playerFactory.js";

import {makeBoards} from "./ui/mainBoards.js"
import { makeBoardPlaceShips } from "./ui/placeShips.js"

import dragNDrop from "./control/dragAndDrop.js"
import placeShipComputer from "./control/placeShipsComputer.js"
import "./ui/placeShips.css";






// boardA.placeShip( [1,2,3,4,5,6,7,8,9] )
// boardA.placeShip( [15,16,17] )
// boardA.placeShip( [25,26,27,28,29] )
// boardA.placeShip( [31,32,33,34,35,36,37,38,39] )


// 
// boardB.placeShip( [51,52,53,54,55,56,57,58,59] )
// boardB.placeShip( [94,95,96] )
// boardB.placeShip( [65,66,67,68,69,30] )
// boardB.placeShip( [71,72,73,74,75,76,77,78,79] )
// console.log(boardB.dbShips)

// makeBoards()
makeBoardPlaceShips()

// const mainContainer = document.querySelector(".main-container");
// const shipContainer = document.createElement("div");
// shipContainer.classList.add("ship-container")
// for (let i=0; i<=4; i++) {
//     const ship01 = document.createElement("div")
//     ship01.setAttribute("draggable", "true");
//     //ship01.classList.add("ship")
//     if (i==0) ship01.classList.add("ship-01")
//     if (i==1) ship01.classList.add("ship-02")
//     if (i==2) ship01.classList.add("ship-03")
//     if (i==3) ship01.classList.add("ship-04")
//     if (i==4) ship01.classList.add("ship-05")
    
//     ship01.addEventListener("dragstart", dragNDrop.dragStart, false)
//     ship01.addEventListener("dragend", dragNDrop.dragEnd, false)
//     shipContainer.appendChild(ship01)
// }
// mainContainer.appendChild(shipContainer)

// const board = document.createElement("div");
// board.classList.add("board-placement")
// // board.classList.add("dropzone");
// for (let i=0; i<100; i++) {
//     let gridcell = document.createElement("div");
//     gridcell.classList.add("cell-placement");
//     gridcell.classList.add("dropzone");
//     gridcell.classList.add("cell-place-"+ i.toString());
//     board.appendChild(gridcell);
//     gridcell.addEventListener("click", clickForAttack);
// }
// mainContainer.appendChild(board)
// board.addEventListener("dragover", dragNDrop.dragOver);
// board.addEventListener('dragenter', dragNDrop.dragEnter);
// board.addEventListener('dragleave', dragNDrop.dragLeave);
// board.addEventListener('drop', dragNDrop.dragDrop);

// // 

















// export {clickForAttack}