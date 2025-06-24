var english = 70
var maths = 90
var science = 97
var social = 80
 

// Group similar things together 

  var marks =[70, 90, 97, 80]

  console.log(marks)
  console.log(typeof(marks))  // Array is object datatype
  
  console.log(marks.length)


  // Index

  console.log(marks[0])
  console.log(marks[1])
  console.log(marks[2])
  console.log(marks[3])
  console.log(marks[4])   // undefined

  /// undefined vs not defined 

  var x;
  console.log(x)   //  undefined is a value
  // Not Declared 
  //console.log(y)   // Not defined is a Error

  // Array --Groups of same data types
//  Index --- value
// in array key --> index
  //  Object -- Group of different data types
//  key - value 


// access the values
// 1. Dot Syntax 
// 2. Box Syntax

var student = {
    name : "Arjuna",
    age : 20,
    college : "SAC",
    isRich : true,
    "personal hobbies" : ["Hockey","Cricket", "Traveling"]
}

console.log(student)
console.log(student.college)   // Dot Syntax
console.log(student["college"])  // Box Syntax when we use box syntax? if key have a space we go to box syntax. key contains space

// 
console.log(student["personal hobbies"][1])
console.log(student["personal hobbies"][0])
console.log(student["personal hobbies"][2])

