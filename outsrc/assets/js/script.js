 'use strict';

$(function() {


$(function () {

    $("#right-arrow-container>a img").on("click", function () {
        $("#slider-span").remove();
        $("h4").remove();
        $("h4").append("lorem lorem lorem");
        $("#slider-span").append("Milena Łuczak");
    });
    
	$("#left-arrow-container>a img").on("click", function() {
	$("#slider-span").remove();
        $("h4").remove();
        $("h4").append("lorem lorem lorem");
    $("#slider-span").append("Jan Kowalski");
    
    });
});