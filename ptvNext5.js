function locationSuccess(pos) {
   var coordinates = pos.coords;
   Talk2Watch.sendSms(coordinates.latitude, coordinates.longitude);
   next5(coordinates.latitude, coordinates.longitude);
}

function locationError(err) {
   Talk2Watch.sendSms("Couldn't get location :(", "Uh Oh");
}

function next5(lat, longitude) {
   var response;
   var req = new XMLHttpRequest();
   var url = "http://yeoji.com/t2w/ptv/next5?lat=" + lat + "&long=" + longitude;
   Talk2Watch.sendSms(url, "test");
   req.open('GET', url, true);

   req.onload = function(e) {
      if (req.readyState == 4) {
         if (req.status == 200) {
            response = JSON.parse(req.responseText);
            if (response) {
               for(var i=4; i>=0; i--) {
                  Talk2Watch.sendSms(response[i].line_name + "\n[" + response[i].destination_name + "]\n" + response[i].time_timetable_utc, response[i].location_name);
               }
            }
         }
      }
   };

   req.send(null);
}

window.navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
