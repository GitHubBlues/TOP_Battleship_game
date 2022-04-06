function rotateShips() {
    const shipContainer = document.querySelector(".ship-container");
    const shipsHz = document.querySelectorAll(".horizontal");
    const shipsVt = document.querySelectorAll(".vertical");
    
    if ( shipsHz.length > 0) {
        shipsHz.forEach( element => element.classList.remove("horizontal"));
        shipsHz.forEach( element => element.classList.add("vertical"));
        shipContainer.classList.remove("horiz")
        shipContainer.classList.add("vert")
    } else if ( shipsVt.length > 0 ) {
        shipsVt.forEach( element => element.classList.remove("vertical"));
        shipsVt.forEach( element => element.classList.add("horizontal"));
        shipContainer.classList.remove("vert")
        shipContainer.classList.add("horiz")
    }
}

export { rotateShips }