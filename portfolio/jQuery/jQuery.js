'use strict'


$(function() {
    $('h1')
    .css({'color':'red'})
    
    var allElements = $('p');
    console.log($('p'));
    
    var elementClass = $('p.pSecond');
    console.log ($('p.pSecond'));
    
    var idElement = $('#pFirst');
    console.log($('#pFirst'));
    
    var tekstParagrafuPierwszego =
    $("p.pFirst").text();
    console.log($("tekstParagrafuPierwszego"));
                
    $("p.pSecond").append(" <b>Hello world!</b>");
    
    
    
    
});

