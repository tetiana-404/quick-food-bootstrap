new ProductList(new Cart());

// Set the date we're counting down to
var countDownDate = new Date("Aug 1, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector(".action-price").innerHTML = days + " дн. " + hours + " год. "
  + minutes + " хв. " + seconds + " сек. ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value


let countOfPerson = slider.value;
const display = document.querySelector('.display');
let cateringEvent = document.getElementById('cateringEvent').index;
let a = document.getElementById("cateringEvent").selectedIndex;
let y = document.getElementById("cateringEvent").options;


document.querySelector("#catering-calc").addEventListener('click', cateringCalc);
document.querySelector("#cateringEvent").addEventListener('change', eventChange);

function cateringCalc() {
    if (y[a].index == 0) {
        display.innerHTML = countOfPerson*500 + " грн."; 
    } else 
    if (y[a].index == 1) {
        display.innerHTML = countOfPerson*1500 + " грн."; 
    } else {
        display.innerHTML = countOfPerson*750 + " грн."; 
    }
   document.querySelector(".calc-show").style.display = "block";
}

function eventChange() {
 a = document.getElementById("cateringEvent").selectedIndex;
 y = document.getElementById("cateringEvent").options;

}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  countOfPerson = this.value;
}

document.querySelector("#catering-order").addEventListener('click', cateringOrder);
const displayCatering = document.querySelector('#orderCateringModal .catering-info');
const dateCatering = document.querySelector("#birthday"); 
function cateringOrder() {
    displayCatering.innerHTML = `Ви зробили замовлення на послуги кейтерингу на ${countOfPerson} осіб, 
                                ${dateCatering.value}, подія: ${y[a].value}`;

}