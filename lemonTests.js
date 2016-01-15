function buySupplies(inventory, startingCash){
    stockAsk = prompt("Do you want want to buy supplies? Y or N?" )
    if(stockAsk === 'Y' || stockAsk === 'y'){
        var whatStockAsk = prompt("Which supply do you want to buy: cups, lemons, sugar or ice cubes?");
        var lowerStockAsk = whatStockAsk.toLowerCase;
            if(lowerStockAsk === 'cups'){
                cupsAsk = prompt("How many cups would you like to buy? Cups cost " + cupPrice + " cents each.");
                var buyCups = cupsAsk * cupPrice;
                console.log("You bought " + cupsAsk + ". Total cost: " + buyCups);
            }else if(lowerStockAsk === 'lemons'){
                lemonsAsk = prompt("How many lemons would you like to buy? Lemons cost " + lemonPrice + " cents each.");
                console.log("You bought " + lemonsAsk + " lemons.");
            }else if(lowerStockAsk === 'sugar'){
                sugarAsk = prompt("How many cups of sugar would you like to buy? Each cup costs " + sugarPrice + " cents.");
                console.log("You bought " + sugarAsk + " cups of sugar.");
            }else if(lowerStockAsk === 'ice cubes'){
                iceCubeAsk = prompt("How many ice cubes do you want to buy? Ice cubes cost " + iceCubePrice + " for fifteen cubes.");
                console.log("You bought " + iceCubeAsk + " ice cubes.");
    }if(lowerStockAsk === 'N' || stockAsk === 'n'){
        console.log("O.K. No supplies are needed");
    }
}    





function inventory(buySupplies){

var stockAmount = [];
for(var ingredient = 0; ingredient< 4; ingredient++){
    var purchasedStuff = stockAmount[ingredient] + buySupplies[ingredient];
    
    console.log("You have  ", purchasedStuff[ingredient], " of ", myStock[ingredient]  )
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
function inventory(buySupplies){
var myStock = ["cups", "lemons", "sugar", "ice cubes"];
var stockAmount = [];
for(var ingredient = 0; ingredient< 4; ingredient++){
    var purchasedStuff = stockAmount[index] + buyStuff[index];
    
    console.log("You have  ", stockAmount[index], " of ", myStock[]  )
}
*/







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
    


