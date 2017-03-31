var gameModule = (function () {
    var _startGame = function (symbol) {
        document.symbol = symbol;
        // to be able to reset game with starting symbol
        starting = symbol;
        // 1 means X
        whoFirst=1;
        messagesModule.setMessage(symbol+" starts");
        winner = false;
        moveCounter = 0;
        clear.clearBoard();
    }
    _resetGame = function () {
        _startGame(starting);
    },
    _changeStarting = function(){
        if(starting=='X'){
            whoFirst=0;
            starting=circle;
        }
        else{
            whoFirst=1;
            starting=cross;
        }
    },
        _switchSymbol = function () {
            if (winnerChecker.isWon(document.symbol)) {
                winner = true;
                if (checkSymbolModule.isSymbolX()) {
                    historyModule.xWon();
                    messagesModule.setXWin(historyModule.getTimesXWon());
                }
                else {
                    historyModule.oWon();
                    messagesModule.setOWin(historyModule.getTimesOWon());
                }
                alert(document.symbol + ', you won!');
            }

            else if (document.symbol == 'X') {
                document.symbol = 'O';
                messagesModule.setMessage(document.symbol + ' turn');
            }
            else {
                document.symbol = 'X';
                messagesModule.setMessage(document.symbol + ' turn');
            }
        },
        _nextMove = function (cell) {
            if (cell.innerText == '' && winner == false && moveCounter != 9) {
                cell.innerText = document.symbol;
                if (checkSymbolModule.isX(cell)) {
                    cell.style.color = "#191970";
                }
                if (checkSymbolModule.isO(cell)) {
                    cell.style.color = "red";
                }

                _switchSymbol();
                moveCounter++;
                if (winnerChecker.isDraw(moveCounter) && winner == false) {
                    historyModule.wasDraw();
                    messagesModule.setDraw(historyModule.getTimesWasDraw());
                    alert('Game over. It is a tie.');
                }
            }
            else if (cell.innerText == '' && winner == true) {
                alert("Game over,  you cannot place symbol on board.");
            }
            else {
                messagesModule.setMessage('This field is occupied. Pick another.');
            }
        };
    return {
        startGame: _startGame,
        resetGame: _resetGame,
        nextMove: _nextMove,
        changeStarting: _changeStarting
    }
})();
