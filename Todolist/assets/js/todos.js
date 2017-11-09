  'use strict';

$("li").click(function(){
$(this).toggleClass("completed");
});

$("span").click(function(event){
    
event.stopPropagation();
});
    
