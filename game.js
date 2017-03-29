function startGame() {
    document.symbol = 'X';
    winner = false;
    moveCounter = 0;

}

function nextMove(cell) {
    if (cell.innerText == '' && winner == false && moveCounter != 9) {
        cell.innerText = document.symbol;
        switchSymbol();
        moveCounter++;
        if (isDraw(moveCounter)) {
            setMessage('Game over. It is a tie.');
        }
    }
    else if (cell.innerText == '' && winner == true) {
        setMessage('Game is over, you cannot place symbol on board.');
    }
    else {
        setMessage('This field is occupied. Pick another.');
    }
}

function switchSymbol() {
    if (isWon(document.symbol)) {
        setMessage(document.symbol + ', you won!');
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
