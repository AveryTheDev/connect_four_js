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
    let header = document.getElementsByClassName('is primary');

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
    debugger;
    let columnNumber = (event);
    columnNumber--;
    let slot = 0;
    let counter = 1;

    if (gameMatrix[5][columnNumber] > 0) return;

    for (let i = 0; i < 7; i++) {
        if (i === columnNumber) {
            for (let j = 0; j < 6; j++) {
                if (gameMatrix[j][i] === 0 && counter !== 0) {
                    gameMatrix[j][i] = playerTurn % 2 === 1 ? 1 : 2;
                    console.log(gameMatrix[j][i]);
                    slot = j;
                    if (playerTurn % 2 === 1) {
                        playerOneSlots[j][i] = 1;
                        console.log(playerOneSlots[j][i]);
                        counter--;
                    }
                    else if (playerTurn % 2 === 0) {
                        playerTwoSlots[j][i] = 2;
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

const column = document.getElementsByTagName("ul");

column[0].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }   
    gameStatusChange();
})

column[1].addEventListener("click", (event) => {
    if(playerTurn < 43 && !win) {
    slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

column[2].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

column[3].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

column[4].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }  
    gameStatusChange();
})

column[5].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

column[6].addEventListener("click", (event) => {
    if (playerTurn < 43 && !win) {
        slotSelected(event.currentTarget.id);
    }
    gameStatusChange();
})

