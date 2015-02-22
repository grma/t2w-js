var response;
var req = new XMLHttpRequest();
var url = "http://yeoji.com/t2w/test";

req.open('GET', url, true);
req.onload = function(e) {

    if (req.readyState == 4) {
        if (req.status == 200) {
            response = JSON.parse(req.responseText);
            if (response) {
                Talk2Watch.sendSms(response.message, "Testing");
            }
        }
    }
};
req.send(null);
