
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
    
    modalText.innerText = winner + " won!"
    modalBtn.innerText = "Play again"
}

export{makeWinnerWindow}