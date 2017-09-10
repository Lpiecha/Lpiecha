'use strict'; 

//var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienna z drugim linkiem
//
//function alarm(e) {
//    e.preventDefault(); //zapobiegamy domyslnej akcji
//    console.log('klieknięto kolejny link');
//    
//    console.log(e);
//}
//
//secondLink.onclick = alarm; //podpinamy funkcje 'alarm' na drugim linku po kliknieciu
//
//var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienna z trzeciem linkiem
//
//thirdLink.addEventListener('click', alarm); //wywolujemy funckje alarm() na trzecim linku po kliknieciu za pomoca event Listenera

var mainHeader = document.getElementById('main-header');

function resize(e) {  //przekazujemy zdarzenia jako parametr funkcji
    if (e.type == 'mouseover') { //sprawdzanie typu zdarzenia
        mainHeader.style.fontSize = "70px"; //zmien wielkosc fonta po najechaniu
        
    } else {
        mainHeader.style.fontSize = "inherit"; //przywroc domyslna wielkosc fonta po zjechaniu
    }
}

mainHeader.onmouseover = resize; //wywolanie funkcji resize po najechaniu myszka na naglowek

mainHeader.onmouseout = resize; //wywylowanie funkcji resize po zjechaniu myszka z naglowka

function klikHeader() {
    console.log("kliknąłeś w heaader");
}

document.getElementsByTagName('header')[0].onclick = klikHeader; //wywolaj funkcje na elemencie header

function klikH1(e) {
//    e.stopPropagation(); //odkomentowac, zeby pokazac zatrzymanie propaginacji
    console.log("kliknąłeś w h1");
}

document.getElementsByTagName('h1')[0].onclick = klikH1; //wywola funkcje na elemencie H1