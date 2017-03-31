var historyModule = function () {
    var _xWins = 0,
        _oWins = 0,
        _draws = 0,
        _xWon = function () {
            _xWins++;
        },
        _oWon = function () {
            _oWins++;
        },
        _wasDraw = function () {
            _draws++;
        },
        _getTimesXWon = function () {
            return _xWins;
        },
        _getTimesOWon = function () {
            return _oWins;
        },
        _getTimesWasDraw = function () {
            return _draws;
        };
    return {
        xWon: _xWon,
        oWon: _oWon,
        wasDraw: _wasDraw,
        getTimesXWon: _getTimesXWon,
        getTimesOWon: _getTimesOWon,
        getTimesWasDraw: _getTimesWasDraw
    }
}();