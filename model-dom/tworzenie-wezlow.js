'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];
//przypisz do zmiennej istniejący węzeł

console.log(document.getElementById('parFirst').children);

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stworz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworz nowy tekst dla elementu p

console.log(newElementContent);

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

console.log(newElement);

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
console.log(parFirstDiv);

parFirstDiv.replaceChild(newElement, istniejacyWezel); //zamien drugi link na paragraf

var allLinks = document.querySelectorAll('a'); //przypisz do zmiennej tablice ze wszystkimi linkami
console.log(allLinks);

for (var i = 0; i<allLinks.length; i++) {  //iteracja po tablicy
     console.log(allLinks[i]);
    var br = document.createElement('br'); //stworz element br
    
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling); //dodaj br po kazdym linku
    
    allLinks[i].removeAttribute('class'); //usuń atrybut klasy

}