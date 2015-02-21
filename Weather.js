var response;
var req = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au";

req.open('GET', url, true);
req.onload = function(e) {

    if (req.readyState == 4) {
        if (req.status == 200) {
            response = JSON.parse(req.responseText);
            var temperature;
            if (response) {
                var temp = response.main.temp;
                temperature = Math.round(temp - 273.15);

                Talk2Watch.sendSms(temperature + " C", "Weather in " + response.name);
            }
        }
    }
};
req.send(null);
