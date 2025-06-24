// Task 01  Wand Selection
// var wand = window.prompt("What is your wand core?")
// console.log(wand.toLowerCase())
// console.log(wand.toUpperCase())

// =================================================================================


// Task 02  Age Spell

// var age = +window.prompt("Enter your age:")
 
// if (age >= 11){
//     console.log("Welcome to Hogwarts! 🦉")
// }else{
//     console.log("You're a bit too young for Hogwarts, try again later. 👶")
// }

//=====================================================================================

// Task 03  Convert Galleons to Knuts

// var galleons = + window.prompt("Enter Galleons: ")
// console.log(`${galleons} Galleons = ${galleons * 493} Knuts`)

//====================================================================================


// Task 04   Secret Chamber Password Check 

// var chamberCode = "alohomora"
// var password = window.prompt("Speak the password: ").trim().toLowerCase();

// if (chamberCode == password){
//     console.log("Access granted to the Chamber of Secrets.")
// }else{
//     console.log("Incorrect password. 🐍")
// }


//=====================================================================================

//Task 05    Sorting Hat 


// var traitsHouses = {
//   bravery: "Gryffindor",
//   wisdom: "Ravenclaw",
//   loyalty: "Hufflepuff",
//   ambition: "Slytherin"
// };

// var trait = prompt("What quality do you value most?").toLowerCase().trim();

// // || "Squib" : This is the Logical OR Operator. if the left side returns a falsy value like undefined ( Which happens if the trait isn't in the object), then thr right hand value "Squib" is used instead.


// var house = traitsHouses[trait] || "Squib"
// console.log(`You belong to ${house} house!`)


//==========================================================================================


// Task 06   Who’s Taller: Hagrid or Dobby?

// var hagridHeight = +window.prompt("Enter a Hagrid Height: ")
// var dobbyHeight = +window.prompt("Enter a Dobby Height: ")

// var diff = Math.abs(hagridHeight - dobbyHeight)

// if (diff == 0){
//     console.log(`Both are the same height!`)
// }else if(hagridHeight > dobbyHeight){
//     console.log(`Hagrid is taller than Dobby by ${diff}cm`)
// }else{
//         console.log(`Dobby is taller than Hagrid by ${diff}cm`)
// }

//=========================================================================================

// Task 07    Quidditch Score Calculator

// var goals = +window.prompt("How many Goals your team Scored: ")
// var snitches = +window.prompt("How many Snitches your team caught: ")

// var score = (goals * 10) + (snitches * 150)

// if (score >= 200){
//     console.log(`You scored ${score} points and won the match! 🧹🏆`)
// }else{
//     console.log(`You scored ${score} points. Better luck next time!`)
// }

//=========================================================================================


// Task 08     House Points Formatter


// console.log("Gryffindor".padStart(15));
// console.log("Ravenclaw".padStart(15));
// console.log("Hufflepuff".padStart(15));
// console.log("Slytherin".padStart(15));


//=======================================================================================


// Task 09        Inventory Padlock 


// var num = +window.prompt("Enter Your Vault Number: ")

// if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5){
//     console.log(`Access to Vault ${num} granted`)
// }else{
//     console.log("Invalid vault number.")
// }

// ======================================================================================


// Task 10      Magical Echo 


console.log("Expecto Patronum \n".repeat(7));
console.log("Finite Incantatem \n".repeat(7));
console.log("Wingardium Leviosa \n".repeat(7));
console.log("Lumos \n".repeat(7)); 

// =====================================================================================