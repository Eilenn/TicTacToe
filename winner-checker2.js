var winnerChecker2 = (function () {
    var _createBoard = function (size) {
        var boardSize = size * size;
        board = new Array(boardSize);
        for (var i = 0; i < board.length; i++) {
            board[i] = 0;
        }
    },
        _splitIntoRows = function () {
            rows = new Array(size);
            for (var i = 0; i < size; i++) {
                rows[i] = new Array(size);
            }
            var start = 0;
            for (var numberOfRows = 0; numberOfRows < size; numberOfRows++) {
                var index = 0;
                for (j = start; j < start + size; j++) {
                    rows[numberOfRows][index] = board[j]
                    index++;
                }
                start = j;
            }
        },
        _splitIntoColumns = function () {
            columns = new Array(size);
            for (var i = 0; i < size; i++) {
                columns[i] = new Array(size);
            }
            var start = 0;
            for (var numberOfColumns = 0; numberOfColumns < size; numberOfColumns++) {
                var index = 0;
                for (k = start; k < board.length; k = k + size) {
                    columns[numberOfColumns][index] = board[k];
                    index++;
                }
                start++;
            }
        },
        _splitInDiagonals = function () {
            diagonals = new Array(2);
            diagonals[0] = new Array(size);
            diagonals[1] = new Array(size);
            var index = 0;
            var incrementor = size - 1;
            for (var i = 0; i < board.length; i = i + size + 1) {
                diagonals[0][index] = board[i];
                index++;
            }
            index2 = 0;
            for (var i = incrementor; i < board.length - incrementor; i = i + incrementor) {
                diagonals[1][index2] = board[i];
                index2++;
            }
        },
        _checkRows = function () {
            var hasWon = false;
            for (var i = 0; i < size; i++) {
                var sum = 0;
                for (var j = 0; j < size; j++) {
                    sum = sum + rows[i][j];
                }
                if (sum == size || sum == -size) {
                    hasWon = true;
                    break;
                }
            }
            return hasWon;
        },
        _checkColumns = function () {
            var hasWon = false;
            for (var i = 0; i < size; i++) {
                var sum = 0;
                for (var j = 0; j < size; j++) {
                    sum = sum + columns[i][j];
                }
                if (sum == size || sum == -size) {
                    hasWon = true;
                    break;
                }
            }
            return hasWon;
        },
        _checkDiagonals = function () {
            var hasWon = false;
            for (var i = 0; i < 2; i++) {
                var sum = 0;
                for (var j = 0; j < size; j++) {
                    sum = sum + diagonals[i][j];
                }
                if (sum == size || sum == -size) {
                    hasWon = true;
                    break;
                }
            }
            return hasWon;
        },
        _checkWinRow = function () {
            _splitIntoRows();
            _splitIntoColumns();
            _splitInDiagonals();
            _checkRows();
            _checkColumns();
             _checkDiagonals();
        }
        ;
    return {
        createBoard: _createBoard,
        splitIntoRows: _splitIntoRows,
        checkWinRow: _checkWinRow
    }
})();
