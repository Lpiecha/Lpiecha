'use strict';

for (var i=10 ; i>0 ; i--) {
    console.log(i);
}
console.log("----------")

for (var i=1 ; i<5 ; ) {
    console.log(++i);
    
}

console.log("-------");
for (var i=1 ; i<5 ; ) {
    

    console.log(i++);
}

var tablica = ["Krystian", "Monika", "Danuta"];

tablica.forEach(function(element, index) {
    
    console.log("Element z indexem: " + index + " ma wartość " + element );
    
});

var iter = 20;
do {
    console.log(iter);
    iter++;
} while (iter < 5)
    
    var a = 0;
    while (a < 10) {
        console.log(++a);
        break;
    }

for (var b = 0; b < 10 ; ++b) {
    if (b == 5) {
        continue;
        
    } else {
        console.log(b);
    }
    console.log("----")
}