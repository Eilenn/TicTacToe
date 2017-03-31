var checkSymbolModule = (function () {
    var _isX = function (cell) {
        var isX = false;
        if (cell.innerText == 'X') {
            isX = true;
        }
        return isX;
    },

        _isO = function (cell) {
            var isO = false;
            if (cell.innerText == 'O') {
                isO = true;
            }
            return isO;
        },
        _isSymbolX = function () {
            var isSymbolX = false;
            if (document.symbol == 'X') {
                isSymbolX = true;
            }
            return isSymbolX;
        };
    return {
        isX: _isX,
        isO: _isO,
        isSymbolX: _isSymbolX
    }
})();