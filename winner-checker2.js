var boardSize = (function () {
    var _size = 3;
    _getSize = function () {
        return _size;
    }
    _setSize = function (size) {
        _size = size;
    }
    return {
        getSize: _getSize,
        setSize: _setSize
    }
})(),
    winnerChecker2 = (function () {

        return {

        }
    })(),
    var board = new Array(boardSize.getSize);
for (var i = 0; i < boardSize.getSize; i++) {
  board[i] = new Array(boardSize.getSize);
}