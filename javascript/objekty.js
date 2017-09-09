'use strict';

var kaja = {
    imie:"Kaja",
    wzrost: 152,
    przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {console.log(this.imie)}
}

console.log(kaja.wzrost);
console.log(kaja["wzrost"]);
console.log(kaja);

kaja.przedstawOsobe();
krystian.przedstawOsobe();

class Osoba {
    constructor(firstName, lastName, height, eyes) {
        
     this.imie = firstName;
     this.nazwisko = lastName;
     this.wzrost = height;
     this.oczy = eyes;
}
    wyswietlInfo() {
        console.log("Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko + ",Wzrost: " + this.wzrost + ", Oczy: " +this.oczy);
    }
}

var krystian = new Osoba('Krystian', 'Dziopa', 180, 'Niebieskie');
var kaja = new Osoba('Kaja', 'Brzęczyszczykiewicz', 250, 'piękne');

console.log(krystian);
console.log(kaja);

krystian.wyswietlInfo();
kaja.wyswietlInfo();
