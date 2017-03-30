/**
 * Pierwsze trzy metody powodują zwiększenie wygranej jednego z graczy (lub remisu) o jeden, a pozostałe metody pobierają liczbę wygranych
 */
var historyModule = function(){
var _xWon=0,
_oWon=0,
_draw=0;
return{
xWon: function(){
    _xWon++;
},
oWon: function(){
    _oWon++;
},
wasDraw: function(){
    _draw++;
},
getTimesXWon: function(){
    return _xWon;
},
getTimesOWon: function(){
    return _oWon;
},
getTimesWasDraw: function(){
    return _draw;
}
};
}();

