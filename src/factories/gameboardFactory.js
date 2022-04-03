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
    const coord =   attackCoord
    let shipCoordinates = gbShips.map( (element, index) => {
        if (element == shipNr) {
          return index;
        }
      });  
      
      shipCoordinates.sort(function(a, b) {
        return a - b;
      });
      console.log(shipCoordinates);
      console.log(coord)  
      console.log(shipCoordinates.findIndex( cr => cr == coord) );
      return shipCoordinates.findIndex( cr => cr == coord);
    };
  
  // const indexOf(arg, coord) {
  //   return arg == coord,
  // }  
 
  const receiveAttack = function( coordA ) {
    const coord = coordA
    console.log(coord)   
    const tmp = this.gbShips[coord];
      if (tmp>0) {
        this.dbShips[ tmp-1 ].hit( getID(tmp, coord) )
        this.gbProgress[coord] = 1000;
      } else {
        this.gbProgress[coord] = -99;
      }
      return [coord, tmp]
  }

  const allSunk = function( shipDatabase ) {
      const sunkAll = shipDatabase.some( ( ship ) => ship.isSunk() === false);
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