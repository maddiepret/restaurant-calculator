//create drink obj
let drinkMenu = [
    { name: "Coke", price: 25 },
    { name: "Sparkling water", price: 20 },
    { name: "Tropical Juice", price: 22 },
    { name: "Ginger beer", price: 18 },
    { name: "Appletizer", price: 27 }
];
//create function that runs a switch statement between objects
function drinkFunction() {
    let text;
    let text2;
    //promp user what they would like to drink - add options
    let favDrink = prompt(`What would you like to drink? \nWe have: ${drinkMenu[0].name}, ${drinkMenu[1].name}, ${drinkMenu[2].name}, ${drinkMenu[3].name} and ${drinkMenu[4].name}`, "Coke");
    switch (favDrink) {
        case drinkMenu[0].name:
            text = drinkMenu[0].price;
            break;
        case drinkMenu[1].name:
            text = drinkMenu[1].price;
            break;
        case drinkMenu[2].name:
            text = drinkMenu[2].price;
            break;
        case drinkMenu[3].name:
            text = drinkMenu[3].price;
            break;
        case drinkMenu[4].name:
            text = drinkMenu[4].price;
            break;
        default:
            text = "Unfortuanetly we are all out..";
    }
    document.getElementById("selectedDrink").innerHTML = "R " + text.toFixed(2);
    //add user option in html
}
//create function if user does not want anything
function noThanks() {
    let message = 0;
    document.getElementById("selectedDrink").innerHTML = "R " + message.toFixed(2);
}

//create food obj

let foodMenu = [
    { name: "Burger", price: 95 },
    { name: "Greek salad", price: 70 },
    { name: "Salmon", price: 120 },
    { name: "Pizza", price: 80 },
    { name: "Nachos", price: 75 }
];
//create function that runs a switch statement between objects

function foodFunction() {
    let text;
    //promp user what they would like to eat - add options

    let favFood = prompt(`What would you like to eat? \nWe have: ${foodMenu[0].name}, ${foodMenu[1].name}, ${foodMenu[2].name}, ${foodMenu[3].name} and ${foodMenu[4].name}`, "Burger");
    switch (favFood) {
        case foodMenu[0].name:
            text = foodMenu[0].price;
            break;
        case foodMenu[1].name:
            text = foodMenu[1].price;
            break;
        case foodMenu[2].name:
            text = foodMenu[2].price;
            break;
        case foodMenu[3].name:
            text = foodMenu[3].price;
            break;
        case foodMenu[4].name:
            text = foodMenu[4].price;
            break;
        default:
            text = "Unfortuanetly we are all out..";
    }
    //add user option in html
    document.getElementById("selectedFood").innerHTML = "R " + text.toFixed(2);
}
//create function if user does not want anything

function noThanksFood() {
    let message = 0;
    document.getElementById("selectedFood").innerHTML = "R " + message.toFixed(2);
}
//create function for tip
function calculateTip() {
    let getATip = prompt("Would you like to add a tip?");
    //if(getATip.typeof != number){
    //   prompt("That is not a number. Please try again")
    document.getElementById("selectTip").innerHTML = "R" + getATip;
}
//function for no tip
function noTip() {
    let noTips = 0;
    document.getElementById("selectTip").innerHTML = "R " + noTips.toFixed(2);
}


//create function to calculate user selection total

function total() {
    let getDrinkInput = document.getElementById("selectedDrink").innerHTML;
    let getFoodInput = document.getElementById("selectedFood").innerHTML;
    let getTipInput = document.getElementById("selectTip").innerHTML;
    let makeTipANumber = parseFloat(getTipInput.substring(1));
    let makeDrinkANumber = parseFloat(getDrinkInput.substring(1))
    let makeFoodANumber = parseFloat(getFoodInput.substring(1))
    let getTotal = (makeDrinkANumber + makeFoodANumber + makeTipANumber);
    document.getElementById("totalPrice").innerHTML = "R " + getTotal.toFixed(2);
    let popUp = alert("R " + getTotal.toFixed(2));
}