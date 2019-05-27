let gameMatrix = new Array(6).fill([new Array(7).fill(0)]);
let playerOneSlots = new Array(6).fill([new Array(7).fill(0)]);
let playerTwoSlots = new Array(6).fill([new Array(7).fill(0)]);

let playerTurn = 1;
let win = false;

const slotSelected = (event) => {
    let columnNumber = (event.target.id);
    columnNumber--;
    // let slot;

    for(i = 0; i < 6; i++) {
        if(array[i] === columnNumber) {
            for(j = 0; j < 7; j++) {
              if( array[i][j] === 0) {
                  gameMatrix[i][j] = turn % 2 === 1 ? 1 : 2;
                   slot = j;
                  if (turn % 2 === 1) {
                      playerOneSlots[i][j] = 1;
                  }
                  if (turn % 2 === 0) {
                      playerTwoSlots[i][j] = 2;
                  }
              }
            }
        }

    }
    
    // let column = document.getElementById(event.target.id);
    // let row = column.getElementById(slot);

    // if(turn % 2 === 1) {
    //     class = "playerOne";
    // }
    // if(turn % 2 === 0) {
    //     class = "playerTwo";
    // }

    turn++;
}

const gameStatusChange = () => {
    if (turn % 2 === 1 && !win ) {
        "Player One: Please Select a Column"
    }
    if (turn % 2 === 1 && win ) {
        "Player One is the Winner!"
    }
    if (turn % 2 === 0 && !win ) {
        "Player Two: Please Select a Column"
    }
    if (turn % 2 === 0 && win ) {
        "Player Two is the Winner!"
    }
    if (turn === 42 && !win) {
        "Tie"
    }
}

const ResetGame = () => {
    gameMatrix.fill(0);
    playerOneSlots.fill(0);
    playerTwoSlots.fill(0);

    turn = 1;
}

const resetButton = document.getElementsByClassName("button");
