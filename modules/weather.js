var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f';

module.exports = function (callback){
    request({
        url : url,
        json : true
    }, function(error,response,body) {
        if(error) {
            callback('Unable to fetch weather.');
        }else {
            callback('It\'s ' + body['main']['temp'] + ' in ' + body['name']);
        }
    });

};
