'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';

imiona.push('Geralt');

imiona.pop();
imiona.pop();

console.log(imiona.unshift('Robert'));


console.log(imiona);

console.log(imiona.shift());

console.log(imiona);

console.log(imiona.length);

imiona.push("Kaja");

console.log(imiona);

for (var i = 0; i < 4 ; i++) {
    console.log(imiona[i]);
}

for (var i = imiona.length-1; i>=0 ; i--) {
    console.log(imiona[i]);
}

console.log(imiona.join(" - "));

imiona.sort();

console.log(imiona);