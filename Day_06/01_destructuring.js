// Nested Objects
const student = {
    name: "Abishek",
    age:20,
    address:{
        city: "thrichy",
        state:"TN"

    },
    hobbies: ["cricket","football","carrom"]
}

console.log(student.address.city);// thiruchy
console.log(typeof student.address);  // object 
console.log(student.address.state);// TN

// console.log(city)  // not defined

// Clue : Nested Destructuring

// 
const {address:{city}, hobbies:[,hobby]} = student

console.log(city)
console.log(hobby)

// const userData = {
//   id: 1,
//   name: 'Alice',
//   hobbies: ['reading', 'hiking', 'cooking']
// };

// // Destructuring the 'hobbies' array from the 'userData' object
// const { hobbies: [hobby1, hobby2, ...remainingHobbies] } = userData;

// console.log(hobby1); // Output: reading
// console.log(hobby2); // Output: hiking
// console.log(remainingHobbies); // Output: ["cooking"]


// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// ... Rest = collecting remaining values
// Rest = Spread  this is a beginner level understanding 
// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // Expected output: Array [30, 40, 50]


const book = {
    name: "harry porter",
    author: "J.K.Rowling",
    authorAge:45,
}

const details ={
    year: 2002,
    price: 1200,
    authorAge:55,
}

const fullDetails = {...book, ...details}  // Concat or Merge copy by values
console.log(fullDetails)

// Default Values  ==> Always keep a default value first in order.





