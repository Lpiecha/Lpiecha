'use strict'

// definicja funkcji ajax
function ajax( ajaxOptions) {
    'use strict';
    var options = {
        httpMethod : ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function ()
        {},
        onError: ajaxOptions.onError || function () {},
        onSuccess: ajaxOptions.onSuccess || function () {},
        dataType: ajaxOptions || "text"
    }

var XMLHttpRequest = new XMLHttpRequest(); 
    
    // funkcja sprawdzającą czy jest ok
    
    xmlHttpRequest.open(options.httpMethod, options.url,true);
    
    XMLHttpRequest.onreadystatechange = function(){
        if(xmlHttpRequest.readyState == 4){
            if(httpSuccess(xmlHttpRequest)) {
                var returnData = (options.dataType == "xml") ? xmlHttpRequest.responseXML : 
                xmlHttpRequest.responseText ;
                
                options.onSuccess(returnData);
                
                XMLHttpRequest = null;
                
            } else {
                options.onError(xmlHttpRequest.statusText);
            }
            options.onComplete(xmlHttpRequest);
        }
    }
    
    xmlHttpRequest.send();
    
    // funkcja sprawdzającączy jest ok
    function httpSuccess (httpRequest) {
        try{
            return(httpRequest.status >= 200 &&
            httpRequest.status < 300 ||
            httpRequest.status == 304 ||
                  navigator.userAgent.indexOf("Safari")>= 
                   0 && typeof httpRequest.status == "undefined"));
        } catch(e) {
            return false;
            
        }
    }
    
};
