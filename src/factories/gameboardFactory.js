import {makeShip} from "./shipFactory.js";

function makeBoard() {
  const gbShips = new Array(100).fill(0);
  const gbProgress = new Array(100).fill(0);
  let dbShips = [];
  let id = 1;
  let coord =  [];

  const placeShip = function(coord) {
    // console.log(coord)
    for (let i=0; i<coord.length; i++) { 
       gbShips[coord[i]] = id; }
    dbShips.push( makeShip(coord.length) );
    id = id+1;
    return [id, gbShips]
  };  

  const getID = function( shipNr, attackCoord ) {
      let shipCoordinates = gbShips.map( (element, index) => {
        if (element == shipNr) {
          return index;
        }
      });  
      
      shipCoordinates.sort(function(a, b) {
        return a - b;
      });

      return shipCoordinates.indexOf(attackCoord);
    };
   
 
  const receiveAttack = function( coord ) {
      const tmp = this.gbShips[coord];
      console.log(tmp)
      if (tmp>0) {
        this.dbShips[ tmp-1 ].hit( getID(tmp, coord) )
        this.gbProgress[coord] = 1000;
        console.log(gbProgress[coord])
        console.log("Hello")
      } else {
        this.gbProgress[coord] = -99;
        console.log(gbProgress[coord])
        console.log("Bze")
      }
      return [coord, tmp]
  }

  const allSunk = function( ) {
      const sunkAll = dbShips.some( ( ship ) => ship.isSunk() === false);
      if (sunkAll === true) {
          return false;
      } else {
          return true;
      }
  } 


  return {
      gbShips, 
      gbProgress,  
      dbShips,
      placeShip,
      receiveAttack,
      allSunk
  }   
}  

export { makeBoard }