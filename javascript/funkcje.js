'use strict';

function wypiszImie(imieDoWyswietlenia) {
    var zwracanyNapis;
    zwracanyNapis = "Imie jest: " + imieDoWyswietlenia
    
    return zwracanyNapis;
}

var imieMeskie = "Mateusz";
var imieZenskie = "Ola";

wypiszImie(imieMeskie);
wypiszImie(imieZenskie);

var nowyNapis = wypiszImie("Kiriusz");

console.log(nowyNapis);

function multiply(czynnikMnozenia1, czynnikMnozenia2) {

    var wynikMnozenia = czynnikMnozenia1 * czynnikMnozenia2;
    
    return wynikMnozenia;
}

 var mnozna = 5;
 var mnoznik = 6;
 
console.log(multiply(mnozna, mnoznik));
