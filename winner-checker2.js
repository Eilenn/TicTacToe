var winnerChecker = (function () {
    var getSymbol = function (fieldId) {
        return document.getElementById(fieldId).innerText;
    },
        checkRow = function (field1, field2, field3, symbol) {
            var isRowTaken = false;
            var allTakenInRow = (getSymbol(field1) == symbol && getSymbol(field2) == symbol && getSymbol(field3) == symbol);
            if (allTakenInRow) {
                isRowTaken = true;
            }
            return isRowTaken;
        },
        _isWon = function (symbol) {
            var result = false;
            if (checkRow(1, 2, 3, symbol) || checkRow(4, 5, 6, symbol) || checkRow(7, 8, 9, symbol) || checkRow(1, 4, 7, symbol) || checkRow(2, 5, 8, symbol) || checkRow(3, 6, 9, symbol) || checkRow(1, 5, 9, symbol) || checkRow(3, 5, 7, symbol)) {
                result = true;
            }
            return result;
        },
        _isDraw = function (moveCounter) {
            var draw = false;
            if (moveCounter == 9) {
                draw = true;
            }
            return draw;
        };
    return {
        isWon: _isWon,
        isDraw: _isDraw
    };
})();

