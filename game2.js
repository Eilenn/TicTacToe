var gameModule2 = (function () {
    var _startGame = function (symbol) {
        document.symbol = symbol;
        // to be able to reset game with starting symbol
        starting = symbol;
        messagesModule.setMessage(symbol+" starts");
        winner = false;
        moveCounter = 0;
        clear.clearBoard();
        size =3;
       winnerChecker2.createBoard(size);
    }
    _resetGame = function () {
        _startGame(starting);
    },
    _changeStarting = function(){
        if(starting==cross){
            starting=circle;
        }
        else{
            starting=cross;
        }
        if(moveCounter==0){
            _resetGame();
        }
    },
        _switchSymbol = function () {
            if (winnerChecker2.hasWonGame()) {
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

            else if (document.symbol == cross) {
                document.symbol = circle;
                messagesModule.setMessage(document.symbol + ' turn');
            }
            else {
                document.symbol = cross;
                messagesModule.setMessage(document.symbol + ' turn');
            }
        },
        _nextMove = function (cell) {
            if (cell.innerText == '' && winner == false && moveCounter != 9) {
                cell.innerText = document.symbol;
                if (checkSymbolModule.isX(cell)) {
                    cell.style.color = "#191970";
                    board[cell.id-1]=1;
                }
                if (checkSymbolModule.isO(cell)) {
                    cell.style.color = "red";
                    board[cell.id-1]=-1;
                }
                _switchSymbol();
                moveCounter++;
                if (winnerChecker2.isDraw(moveCounter) && winner == false) {
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