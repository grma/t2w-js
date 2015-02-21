var req = new XMLHttpRequest();
var url = "http://www.iheartquotes.com/api/v1/random?format=json&source=oneliners+riddles+misc";

req.open('GET', url, false);
req.send();

var response = JSON.parse(req.responseText);
var msg = response.quote;
Talk2Watch.sendSms(msg, "Quotes");
