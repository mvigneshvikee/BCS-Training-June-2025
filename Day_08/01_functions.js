function sum1(n1,n2){
    return n1 + n2
}

// Implicit return
const sum = (n1,n2) => n1 + n2

function dbl1(n){
    return n*2
}

// one parameter
// const dbl1 = n => n*2

function msg1(){
    return `Hello, Vijay`
}

// No Argument
const msg = ()=> "Hello, Vijay"

function sayHello (){
    return function(){
        console.log("Hello! 🥰")
    }
}

const x = ()=> sayHello()()

const sayHello1 = () => () => "Hello! 🥰" 
console.log(sayHello1()())
// sayHello()()

// lexical Scope and Own scope
function add1(x){
    return function(y){
        return x + y
    }
}

// F#, Haskell, Scala, Lisp these are functional programming languages
// Currying  ==> This concepts are use in functional programming
// Functional programming style (Praradigm)
// 1. Currying
// 2. Partial Application
// 3. Points-free style
const add = (x) => (y) => x + y
console.log(add(5)(9))


//map()

const nums = [10,20,40,]
nums.map(n => n*2)
console.log(nums)
