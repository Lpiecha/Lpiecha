 'use strict';

$("#btn").click(function(){
   
   $.get("https://picsum.photos/list")
    
    
    .done(function(data){
       console.log(data[0].post_url);
       $("#img-1").attr("src", data[0].post_url);
       $("#img-2").attr("src", data[1].post_url);
       $("#img-3").attr("src", data[2].post_url);
      
   })
    .fail(function(){
       alert("Something went wrong");
   })
});

//'use strict';
//var url = 'https://picsum.photos/list';
//var photo = document.querySelector(".photo");
//
//var btn = document.querySelector("#btn");
//btn.addEventListener("click", function(){
//
//    fetch(url)
//    .then(function(res){
//        console.log(res);
//        console.log("PARSING!!!");
//        return res.json();
//    })
//    .then(function(data){
////        photo.src = data[0].post_url;
//        console.log(data);
//        
//    })
//    .catch(function(err){
//        console.log(err);
//    })
//});
