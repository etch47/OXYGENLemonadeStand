//wholesale with variable prices
//weather system, predict weather, weather affects sales
//player decides price
//price affects sales


// glasses sold = Temperature divided by Price

// create days of week array

var day = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var weather = ["Sunny","Cloudy","Raining"];
var highTemp = 100;
var lowTemp = 60;
var tempToday = [];
var servingCost = 0.75;

var cups = 0;
var lemons = 0;
var sugar = 0;
var ice = 0
var cupPrice = .15;
var lemonPrice = .25;
var sugarPrice = .20;
var icePrice = .15;






function buyMoreCups(buyCups){
    document.getElementById("buyCupsList").classList.toggle("show");
    window.onclick = function(event){
        if (!event.target.matches('.dropbtn')){
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for(i = 0; i< dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')){
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}
    










makeWeather();





function makeWeather(){
    var todaysForecast;
    var todaysTemp;
    for (var temp = 0; temp < day.length; temp++) {
         todaysWeather = weather[Math.floor(Math.random() * weather.length)];
         todaysTemp = Math.floor(Math.random() * (highTemp - lowTemp) + lowTemp);
         tempToday[temp] = todaysTemp;
         console.log("On " + day[temp] +" the weather will be " + todaysWeather + " and " + todaysTemp)
         } 
}



















