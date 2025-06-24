// console.log("hello")

// Task 11     Broom Upgrade Cost

// var model = window.prompt("Enter the model name:")
// var price = +window.prompt("Enter the Price: ")

// var taxedPrice = parseInt(price * 1.10 )   // interest = (price/100) * 10

// console.log(`${model} will cost you ${price} Galleons ${taxedPrice}.`)

//========================================================================


// Task 12      Wizarding Menu Case Fixer


// var item = window.prompt("Enter your order").trim().toLowerCase()

// if ("butterbeer" == item || "pumpkin juice" == item){
//     console.log(`Your order ${item} is available.`)

// }else{
//     console.log(`Your order ${item} is not available.`)
// }


//========================================================================

// Task 13      Bug Fix: String Not Trimmed


// var name = "              Hermione ".toLowerCase().trim();

// console.log(name);

//======================================================================


// Task 14          Diagon Alley Store Hours


// var dayNumber = +window.prompt("Enter a Day number: ")

// var days = {
//     1:"Monday",
//     2:"Tuesday",
//     3:"Wednesday",
//     4:"Thursday",
//     5:"Friday",
//     6:"Saturday",
//     7:"Sunday",
// }

// if (dayNumber >= 1 && dayNumber <= 7){
//     var day = days[dayNumber]
//     if (day == "Sunday"){
//         console.log(`It's ${day}. Store is closed!`)
//     }
//     else{
//         console.log(`It's ${day}. Store is opened!`)

//     }
// }else{
//     console.log("Invalid input. Enter a valid number from 1 to 7.")
// }
//  way 2

var days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"]
var num = +window.prompt("Enter a Day number: ")
var day = days[Math.abs((num % 7) - 1 )]

if (day == "Sunday"){
    console.log(`It's ${day}. Store is closed!`)
}
else{
    console.log(`It's ${day}. Store is opened!`)
}
    

//======================================================================


//Task 15       Cauldron Temperature Check 


// var temperature = +window.prompt("Enter Temperature in °C: ")

// if (temperature < 60){
//     console.log("Temperature too Cold 🥶❄🧊")
// }else if (temperature > 100){
//     console.log("Temperature too hot! 🧪🔥🥵")

// }else{
//     console.log("Temperature just Normal 😊👍🌡")
// }

//======================================================================


// Task 16          Bug Fix: Area of Magic Circle 


// var radius = +window.prompt("Enter radius:");
// var area = 3.14 * radius ** 2;
// console.log(area);

//======================================================================


// Task 17          Predict Output: Logic Mix 


// console.log((7 > 5 && 2 < 1) || 8 != 0);

// the answer is true. Use BODMAS theory. inside the Bracket (7 > 5 ) = true. (2<1)= false . (8 != 0) = true. 
// So, the final result ( true && false || true )= true

//======================================================================


// Task 18          DRY Refactor: Ingredient Stock Checker


// var input = window.prompt("Enter an Ingredient: ").trim().toLowerCase()

// if (input == "eye of newt" || input == "bat wing" || input == "toad slime" || input == "mandrake root"){
//     console.log(`${input} is in Stock!😊 `)
// }else{
//     console.log(`Sorry, no ${input} available right now.😥`)
// }

//======================================================================

// Task 19          Spell Strength Evaluator

// var spell = window.prompt("Enter a Spell Name: ").trim()
// var power = +window.prompt("Enter a Power of Spell: ")

// if (power >= 90)
// {
//     console.log(`${spell} is an Legendary 😱💀😈🔥🔥🔥 spell.`)
// }else if (power < 60)
// {
//     console.log(`${spell} is an Basic 😥😢👎 spell.`)

// }else{
//     console.log(`${spell} is an Advanced 😎💪🎆 spell.`)

// }


//======================================================================


// Task 20          Final Task: Hogwarts ID Generator


var idName = window.prompt("Enter Your Name: ").trim().toLowerCase()

console.log(`${idName}@hogwarts.com`)