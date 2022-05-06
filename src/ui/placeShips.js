import dragNDrop from "../control/dragAndDrop.js"
import { rotateShips } from  "./rotateShips.js"
import "./placeShips.css";

function makeBoardPlaceShips() {
    const mainContainer = document.querySelector(".main-container");
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");

    const button = document.createElement("button");
    button.classList.add("button")
    button.innerHTML = "rotate"
    button.addEventListener("click", rotateShips)
    buttonContainer.appendChild(button)
    leftContainer.appendChild(buttonContainer)
    leftContainer.appendChild(shipContainer)
    mainContainer.appendChild(leftContainer)

    const board = document.createElement("div");
    board.classList.add("board-placement")
    for (let i=0; i<100; i++) {
        let gridcell = document.createElement("div");
        gridcell.classList.add("cell-placement");
        gridcell.classList.add("dropzone");
        gridcell.classList.add("cell-place-"+ i.toString());
        board.appendChild(gridcell);
    }
    mainContainer.appendChild(board)
    board.addEventListener('dragover', dragNDrop.dragOver);
    board.addEventListener('dragenter', dragNDrop.dragEnter);
    board.addEventListener('drop', dragNDrop.dragDrop);

    _addShips( shipContainer );
}

function _addShips( argShipContainer ) {
    for (let i=0; i<=4; i++) {
        const shipContainer = argShipContainer;
        const ship01 = document.createElement("div")
        ship01.setAttribute("draggable", "true");
        ship01.classList.add("horizontal")
        if (i==0) ship01.classList.add("ship-01")
        if (i==1) ship01.classList.add("ship-02")
        if (i==2) ship01.classList.add("ship-03")
        if (i==3) ship01.classList.add("ship-04")
        if (i==4) ship01.classList.add("ship-05")
        
        ship01.addEventListener("dragstart", dragNDrop.dragStart, false)
        ship01.addEventListener("dragend", dragNDrop.dragEnd, false)
        shipContainer.appendChild(ship01)
    }
};   

export { makeBoardPlaceShips }