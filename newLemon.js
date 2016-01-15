

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





function buyCups(numberOfCups){
    inventory.cups += numberOfCups;
    console.log("You currently have " + numberOfCups + " cups");
}
function buyLemons(numberOfLemons){
    inventory.lemons += numberOfLemons;
    console.log("You currently have " + numberOfLemons + " Lemons");
}
function buySugar(numberOfSugar){
    inventory.sugar += numberOfSugar;
    console.log("You currently have " + numberOfSugar + " cups of sugar");
}
function buyIceCubes(numberOfIceCubes){
    inventory.iceCubes += numberOfIceCubes;
    console.log("You currently have " + numberOfIceCubes + " Ice Cubes");
}

buySupplies();

function doneBuying(){
    var verifySale;
    verifySale = prompt("Are you finished buying supplies? Y or N");
    if(verifySale === 'N' || verifySale === 'n'){
        buySupplies();
    }else{
        console.log("O.K. You are finished buying supplies");        
    }
}




function buySupplies(){
    stockAsk = prompt("Do you want want to buy supplies? Y or N?" )
    if(stockAsk === 'N' || stockAsk === 'n'){
        console.log("O.K. No supplies are needed");
    }else if(stockAsk === 'Y' || stockAsk === 'y'){
        var whatStockAsk = prompt("Which supply do you want to buy: cups, lemons, sugar or ice cubes?");
        if(whatStockAsk === 'cups'){
            var cupsAsk;
            cupsAsk = prompt("How many cups would you like to buy? Cups cost " + cupPrice + " cents each.");
            var boughtCups;
            boughtCups = cupsAsk * cupPrice;  
            console.log("You bought " + cupsAsk + " cups. Total cost: " + boughtCups);
            buyCups(cupsAsk);
            doneBuying();
        }else if(whatStockAsk === 'lemons'){
            var lemonsAsk;
            lemonsAsk = prompt("How many lemons would you like to buy? Lemons cost " + lemonPrice + " cents each.");
            var boughtLemons;            
            boughtLemons = lemonsAsk * lemonPrice;
            console.log("You bought " + lemonsAsk + " lemons. Total cost:" + boughtLemons);
            buyLemons(lemonsAsk);
            doneBuying();
        }else if(whatStockAsk === 'sugar'){
            var sugarAsk;
            sugarAsk = prompt("How many cups of sugar would you like to buy? Each cup costs " + sugarPrice + " cents.");
            var boughtSugar;
            boughtSugar = sugarAsk * sugarPrice;
            console.log("You bought " + sugarAsk + " cups of sugar. Total cost:" + boughtSugar);
            buySugar(sugarAsk);
            doneBuying();
        }else if(whatStockAsk === 'ice cubes'){
            var iceCubeAsk;
            iceCubeAsk = prompt("How many ice cubes do you want to buy? Ice cubes cost " + iceCubePrice + " for fifteen cubes.");
            var boughtIceCubes;
            boughtIceCubes = iceCubeAsk * iceCubePrice;
            console.log("You bought " + iceCubeAsk + " ice cubes. Total cost:" + boughtIceCubes);
            buyIceCubes(iceCubeAsk);
            doneBuying();   
        }
    }    
}












var day = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
var weather = ["Sunny","Cloudy","Raining"];
var highTemp = 100;
var lowTemp = 60;
var tempToday = [];




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

makeWeather();


