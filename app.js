// This is a Trip Calculator 
/* It will ask how far you are driving?
* How much is gas per gallon?
* How big is the gas tank?
* What is the vehicle's mpg rating?
* How fast will you drive?
* What type of vehicle (Car or Truck)?
* It will OUTPUT "You are driving x amount of mile."
* "It will cost you y dollars."
* "You will need to stop to fill up your tank z amount of times."
* "Your true MPG is zz amount of miles."
*/

/*I got this code from someone else, but I wanted to actually go through it and
 * see how it worked!
*/

var prompt = require('sync-prompt').prompt;

//List of base variables for questions//

var dist = parseInt(prompt('How far are you travelling (in miles)? '));
var cog = parseFloat(prompt('How much does gas cost per gallon? '));
var tank = parseInt(prompt('How many gallons of fuel does your tank hold? '));
var mpg = parseInt(prompt('How many miles per gallon does your car get? ')).toFixed(2);
var speed = parseInt(prompt('How fast are you going to drive? '));
var auto = prompt('What vehicle will you drive (car or truck)? ').toLowerCase();

var mphOver55 = speed - 55;

var mpgOffset;
var effMpg;

//Mpg for Over 55mph

if(mphOver55 > 0){
  if(auto === 'car'){
    effMpg = mpg - mphOver55;
  }else if(auto === 'truck'){
    effMpg = mpg - (mphOver55 * 3);
  }else{
    console.log('Invalid vehicle');
    auto = 'truck';
    effMpg = mpg - (mphOver55 * 3);
  }
}else{
  effMpg = mpg;
}

// cannot get less than 10mpg//

effMpg = (effMpg >= 10) ? effMpg : 10;

var gallonsOfGas = dist / effMpg;

var totalCostOfGas = cog * gallonsOfGas;
var numberOfTanks = gallonsOfGas / tank;
var numberOfStops = Math.ceil(numberOfTanks);

console.log('To go ' + dist + ' miles in your ' + auto + ' will cost $' + 
totalCostOfGas.toFixed(2) + ' and take ' + numberOfTanks.toFixed(2) + ' tanks of gas.');

//Teacher's Code//

var distance = prompt('Distance (miles)? ');
var price = prompt('Gas Cost per Gallon? ');
var tank = prompt('Size of Tank (gallons)? ');
var mpg = prompt('Rated MPG? ');
var speed = prompt('Trip Speed (mph)? ');
var vehicle = prompt('Vehicle (car/truck)? ');

distance = parseInt(distance);
price = parseFloat(price);
tank = parseInt(tank);
mpg = parseInt(mpg);
speed = parseInt(speed);

if(speed > 55){
  var delta = speed - 55;
  
  if(vehicle === 'truck'){
    delta *= 3;
  }
      mpg -= delta;

    if(mpg < 10){
      mpg = 10;
    }
  }
  
  var gas = distance / mpg;
  var cost = gas * price;
  var stops = gas / tank;

  console.log('To drive ' + distance + ' miles, it will cost you $ ' + cost.toFixed(2) + ', and you will have to take ' + Math.ceil(stops) + ' stops.');
