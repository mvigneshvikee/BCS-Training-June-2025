// Dision
// if... else
// Camelcase -- Naming Convention
//  var isRaining = true

//  if (isRaining){
//     console.log("Netflix and Chill")
//  }else{
//     console.log("Lets Play Cricket")
//  }

// Enter person1 name: Muthu
// Enter person2 name: Abishek
// Muthu tell me your height in cm: 186
// Abishek tell me your height in cm: 165

// Muthu is taller than Abhishek by 21cm

var name1 = window.prompt("Enter Person1 Name :");
var name2 = window.prompt("Enter Person2 Name :");
var person1Height = +window.prompt(`${name1} tell me your height in cm :`);
var person2Height = +window.prompt(`${name2} tell me your height in cm :`);
//var diff = Person1_height - Person2_height
var diff = Math.abs(person1Height - person2Height); // mode of x
var tallerName, shorterName; // Math. ceil , floor ,abs, random
var result;
if (person1Height > person2Height) {
  result = `${name1} is taller than ${name2} by ${diff}cm`;
} else if (person2Height > person1Height) {
  result = `${name2} is taller than ${name1} by ${diff}cm`;
  //  console.log(`${name2} is taller than ${name1} by ${result}cm`)
} else {
  result = `${name1} and ${name2} both are same height.`;
}
document.getElementById("output").textContent = result;
