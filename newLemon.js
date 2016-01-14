"use strict";

var startingCash = 20.00;
var servingCost = 0.75;

var cupPrice = .15 / 10;
var lemonPrice = .25;
var sugarPrice = .20;
var iceCubePrice = .15 / 10;


var inventory = {
    cups: 0,
    lemons: 0,
    sugar: 0,
    iceCubes: 0
    
};

var stockPrice = [1,2,3,4];

/*
function inventory(buySupplies){
var myStock = ["cups", "lemons", "sugar", "ice cubes"];
var stockAmount = [];
for(var ingredient = 0; ingredient< 4; ingredient++){
    var purchasedStuff = stockAmount[index] + buyStuff[index];
    
    console.log("You have  ", stockAmount[index], " of ", myStock[]  )
}
*/











 

function buySupplies(inventory, startingCash){
    stockAsk = prompt("Do you want want to buy supplies? Y or N?" )
    if(stockAsk === 'Y' || stockAsk === 'y'){
        var whatStockAsk = prompt("Which supply do you want to buy: cups, lemons, sugar or ice cubes?");
        var lowerStockAsk = whatStockAsk.toLowerCase;
            if(lowerStockAsk === 'cups'){
                cupsAsk = prompt("How many cups would you like to buy? Cups cost " + cupPrice + " cents each.");
                var boughtCups = cupsAsk * cupPrice;
                /* how do I pass this to inventory */
                console.log("You bought " + cupsAsk + ". Total cost: " + boughtCups);
            }else if(lowerStockAsk === 'lemons'){
                lemonsAsk = prompt("How many lemons would you like to buy? Lemons cost " + lemonPrice + " cents each.");
                var boughtLemons = lemonsAsk * lemonPrice;
                console.log("You bought " + lemonsAsk + ". Total cost:" + boughtLemons);
            }else if(lowerStockAsk === 'sugar'){
                sugarAsk = prompt("How many cups of sugar would you like to buy? Each cup costs " + sugarPrice + " cents.");
                var boughtSugar = sugarAsk * sugarPrice;
                console.log("You bought " + sugarAsk + " cups of sugar. Total cost:" + boughtSugar);
            }else if(lowerStockAsk === 'ice cubes'){
                iceCubeAsk = prompt("How many ice cubes do you want to buy? Ice cubes cost " + iceCubePrice + " for fifteen cubes.");
                var boughtIceCubes = iceCubeAsk * iceCubePrice;
                console.log("You bought " + iceCubeAsk + " ice cubes. Total cost:" + boughtIceCubes);
    }if(lowerStockAsk === 'N' || stockAsk === 'n'){
        console.log("O.K. No supplies are needed");
    }
}    


function inventory(buySupplies){
var myStock = ["cups", "lemons", "sugar", "ice cubes"];
var stockAmount = [];
for(var ingredient = 0; ingredient< 4; ingredient++){
    var purchasedStuff = stockAmount[ingredient] + buySupplies[ingredient];
    
    console.log("You have  ", purchasedStuff[ingredient], " of ", myStock[ingredient]  )
    }
}






/*
function buySupplies(){
    stockAsk = prompt("Do you want want to buy supplies? Y or N?" )
    if(stockAsk === 'Y' || stockAsk === 'y'){
        var whatStockAsk = prompt("Which supply do you want to buy: cups, lemons, sugar or ice cubes?");
        switch(whatStockAsk){
            case 'cups':
                cupsAsk = prompt("How many cups would you like to buy? Cups cost " + cupPrice + " cents each.");
                var buyCups = cupsAsk * cupPrice;
                console.log("You bought " + cupsAsk + ". Total cost: " + buyCups);
                break;
            case 'lemons':
                lemonsAsk = prompt("How many lemons would you like to buy? Lemons cost " + lemonPrice + " cents each.");
                console.log("You bought " + lemonsAsk + " lemons.");
                break;
            case 'sugar':
                sugarAsk = prompt("How many cups of sugar would you like to buy? Each cup costs " + sugarPrice + " cents.");
                console.log("You bought " + sugarAsk + " cups of sugar.");
                break;
            case 'ice cubes':
                iceCubeAsk = prompt("How many ice cubes do you want to buy? Ice cubes cost " + iceCubePrice + " for fifteen cubes.");
                console.log("You bought " + iceCubeAsk + " ice cubes.");
               break;
        }
    }else if(stockAsk === 'N' || stockAsk === 'n'){
        console.log("O.K. No supplies are needed");
    }
}    

 
   








function makeWeather(){
    var day = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
    var weather = ["Sunny","Cloudy","Raining"];
    var highTemp = 100;
    var lowTemp = 60;
    var tempToday = [];
    var todaysForecast;
    var todaysTemp;
    for (var temp = 0; temp < day.length; temp++) {
         todaysWeather = weather[Math.floor(Math.random() * weather.length)];
         todaysTemp = Math.floor(Math.random() * (highTemp - lowTemp) + lowTemp);
         tempToday[temp] = todaysTemp;
         console.log("On " + day[temp] +" the weather will be " + todaysWeather + " and " + todaysTemp)
         } 
}

makeWeather();
buySupplies(inventory);

*/