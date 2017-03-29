function clearBoard() {
    for (var i = 1; i < 10; i++) {
        clearField(i);
    }
}

function clearField(fieldId) {
    document.getElementById(fieldId).innerText = '';
}