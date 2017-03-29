/*function startGame() {
    document.symbol = getStartingSymbol(cross);
    winner = false;
    moveCounter = 0;
    clearBoard();
}*/

function startGame(symbol) {
    document.symbol = symbol;
    winner = false;
    moveCounter = 0;
    clearBoard();
}

function nextMove(cell) {
    if (cell.innerText == '' && winner == false && moveCounter != 9) {
        cell.innerText = document.symbol;
        if (cell.innerText == 'X') {
            cell.style.color = "#191970";
        }

        switchSymbol();
        moveCounter++;
        if (isDraw(moveCounter) && winner == false) {
            alert('Game over. It is a tie.');
        }
    }
    else if (cell.innerText == '' && winner == true) {
        alert("Game over,  you cannot place symbol on board.");
    }
    else {
        alert('This field is occupied. Pick another.');
    }
}

function switchSymbol() {
    if (isWon(document.symbol)) {
        alert(document.symbol + ', you won!');
        winner = true;
    }

    else if (document.symbol == 'X') {
        document.symbol = 'O';
        setMessage(document.symbol + ' turn');
    }
    else {
        document.symbol = 'X';
        setMessage(document.symbol + ' turn');
    }
}

function setMessage(msg) {
    document.getElementById('msg').innerText = msg;
}

