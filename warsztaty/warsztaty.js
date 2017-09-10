'use strict';

//  function ustawTlo() {
//   
//      document.getElementById('zmiana-koloru-p1').style.backgroundColor = "red";
//      document.getElementById('zmiana-koloru-p2').style.backgroundColor = "yellow";
//     
//  }
// 
//document.getElementById('guzik').onclick = ustawTlo;
//
//document.getElementById("formularz").addEventListener("click", function(event){
//    event.preventDefault()
//});

var fform = document.getElementById('formularz');

function daneFormularza(e) {
    e.preventDefault();
    console.log('działa');
    
    var imie = document.getElementById('formularz').childNodes[1].value;
    var nazwisko = document.getElementById('formularz').childNodes[5].value;
    
    console.log(imie);
    console.log(nazwisko);
}

fform.onsubmit = daneFormularza;

//console.log(document.getElementById)("fomularz").childNodes;
//
//console.log('--------------------------------')
//console.log(document.getElementsByTagName('fname','lname'));

