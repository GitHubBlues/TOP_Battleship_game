function makeShip(coord) {
    return {
        length: coord.length,
        coord: coord,
        hitStatus: new Array(coord.length).fill(false),

        hit(loc) {
            this.hitStatus[loc] = true;
            return this.hitStatus;
        },

        isSunk() {
            if (this.hitStatus.includes(false)) {
                return false;
            } else {
                return true;
            }
        },
    };
}

export { makeShip };
