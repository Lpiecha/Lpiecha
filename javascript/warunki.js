'use strict';

var wzrostOlgi = 191;
var wzrostMateusza = 191;

if (wzrostOlgi > wzrostMateusza) {
    console.log("Olga jest wyższa :)");
}
else if (wzrostOlgi==wzrostMateusza) {
    console.log("Olga jest tak wysoka jak Mateusz");
}
else {
    console.log("Olga jest niższa");
}

var kolor = 'brązowy';

switch (kolor) {
    case 'czerwony':
        console.log('czerwony')
        break;
        
    case 'zielony':
        console.log('zielony')
        break;
        
    case 'niebieski':
        console.log('niebieski')
        break;
    default:
        console.log('Inny kolor');
        
}