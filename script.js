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

const gameStatusChange = () => {
    let status = document.querySelector('h2');
    if (playerTurn > 42 && !win) {
        return status.innerText = "Its A Tie!?! Reset For a Tie Breaker!"
    }
    if (playerTurn % 2 === 1 && !win ) {
        return status.innerText = "Player One: Please Select a Column"
    }
    if (playerTurn % 2 === 1 && win ) {
        return status.innerText = "Player Two is the Winner!"
    }
    if (playerTurn % 2 === 0 && !win ) {
        return status.innerText = "Player Two: Please Select a Column"
    }
    if (playerTurn % 2 === 0 && win ) {
        return status.innerText = "Player One is the Winner!"
    }
}

function checkForMatch(a, b, c, d) {
  return ((a != 0) && (a == b) && (a == c) && (a == d));
}

function checkForWin(playerSelection) {
    let ps = playerSelection;

  for (r = 0; r < 3; r++)
    for (c = 0; c < 7; c++)
      if (checkForMatch(ps[r][c], ps[r + 1][c], ps[r + 2][c], ps[r + 3][c]))
        return win = true;

  for (r = 0; r < 6; r++)
    for (c = 0; c < 4; c++)
      if (checkForMatch(ps[r][c], ps[r][c + 1], ps[r][c + 2], ps[r][c + 3]))
        return win = true;

  for (r = 0; r < 3; r++)
    for (c = 0; c < 4; c++)
      if (checkForMatch(ps[r][c], ps[r + 1][c + 1], ps[r + 2][c + 2], ps[r + 3][c + 3]))
        return win = true;

  for (r = 3; r < 6; r++)
    for (c = 0; c < 4; c++)
      if (checkForMatch(ps[r][c], ps[r - 1][c + 1], ps[r - 2][c + 2], ps[r - 3][c + 3]))
        return win = true;

  return;
}

const slotSelected = (event) => {
    let columnNumber = (event);
    columnNumber--;
    let slot = 0;
    let counter = 1;

    if (gameMatrix[columnNumber][6] > 0) return;

    for (let i = 0; i < 6; i++) {
        if (i === columnNumber) {
            for (let j = 0; j < 7; j++) {
                if (gameMatrix[i][j] === 0 && counter !== 0) {
                    gameMatrix[i][j] = playerTurn % 2 === 1 ? 1 : 2;
                    console.log(gameMatrix[i][j]);
                    slot = j;
                    if (playerTurn % 2 === 1) {
                        playerOneSlots[i][j] = 1;
                        console.log(playerOneSlots[i][j]);
                        counter--;
                    }
                    else if (playerTurn % 2 === 0) {
                        playerTwoSlots[i][j] = 2;
                        counter--;
                    }
                }
            }
        }
    }

    event = event.toString();
    slot = slot + 1;
    slot = slot.toString();

    let location = event + "-" + slot;
    let row = document.getElementById(location);

    if (playerTurn % 2 === 1) {
        row.style.cssText = "background-color: #F54C50";
    }
    if (playerTurn % 2 === 0) {
        row.style.cssText = "background-color: #FDFF00";
    }

    playerTurn++;

    if (playerTurn > 7 && playerTurn % 2 === 0) {
        checkForWin(playerOneSlots);
    }
    else if (playerTurn > 7 && playerTurn % 2 === 1) {
        checkForWin(playerTwoSlots);
    }

}

const row = document.getElementsByTagName("ul");

row[0].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }   
    gameStatusChange();
})

row[1].addEventListener("click", (event) => {
    if(playerTurn < 43 && !win) {
    slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

row[2].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

row[3].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

row[4].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }  
    gameStatusChange();
})

row[5].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

