function makePlayer() {
  const randomAttack = function(board) {
      let indices = [];
      for (let i =0; i<100; i++){
          if (board[i]==0) {
              indices.push(i)
          } 
      }
      let tryCoord = Math.floor(Math.random() * (indices.length))
     
    return indices[tryCoord]
  };  

  return { randomAttack }
}

export {makePlayer}