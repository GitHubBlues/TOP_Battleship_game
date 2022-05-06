import { makeShip } from "./shipFactory.js";

function makeBoard() {
    const gbShips = new Array(100).fill(0);
    const gbProgress = new Array(100).fill(0);
    let dbShips = [];
    let id = 1;

    const placeShip = function (coord) {
        for (let i = 0; i < coord.length; i++) {
            gbShips[coord[i]] = id;
        }
        dbShips.push(makeShip(coord));
        id = id + 1;
    };

    const receiveAttack = function (coordinate) {
        const coordA = coordinate;
        const tmp = this.gbShips[coordA];
        if (tmp > 0 && tmp < 1000) {
            const hitShip = this.dbShips[tmp - 1];
            const idx = hitShip.coord.findIndex((element) => element == coordA);
            hitShip.hit(idx);
            this.gbProgress[coordA] = 1000;
        } else {
            this.gbProgress[coordA] = -99;
        }
    };

    const allSunk = function (shipDatabase) {
        const sunkAll = shipDatabase.some((ship) => ship.isSunk() === false);
        if (sunkAll === true) {
            return false;
        } else {
            return true;
        }
    };

    return {
        gbShips,
        gbProgress,
        dbShips,
        placeShip,
        receiveAttack,
        allSunk,
    };
}

export { makeBoard };
