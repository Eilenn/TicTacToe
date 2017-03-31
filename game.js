function startGame(symbol) {
    document.symbol = symbol;
    // to be able to reset game with starting symbol
    starting = symbol;
    winner = false;
    moveCounter = 0;
    clearBoard();
}

function resetGame() {
    startGame(starting);
}

function nextMove(cell) {
    if (cell.innerText == '' && winner == false && moveCounter != 9) {
        cell.innerText = document.symbol;
        if (isX(cell)) {
            cell.style.color = "#191970";
        }
        if (isO(cell)) {
            cell.style.color = "red";
        }

        switchSymbol();
        moveCounter++;
        if (winnerChecker.isDraw(moveCounter) && winner == false) {
            historyModule.wasDraw();
             setDraw(historyModule.getTimesWasDraw());
            alert('Game over. It is a tie.');
        }
    }
    else if (cell.innerText == '' && winner == true) {
        alert("Game over,  you cannot place symbol on board.");
    }
    else {
        setMessage('This field is occupied. Pick another.');
    }
}
function switchSymbol() {
    if (winnerChecker.isWon(document.symbol)) {
        winner = true;
        if(isSymbolX()){
            historyModule.xWon();
            setXWin(historyModule.getTimesXWon());
        }
        else{
            historyModule.oWon();
            setOWin(historyModule.getTimesOWon());
        }
        alert(document.symbol + ', you won!');
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

function setDraw(msg) {
    document.getElementById('draw').innerText = msg;
}

function setXWin(msg) {
    document.getElementById('xWin').innerText = msg;
}

function setOWin(msg) {
    document.getElementById('oWin').innerText = msg;
}

function isX(cell){
    var isX=false;
    if(cell.innerText=='X'){
       isX=true;
    }
    return isX;
}

function isO(cell){
    var isO=false;
    if(cell.innerText=='O'){
       isO=true;
    }
    return isO;
}

function isSymbolX(){
    var isSymbolX=false;
    if(document.symbol=='X'){
        isSymbolX=true;
    }
    return isSymbolX;
}
