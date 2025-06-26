// Multiple ways to declare a variable

// var name = "Gopi"
// var name = "Muthu"  // Redeclare


var student = {
    name : "Arjuna",
    age : 20,
    college : "SAC",
    isRich : true,
    "personal hobbies" : ["Hockey","Cricket", "Traveling"]
}


student["personal hobbies"].push("Swimming")
console.log(student)


// Copy by value 
// ... Spread 

const z1 = [100,200]
const z2 = [... z1]  // copy by value
const z3 = z1  // copy by Reference Interlink


console.log(z1 == z2)  // false 
console.log(z1 == z3)  // true   Interlink 

const z4 = [100,70, ...z1,50,40] // 100,70,100,200,50,40

const r1 = [100, 400]
const r2 = [700, 900]
const r3 =[...r1, ...r2]  // Concat or Merge

console.log(r3)

// Types of Functions

//  Arrow function 
