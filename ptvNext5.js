function locationSuccess(pos) {
   var coordinates = pos.coords;
   next5(coordinates.latitude, coordinates.longitude);
}

function locationError(err) {
   Talk2Watch.sendSms("Couldn't get location :(", "Uh Oh");
}

function next5(lat, longitude) {
   var response;
   var req = new XMLHttpRequest();
   var url = "http://yeoji.com/t2w/ptv/next5?lat=" + lat + "&long=" + longitude;
   req.open('GET', url, true);

   req.onload = function(e) {
      if (req.readyState == 4) {
         if (req.status == 200) {
            response = JSON.parse(req.responseText);
            if (response) {
               for(var i=4; i>=0; i--) {
                  Talk2Watch.sendSms(response[i].line_name + "\n[" + response[i].destination_name + "]\n" + response[i].time_timetable_utc, response[i].location_name);
               }
            } else {
               Talk2Watch.sendSms("There are no train stations near you. Contact me and I'll see if I can change that ;)", "Sorry");
            }
         }
      }
   };

   req.send(null);
}

window.navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
