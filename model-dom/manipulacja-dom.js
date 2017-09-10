'use strict';

var mainHeader = document.getElementById('main-header'); //przypisujemy naglowek strony do zmiennej

mainHeader.innerHTML = "Treść nagłowka"; //dodajemy tresc do naglowka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej

link.href = "http://akademia108.pl"; //nadpisujemy atrybut href w linki

link.className = "nowaKlasa"; //nadpisujemy nazwe klasy w linku

mainHeader.style.color = "#11aa22";  //dodajemy style do naglowka