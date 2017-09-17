'use strict';

//definicja funkcji ajax

function ajax(ajaxOptions) {
    var options = {
        httpMethod: ajaxOptions.type || "POST",
        url: ajaxOptions.url || "",
        onComplete: ajaxOptions.onComplete || function () {},
        onError: ajaxOptions.onError || function () {},
        onSucccess: ajaxOptions.onSucccess || function () {},
        dataType: ajaxOptions || "text"
    }

    var xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.open(options.httpMethod, options.url, true);

    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4) {
            if (httpSuccess(xmlHttpRequest)) {
                var returnData = (options.dataType == "xml") ? xmlHttpRequest.responseXML :
                    xmlHttpRequest.responseText;

                options.onSucccess(returnData);

                xmlHttpRequest = null;
            } else {
                options.onError(xmlHttpRequest.statusText);
            }
            options.onComplete(xmlHttpRequest);
        }
    }
    xmlHttpRequest.send();

    //    funkcja sprawdzajaca czy jest ok

    function httpSuccess(httpRequest) {
        try {
            return (httpRequest.status >= 200 &&
                httpRequest.status < 300 ||
                httpRequest.status == 304 ||
                navigator.userAgent.indexOf("Safari") >= 0 && typeof httpRequest.status ==
                "undefined");

        } catch (e) {
            return false;

        }
    }
}

function pobierzDane() {

    ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        onError: function (msg) {
            console.log(msg);
        },

        onSucccess: function (response) {
            //        dane są pobierane
            var jsonObj = JSON.parse(response);


            jsonObj.forEach(function (element) {

                var paragraphUserId = document.createElement("p");
                paragraphUserId.innerHTML = "User ID: " + element.id;
                document.body.appendChild(paragraphUserId);

                var paragraphUserName = document.createElement("p");
                paragraphUserName.innerHTML = "User Name: " + element.name;
                document.body.appendChild(paragraphUserName);

                var paragraphUserURL = document.createElement("p");
                paragraphUserURL.innerHTML = "User URL: " + element.website;
                document.body.appendChild(paragraphUserURL);


            });

            console.log(jsonObj);
        }
    });


};

pobierzDane();

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        pobierzDane();
    }
};