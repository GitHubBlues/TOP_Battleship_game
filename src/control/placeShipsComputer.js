
const placeShipComputer = (() => {
    let shipLengths = [5,4,3,3,2]
    let allShipCoord = []
    let myShipCoord = []
    let testShipOverlap = []
    let boardA

    function doPlacement( board ){
        boardA = board
        do {
            testShipOverlap = []
            myShipCoord = []
            Math.random()
            if ( Math.floor(Math.random()*2) == 0 ) {  // vertical ship
                let xaxis = Math.floor(Math.random()*99)
                let above = Math.floor(Math.random()*2)
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                console.log(xaxis)
                console.log(above)
                if (above == 0) {
                    if (xaxis + (10*shipLengths[0]) <100) {
                        _placeShipAbove(xaxis)
                    } else {
                        _placeShipBelow(xaxis)
                    }
                } else {
                    if (xaxis - (10*shipLengths[0]) >-1) {
                        _placeShipBelow(xaxis)
                    } else {
                        _placeShipAbove(xaxis)
                    }
                }
            } else {  // horizontal ship
                let random =  Math.floor(Math.random()*99)
                let yaxis = Math.floor(random/10)
                let ybasis = random%10
                let candidates =  []
                for (let i=0; i<=9; i++) {
                    candidates.push(ybasis*10+i)
                }
                
                let left = Math.floor(Math.random()*2)
                console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
                console.log(yaxis)
                console.log(left)
                if (left == 0) {
                    if ( candidates.includes(yaxis + shipLengths[0]) ) {
                        _placeShipRight(yaxis)
                    } else {
                        _placeShipLeft(yaxis)
                    }
                } else {
                    if ( candidates.includes(yaxis - shipLengths[0]) ) {
                        _placeShipLeft(yaxis)
                    } else {
                        _placeShipRight(yaxis)
                    }
                }
            } 
        } while ( shipLengths.length > 0)
    }

    function _placeShipAbove(basis) {
        for (let i=0; i<shipLengths[0]; i++) { 
            myShipCoord.push(basis + 10*i)
        }
        for (let i=0; i<shipLengths[0]; i++) { 
            if (!allShipCoord.includes(basis + 10*i)) {
                testShipOverlap.push(1)
            }
        }
        if (testShipOverlap.length == shipLengths[0] ) {
            boardA.placeShip( myShipCoord )
            allShipCoord.push( ...myShipCoord )
            shipLengths.shift()
        }
    }

    function _placeShipBelow(basis) {
        for (let i=0; i<shipLengths[0]; i++) { 
            myShipCoord.push(basis - 10*i)
        }
        for (let i=0; i<shipLengths[0]; i++) { 
            if (!allShipCoord.includes(basis - 10*i)) {
                testShipOverlap.push(1)
            }
        }
        if (testShipOverlap.length == shipLengths[0] ) {
            boardA.placeShip( myShipCoord )
            allShipCoord.push( ...myShipCoord )
            shipLengths.shift()
        }
    }

    function _placeShipRight(basis) {
        for (let i=0; i<shipLengths[0]; i++) { 
            myShipCoord.push(basis + i)
        }
        for (let i=0; i<shipLengths[0]; i++) { 
            if (!allShipCoord.includes(basis + i)) {
                testShipOverlap.push(1)
            }
        }
        if (testShipOverlap.length == shipLengths[0] ) {
            boardA.placeShip( myShipCoord )
            allShipCoord.push( ...myShipCoord )
            shipLengths.shift()
        }
    }

    function _placeShipLeft(basis) {
        for (let i=0; i<shipLengths[0]; i++) { 
            myShipCoord.push(basis - i)
        }
        for (let i=0; i<shipLengths[0]; i++) { 
            if (!allShipCoord.includes(basis - i)) {
                testShipOverlap.push(1)
            }
        }
        if (testShipOverlap.length == shipLengths[0] ) {
            boardA.placeShip( myShipCoord )
            allShipCoord.push( ...myShipCoord )
            shipLengths.shift()
        }
    }
    return { doPlacement }
})()

export default placeShipComputer