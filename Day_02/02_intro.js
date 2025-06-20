console.log("Hello World")


// Declaration
//Var  VarriableName = Value;

var name = " Vijay" // = " Vijay --- Assignment == Value 

// 
// overloaded operator ( + )
// "
// implicit conversion
console.log(5+ "9")  // concatination
console.log(5- "9")

// explicti conversion / coercion

console.log(5+ parseInt("9"))
console.log(5+ +"9.7")  // --> 5 + 9 = 14
console.log(5+ parseFloat("9.7"))    // --> 5 + 9 = 14.7
console.log(5- +"9.7")  // output -4.699999999999999 its called floating overflow


var x = 3
var y ="5"

console.log(x+y)
console.log(x+parseInt(y))
console.log(x- +y)


var g = {name: "vijay",
    age: 30,
    movies:{
        hitmovie: "master",
        flop: "sure"
    }
}
 console.log(g["name"])
 console.log(g["age"])
 console.log(g["movies"]["hitmovie"])
console.log(typeof(g))

console.log(4-"5a")  //--> result NaN ==> Not a Number its type was number  Infinity also a number 

// mathematical Operator

console.log(5+4)
console.log(5-4)
console.log(5*4)
console.log(5/4)
console.log(5%4) // --- Modulus 
console.log(5**4)

// relational Operator

// Equality Operator

console.log(5==5)

// NaN is only value not equal to itself 
var x1 = NaN
console.log(x1==x1)  // false

console.log(5 - "3s")

console.log(typeof(undefined)) // -- undefined returned string value

// Day_03 

// Relational operators  --> boolean
console.log(5>4)  // true
console.log(5>=4)// true
console.log(4<4)// false
console.log(4<=4)  // false
console.log(4==3)  // false ==>(comparison operator)
console.log(4!=3)  // true


// Logical operator  --> boolean
// && --> and onlywhen both are true
console.log("3. Logical oprators ")
console.log("And")
console.log(true && true )
console.log(true && false )
console.log(false && true )
console.log(false && false )

console.log((5>6) && (8<6))
console.log((10>=6) && (18<26))

console.log("Hello World")

// OR operator  ---> boolean

console.log("Or ||")
console.log(true||true) // true
console.log(true||false) //true
console.log(false||true) //true
console.log(false||false) // false

console.log((10>=6) || (18<26))  // true
console.log((5>6) || (8<6))  // false
console.log((1>=16) && (18<4) || (8!=0))  // true  --->false && false || true  ==> this type of cases we follow left to right way
  console.log(5/4+5*3-1)  //BODMOS theory
  console.log(5/(5+5)*(3-1))  //BODMOS theory

  // Not operator
  console.log(!true)  // false
  console.log(!false)  // true
  console.log(!!true)  // true

