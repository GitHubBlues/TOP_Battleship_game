const placeShipComputer = (() => {
    let shipLengths = [5,4,3,3,2];
    let allShipCoord = [];

    function doPlacement( board ){
        let boardA = board;
        do {
            let candidates = [];
            let placement;      // an array with coordinates of a ship candidate or false (if)
            let start = Math.floor(Math.random()*99); 
            
            // Starting from a random cell, push into candidates ships that fall into the board and do not overlap.
            placement = _placeUP( start );
            if (placement) { placement = _testShipOverlap(placement) };
            if (placement) { candidates.push(placement) };

            placement = _placeDOWN( start );
            if (placement) { placement = _testShipOverlap(placement) };
            if (placement) { candidates.push(placement) };

            placement = _placeLEFT( start );
            if (placement) { placement = _testShipOverlap(placement) };
            if (placement) { candidates.push(placement) };

            placement = _placeRIGHT( start );
            if (placement) { placement = _testShipOverlap(placement) };
            if (placement) { candidates.push(placement) };

            if (candidates.length > 0) {
                let rd = Math.floor(Math.random()*candidates.length); 
                allShipCoord.push( ...candidates[rd] );
                boardA.placeShip( candidates[rd] );
                shipLengths.splice(0,1);
            } 
            console.log(boardA);
        } while (shipLengths.length>0);
    };

    function _testShipOverlap(placement) {
        const filteredArray = placement.filter(value => allShipCoord.includes(value));
        if ( filteredArray.length>0 ) {
            placement = false;
        }
        return placement;    
    };

    function _placeUP( basis ) {
        let test=[];
        for (let i=0; i<shipLengths[0]; i++) { 
            let candidate = basis - 10*i;
            if (candidate >= 0) {
               test.push(candidate);
            }
        } 
        if (test.length == shipLengths[0]) {
           return test;
        } else {
           return false;
        }
    };

    function _placeDOWN( basis ) {
        let test=[];
        for (let i=0; i<shipLengths[0]; i++) { 
            let candidate = basis + 10*i;
            if (candidate <= 99) {
               test.push(candidate);
            }
        } 
        if (test.length == shipLengths[0]) {
           return test;
        } else {
           return false;
        }
    };

    function _placeLEFT( basis ) {
        let test=[];
        for (let i=0; i<shipLengths[0]; i++) { 
            let candidate = basis-(1*i);
            if ( Math.floor( (candidate*10)/100) == Math.floor( (basis*10)/100)) {
                test.push(candidate);
            } else if ( basis<10 && candidate>=0) {
                test.push(candidate);
            }
        } 
        if (test.length == shipLengths[0]) {
           return test;
        } else {
           return false;
        }
    };

    function _placeRIGHT( basis ) {
        let test=[];
        for (let i=0; i<shipLengths[0]; i++) { 
            let candidate = basis+(1*i);
            if ( Math.floor( (candidate*10)/100) == Math.floor( (basis*10)/100)) {
                test.push(candidate);
            } else if ( basis<10 && candidate<10) {
                test.push(candidate);
            }
        } 
        if (test.length == shipLengths[0]) {
           return test;
        } else {
           return false;
        }
    };

    return { doPlacement }

})()

export default placeShipComputer;