var messagesModule = (function () {
    var _setMessage = function (msg) {
        document.getElementById('msg').innerText = msg;
    },
        _setDraw = function (msg) {
            document.getElementById('draw').innerText = msg;
        },
        _setXWin = function (msg) {
            document.getElementById('xWin').innerText = msg;
        },
        _setOWin = function (msg) {
            document.getElementById('oWin').innerText = msg;
        };
    return {
        setMessage: _setMessage,
        setDraw: _setDraw,
        setXWin: _setXWin,
        setOWin: _setOWin
    }
})();
