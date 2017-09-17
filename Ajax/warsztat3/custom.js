'use strict';
/*definicja funkcji ajax*/
function ajax(ajaxOptions) {

    var options = {
        httpMethod: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions || "text"
    }
    var xmlHttpRaquest = new XMLHttpRequest();

    xmlHttpRaquest.open(options.httpMethod, options.url, true);

    xmlHttpRaquest.onreadystatechange = function () {
        if (xmlHttpRaquest.readyState == 4) {
            if (httpSuccess(xmlHttpRaquest)) {
                var returnData = (options.dataType == "xml") ? xmlHttpRequest.responseXML :
                    xmlHttpRaquest.responseText;

                options.onSuccess(returnData);
                xmlHttpRaquest = null;
            } else {
                options.onError(xmlHttpRaquest.statusText);
            }
            options.onComplete(xmlHttpRaquest);

            
        }
    }
    xmlHttpRaquest.send();
    /*funkcja sprawdzająca czy jest OK*/
    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 &&
                httpRequest.status < 300 ||
                httpRequest.status == 304 ||
                (navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status == "undefined"));
        } catch (e) {
            return false;
        }
    }
    
};

'use strict';
function pobierzDane(){
$(document).ready(function() {
    
    $( "button" ).click( function() {
        
    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
        
    console.log(data);
    
   $("body").append("<p>User ID: "+ data.userId+"</p>");    
   $("body").append("<p>User Name: "+ data.userName+"</p>");    
   $("body").append("<p>User URL: "+ data.userURL+"</p>");          
    
} );
} );
});
}