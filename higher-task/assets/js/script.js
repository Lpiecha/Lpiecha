$("#btn").click(function(){
    'use strict';
   $.getJson("https://picsum.photos/list")
    .done(function(data){
       console.log(data);
   });
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
