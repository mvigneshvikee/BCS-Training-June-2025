var temprature = window.prompt("Enter a Temprature in celsius333");

// Formula fahrenheit = (cesius * 9/5) + 32
var fahrenheit = temprature * (9 / 5) + 32;

console.log("The temprature in Fahrenheit is " + fahrenheit);
console.log("The " + temprature + "°C is " + fahrenheit + "°F.");

console.log(`${temprature}°C is ${fahrenheit}°F`); //30°C is 86°F

console.log("hiii"); //30°C is 86°F

//ecmascript 6 / es6   interpolation (substitution) ==${}. Supports multi-line  Interpolation  ===> Expression-returns value
// es6 template literal ==> `` back tick. inside the back tick we use  interpolation

// Find area of circle given radius
// Enter the radius
// // The Area for given 2cm radius is 12.56cm²

// var Radi = window.prompt("Enter a Radius Value")
// var areas = (Radi * Radi) * 3.14159

// console.log(`The Area for given ${Radi}cm radius is ${areas}cm²`)
