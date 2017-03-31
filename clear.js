

function clearBoard() {
    for (var i = 1; i < 10; i++) {
        clearField(i);
    }
    winner = false;
    moveCounter = 0;
}

var clearField =function(fieldId) {
    document.getElementById(fieldId).innerText = '';
}