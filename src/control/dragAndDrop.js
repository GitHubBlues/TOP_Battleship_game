import { rotateShips } from  "../ui/rotateShips.js"
import { playGame } from  "../control/playGame.js"

const dragNDrop = (() => {
    let hzBelow = []  //i.e. smaller cell ids
    let hzAbove = []  //i.e. larger cell ids
    let vtBelow = []
    let vtAbove = []
    let draggedShip
    let cellsWithShips = []
    let sID = 1       // shipID

    function _getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
        };
    }

    function _getShipOffset(ship01, cursorX, cursorY) { 
        let rect = ship01.getBoundingClientRect();
        let rect_left = _getOffset(ship01).left
        let rect_top = _getOffset(ship01).top
        let go = true
        let length
        hzBelow = []
        hzAbove = []
        vtBelow = []
        vtAbove = []

        if ( rect.width == 50) {
            length = rect.height/50;
            for (let i=1; i<length; i++){
                if ( cursorY + (i*50) < rect_top + rect.height) vtAbove.push(1) 
                if ( cursorY - (i*50) > rect_top ) vtBelow.push(1) 
            }
        } else if ( rect.height == 50) {
            const length = rect.width/50;
            for (let i=1; i<length; i++){
                if ( cursorX + (i*50) < rect.right ) hzAbove.push(1) 
                if ( cursorX - (i*50) > rect.left ) hzBelow.push(1) 
            }
        }
        // console.log(rect)
        // console.log(rect_top)
        // console.log(rect_left)
        // console.log(length)
        // console.log(cursorX)
        // console.log(cursorY)
        // console.log(hzAbove)
        // console.log(hzBelow)
        // // console.log(vtAbove)
        // // console.log(vtBelow)
    }

    function dragOver(e) {
        e.preventDefault()
    }

    function dragEnter(e) {
        let cellInventory
        const allCells = document.querySelectorAll(".cell-placement")
        for (let i=0; i<=99; i++) {
            if (allCells[i].classList.contains("has-ship")) {
                allCells[i].style.backgroundColor = "seagreen" 
            } else {
                allCells[i].style.backgroundColor = "transparent" 
            }
        }
        // console.log('drag entered');
        if (e.target.classList.contains("dropzone")){
            let id = Number(e.target.classList[2].split("-")[2]);

            if ((hzBelow.length + hzAbove.length)==0) {
            // vertical ship
                if ( (id - vtBelow.length*10  > -1) && (id + vtAbove.length*10  < 100) ) {
                    cellInventory = _getCellsVerticalShip(id)
                    _changeBackgroundShip( cellInventory, "red", "papayawhip" )
                } 

            } else if ( (vtBelow.length +  vtAbove.length)==0) {
            // horizontal  ship
                let candidates = _getCandidatesHzShip(id)
                if ( candidates.includes(id - hzBelow.length) && candidates.includes(id + hzAbove.length) ) {
                    cellInventory = _getCellsHorizontalShip(id)
                    _changeBackgroundShip( cellInventory, "red", "papayawhip" )
            } 
    
                     
        } else {
            _changeBackgroundShip( cellInventory, "red", "transparent" )
        }
    }
    }

    function _getCellsVerticalShip(id) {
        let cellList = []
        cellList.push(id)
        for (let i=1; i<=vtBelow.length; i++){
            cellList.push(id - i*10)
        }
        for (let i=1; i<=vtAbove.length; i++){
            cellList.push(id + i*10)
        }
        return cellList
    }


    function _getCellsHorizontalShip(id) {
        let candidates = _getCandidatesHzShip(id)
        let cellList = []

        cellList.push(id)
        for (let i=1; i<=hzBelow.length; i++){
            cellList.push(id - i)
        }
        for (let i=1; i<=hzAbove.length; i++){
            cellList.push(id + i)
        }
        return cellList
    }    

    function _getCandidatesHzShip(id) {
        let candidates = []
        let row = Math.floor(id/10)
        for (let i=0; i<10; i++) {
            candidates.push(row*10+i) 
        }
        return candidates
    }

    function _changeBackgroundShip(cellList, colorError, colorOK) {
        for (let i=0; i<cellList.length; i++) {
            let cell = document.querySelector(".cell-place-"+ cellList[i].toString())
            if (cell.classList.contains("has-ship")) {
                cell.style.backgroundColor = colorError
                return 
            } 
        }                
        for (let i=0; i<cellList.length; i++) {
            let cell = document.querySelector(".cell-place-"+ cellList[i].toString())            
            cell.style.backgroundColor = colorOK //"papayawhip"
        }
        // console.log(cellList)
        // e.target.style.backgroundColor = "papayawhip"
    }

    function _addClassToPlacedShips(cellList, shipid) {
        for (let i=0; i<cellList.length; i++) {
            let cell = document.querySelector(".cell-place-"+ cellList[i].toString())            
            cell.classList.add(  "has-ship" )
            cell.classList.add( shipid )
            cellsWithShips.push(cellList[i])
        }
    }





    // function dragLeave(e) {
    // //    console.log('drag left');
    //     let cellInventory
    //     if (e.target.classList.contains("dropzone")){
    //         let id = Number(e.target.classList[2].split("-")[2]);

    //         if ((hzBelow.length + hzAbove.length)==0) {
    //         // vertical ship
    //             if ( (id - vtBelow.length*10  > -1) && (id + vtAbove.length*10  < 100) ) {
    //                 cellInventory = _getCellsVerticalShip(id)
    //                 _changeBackgroundShip( cellInventory, "transparent", "transparent" )
    //             } else {
    //                 e.target.style.backgroundColor = "transparent" 
    //             }

    //         } else if ( (vtBelow.length +  vtAbove.length)==0) {
    //         // horizontal  ship
    //             let candidates = _getCandidatesHzShip(id)
    //             if ( candidates.includes(id - hzBelow.length) && candidates.includes(id + hzAbove.length) ) {
    //                 cellInventory = _getCellsHorizontalShip(id)
    //                 _changeBackgroundShip( cellInventory, "transparent", "transparent" )
    //             } else {
    //                 e.target.style.backgroundColor = "transparent" 
    //             }
    //         }
    //     }
    // }

    function dragDrop(e) {
        e.preventDefault();
        const shipContainer = document.querySelector(".ship-container");
        console.log('drag dropped');
        let cellInventory
        if (e.target.classList.contains("dropzone")){
            let id = Number(e.target.classList[2].split("-")[2]);

            if ((hzBelow.length + hzAbove.length)==0) {
            // vertical ship
                if ( (id - vtBelow.length*10  > -1) && (id + vtAbove.length*10  < 100) ) {
                    cellInventory = _getCellsVerticalShip(id)
                    for (let i=0; i<cellInventory.length; i++) {

                        if ( cellsWithShips.includes(cellInventory[i]) ) {
                            return
                        }
                    }
                    _changeBackgroundShip( cellInventory, "red", "seagreen" )
                    _addClassToPlacedShips( cellInventory, "sh-" + sID.toString() )
                    draggedShip.remove()
                    sID = sID + 1
                } 

            } else if ( (vtBelow.length +  vtAbove.length)==0) {
            // horizontal  ship
                let candidates = _getCandidatesHzShip(id)
                if ( candidates.includes(id - hzBelow.length) && candidates.includes(id + hzAbove.length) ) {
                    cellInventory = _getCellsHorizontalShip(id)
                    for (let i=0; i<cellInventory.length; i++) {
                        if ( cellsWithShips.includes(cellInventory[i]) ) {
                           return
                        }
                    }
                    _changeBackgroundShip( cellInventory, "red", "seagreen" )
                    _addClassToPlacedShips( cellInventory,  "sh-" + sID.toString())
                    draggedShip.remove()
                    sID = sID + 1
                }
            }
            
            if (shipContainer.childNodes.length == 0) { 
                const button = document.querySelector(".button");
                button.innerHTML = "start game"
                button.removeEventListener("click", rotateShips)
                button.addEventListener("click", playGame.startGame)
            }
        }
    }



    function dragStart(e){
        // store a ref. on the dragged elem
        draggedShip = e.target;
        // make it half transparent
        let cursorX = e.pageX
        let cursorY = e.pageY
        e.target.style.opacity = .5;
        e.dataTransfer.setData("text/plain", e.target.id);
        _getShipOffset( draggedShip, cursorX, cursorY)
        console.log("This does work")
    }

    function dragEnd(e) {
        console.log("dragend")
        e.target.style.opacity = ""; 
    }

    return { dragStart, 
             dragEnd,
             dragEnter,
             //dragLeave,
             dragDrop,
             dragOver, 
             draggedShip
    }
})()

export default dragNDrop