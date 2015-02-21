var response;
var req = new XMLHttpRequest();
var url = "http://iheartquotes.com/api/v1/random?format=json&source=oneliners+riddles+misc";

req.open('GET', url, false);
req.send();

response = JSON.parse(req.responseText);
if(response) {
   var msg = response.quote;
   Talk2Watch.sendSms(msg, "Quotes");
}
