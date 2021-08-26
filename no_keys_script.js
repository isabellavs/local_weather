console.log('hello')

// weather api key "7c76b01e76f04ec0404f9de2c4501da7"

// url https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// Where I am. Get your's from Google Maps
// lat -25.70641497531349, long 28.238740372310847

// check here to see how call is to be structured:
// https://openweathermap.org/api/one-call-api

$.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=-25.70&lon=28.23&exclude=minutely&units=metric&appid=your_own_key_from_openweathermap",
    function(data) {
        console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
        var temp = Math.floor(data.current.temp);
        var weather = data.current.weather[0].main;

        $('.icon').attr('src', icon);
        $('.temp').append(temp);
        $('.weather').append(weather);    
    });
