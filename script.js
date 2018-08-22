$(document).ready(function(){
    var lat;
    var long;
    var ctemp;
    var ftemp;
    var ktemp;
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        long = position.coords.longitude;
        lat = position.coords.latitude;
        
    var api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=bcca8fb11b99f08a27edbc829f93109b";
    $.getJSON(api, function(data){
      var weatherType = data.weather[0].description;
      ktemp = data.main.temp;
      var city = data.name;
      var humid = data.main.humidity;
      var tempswap = true;
     
      //Temp in Farhenheit 
      ftemp = (ktemp)*(9/5) - 479.67;
      ftemp = Math.round(ftemp);
      
      
      //Temp in Celcius
      ctemp = (ktemp) - 273;
      ctemp = Math.round(ctemp);
      $("#city").html("Location: " + city);
      $("#wtype").html("Weather Type:  " + weatherType);
      $("#celtemp").html("Temparature: " + ctemp + "&#8451");
      $("#celtemp").click(function(){
        if (tempswap === false){
           $("#celtemp").html("Temparature: " + ctemp + "&#8451");
          tempswap = true;
        }
        else {
          $("#celtemp").html("Temparature: " + ftemp + "&#8457");
          tempswap=false;
        }
        
        
  
      });
      $("#hmd").html("Humidity: " + humid);
            console.log(api);
    }); 
        
    });
    }
  });