let gameMatrix = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]; 

let playerOneSlots = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]; 

let playerTwoSlots = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]; 

let playerTurn = 1;
let win = false;

const slotSelected = (event) => {
    debugger;
    let columnNumber = (event);
    columnNumber--;
    let slot = 0;

    for(let i = 0; i < 6; i++) {
        if(i === columnNumber) {
            for(let j = 0; j < 7; j++) {
              if(gameMatrix[i][j] === 0) {
                  gameMatrix[i][j] = playerTurn % 2 === 1 ? 1 : 2;
                  console.log(gameMatrix[i][j]);
                   slot = j;
                  if (playerTurn % 2 === 1) {
                      playerOneSlots[i][j] = 1;
                      console.log(playerOneSlots[i][j]);
                  }
                  else if (playerTurn % 2 === 0) {
                      playerTwoSlots[i][j] = 2;                    
                  }
              }
              break;
            }
        }
        break;
    }

    event = event.toString();
    slot = slot + 1;
    slot = slot.toString();

    let location = event + "-" + slot;
    let row = document.getElementById(location);

    if(playerTurn % 2 === 1) {
        row.style.cssText = "background-color: #F54C50";
    }
    if(playerTurn % 2 === 0) {
        row.style.cssText = "background-color: #FDFF00";
    }

    playerTurn++;
}

const gameStatusChange = () => {
    let status = document.querySelector('h2');

    if (playerTurn % 2 === 1 && !win ) {
        return status.innerText = "Player One: Please Select a Column"
    }
    if (playerTurn % 2 === 1 && win ) {
        return status.innerText = "Player One is the Winner!"
    }
    if (playerTurn % 2 === 0 && !win ) {
        return status.innerText = "Player Two: Please Select a Column"
    }
    if (playerTurn % 2 === 0 && win ) {
        return status.innerText = "Player Two is the Winner!"
    }
    if (playerTurn === 42 && !win) {
        return status.innerText = "Tie"
    }
}

const resetGame = () => {
    debugger;
    gameMatrix = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    playerOneSlots = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    playerTwoSlots = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]; 

    playerTurn = 1;
}

const resetButton = document.getElementsByClassName("button");
const row = document.getElementsByTagName("ul");

    row[0].addEventListener("click", (event) => {
        slotSelected(event.currentTarget.id);
        gameStatusChange();
    })
    row[1].addEventListener("click", (event) => {
        slotSelected(event.currentTarget.id);
        gameStatusChange();
    })
    row[2].addEventListener("click", (event) => {
        slotSelected(event.currentTarget.id);
        gameStatusChange();
    })
    row[3].addEventListener("click", (event) => {
        slotSelected(event.currentTarget.id);
        gameStatusChange();
    })
    row[4].addEventListener("click", (event) => {
        slotSelected(event.currentTarget.id);
        gameStatusChange();
    })
    row[5].addEventListener("click", (event) => {
        slotSelected(event.currentTarget.id);
        gameStatusChange();
    })

resetButton.addEventListener("click", () => resetGame);
