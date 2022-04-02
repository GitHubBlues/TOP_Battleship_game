function makeShip(arg) {
  return {
    length: arg,
    hitStatus: new Array(arg).fill(false),
    
    hit(loc) {
      this.hitStatus[loc] = true;
      return this.hitStatus;
    },
    
    status() {
      return this.hitStatus;
    },

    isSunk() {
      if (this.hitStatus.includes(false)) {
        return false;
      } else {
        return true;
      }
    }
  };
}

export {makeShip}