var response;
var req = new XMLHttpRequest();
var url = "http://iheartquotes.com/api/v1/random?format=json&source=oneliners+riddles+misc";

req.open('GET', url, true);
req.send();

req.onload = function(e) {

   if (req.readyState == 4) {
      if (req.status == 200) {
         response = JSON.parse(req.responseText);
         if (response) {
            var msg = response.quote;
            Talk2Watch.sendSms(msg, "Quotes");
         }
      }
   }
};
req.send(null);
