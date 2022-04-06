import "./mainBoards.css";
// import {clickForAttack} from "../control/playGame.js";
import { playGame } from  "../control/playGame.js"

function makeBoards() {
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
        boardRight.appendChild(gridcell);
        gridcell.addEventListener("click", playGame.clickForAttack);
    }

    mainContainer.appendChild(boardLeft)
    mainContainer.appendChild(boardRight)
}

export { makeBoards }