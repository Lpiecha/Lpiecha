'use strict';
var url = 'https://picsum.photos/list';

var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    fetch(url)
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })
});