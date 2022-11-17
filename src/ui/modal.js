import { makeBoardPlaceShips } from "./placeShips.js"
import "./modal.css";

function makeWinnerWindow(winner) {
    const main = document.querySelector(".main-container")
    const modalWindow = document.createElement("div")
    const modalText = document.createElement("div")
    const modalBtn = document.createElement("button")
    
    modalWindow.classList.add("window-won")
    modalText.classList.add("window-won-text")
    modalBtn.classList.add("window-won-btn")
    
    modalWindow.appendChild(modalText)
    modalWindow.appendChild(modalBtn)
    main.appendChild(modalWindow)
    
    if (winner=="A") {
        modalText.innerText = "Bad news capitain, the bot won!"
    } else  {
        modalText.innerText = "Capitain, you won! Congratulations!" 
    }
    modalBtn.innerText = "Play again"
    modalBtn.addEventListener("click", () => { 
        const mainContainer = document.querySelector(".main-container");
        mainContainer.innerHTML = "";
        makeBoardPlaceShips();
        location.reload(true)
    })
}

export{ makeWinnerWindow }