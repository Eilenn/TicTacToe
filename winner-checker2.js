var winnerChecker = (function () {
    var _getSymbol = function (fieldId) {
        return document.getElementById(fieldId).innerText;
    },
        _checkRow = function (field1, field2, field3, symbol) {
            var isRowTaken = false;
            var allTakenInRow = (_getSymbol(field1) == symbol && _getSymbol(field2) == symbol && _getSymbol(field3) == symbol);
            if (allTakenInRow) {
                isRowTaken = true;
            }
            return isRowTaken;
        },
        _isWon = function (symbol) {
            var result = false;
            if (_checkRow(1, 2, 3, symbol) || _checkRow(4, 5, 6, symbol) || _checkRow(7, 8, 9, symbol) || _checkRow(1, 4, 7, symbol) || _checkRow(2, 5, 8, symbol) || _checkRow(3, 6, 9, symbol) || _checkRow(1, 5, 9, symbol) || _checkRow(3, 5, 7, symbol)) {
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