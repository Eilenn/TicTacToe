var checkSymbolModule = (function () {
    /**
     * Checks inner text of a cell in table - true for cross (X), false for other texts.
     */
    var _isX = function (cell) {
        var isX = false;
        if (cell.innerText == cross) {
            isX = true;
        }
        return isX;
    },

    /**
     * Checks inner text of a cell in table - true for circle (O), false for other texts.
     */
        _isO = function (cell) {
            var isO = false;
            if (cell.innerText == circle) {
                isO = true;
            }
            return isO;
        },
        /**
         * Checks current document.symbol, true for cross (X), false for other.
         */
        _isSymbolX = function () {
            var isSymbolX = false;
            if (document.symbol == cross) {
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