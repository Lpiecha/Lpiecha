//  'use strict';
//$("#right-arrow-container>a img").addClass("active");
//
//function slide(target) {
'use strict';
//  
//  $("#indicators li").removeClass("active").eq(target).addClass("active");
//}
//
//$("#right-arrow-container>a img").click(function() {
//  var target = $(this).index();
//  slide(target);
//
//  clearInterval(timer);
//  //Then started auto slide again
//  timer = setInterval(function() {
//    $('#right-arrow-container>a img').trigger('click');
//  }, 2500);
//
//});
//
//$("#right-arrow-container>a img").click(function() {
//  var target = $("#indicators li.active").index();
//  if (target === $("#indicators li").length - 1) {
//    target = -1;
//  }
//  target = target + 1
//  slide(target);
//
//  //Stopped auto slide when user clicked
//  clearInterval(timer);
//  //Then started auto slide again
//  timer = setInterval(function() {
//    $('#next').trigger('click');
//  }, 2500);
//
//});
//
//$("#left-arrow-container>a img").click(function() {
//  var target = $("#indicators li.active").index();
//  if (target === 0) {
//    target = $("#indicators li").length;
//  }
//  target = target - 1;
//  slide(target);
//
//
//  clearInterval(timer);
//  //Then started auto slide again
//  timer = setInterval(function() {
//    $('#next').trigger('click');
//  }, 2500);
//
//});




$(function () {

    $("#right-arrow-container>a img").on("click", function () {
        $("#slider-span").remove("Marika Jóźwik");
        $("#slider-span").html("Milena Łuczak");
        
//        $("h4").remove("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate deserunt, nobis distinctio fugit magnam excepturi deleniti.");
        
//        $("h4").append("test test test");
    });
    
    $("#right-arrow-container>a img").on("click", function () {
        $("h4").remove();
         $("h4").html("test test test");
    });
        
    
	$("#left-arrow-container>a img").on("click", function() {
	$("#slider-span").remove("Milena Łuczak");
        $("#slider-span").html("Jan Kowalski");
//        $("h4").remove();
        $("h4").append("lorem lorem lorem");
    
    });
});