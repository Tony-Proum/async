/**
 * Created by Tony Proum.
 */
var weather = require('./modules/weather.js');
var location = require('./modules/location.js');

weather(function(currentWeather) {
    console.log(currentWeather)
});

location(function(currentLocation) {
    if(!currentLocation){
        console.log('Unable to guess location');
        return;
    }
    console.log('city :' + currentLocation.city);
    console.log('long/lat:' + currentLocation.loc);
});