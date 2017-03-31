var clear = (function(){
    var _clearBoard=function(){
        for (var i = 1; i < 10; i++) {
        clearField(i);
    }
},
clearField=function(fieldId){
    document.getElementById(fieldId).innerText = '';
}
return{
    clearBoard: _clearBoard
}
})();
