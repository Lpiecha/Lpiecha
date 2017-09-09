'use strict';

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 / liczba2;
console.log(wynik);

while (liczba2 < liczba1) {
    console.log(liczba1);
    --liczba1;
}

var wynik2 = 20;
wynik2 -= liczba1;

console.log(wynik2);

(2>5) ? console.log("tak") : console.log("nie");