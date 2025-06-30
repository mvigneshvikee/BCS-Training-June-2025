# Functional Programming 
---
- Functional progrmming is a paradign where we builk our programs using *pure functions*, **avoiding shared state, mutable data, and side effects**. 
- It can make your code cleaner and more efficient.
---
### Shared State 
- A **shared state** refers to any variable or data structure that is accessible and can be modified by multiple parts of a program-- such as different functions, objects, modules, or components.

```js 
let counter = 0;
function increment(){
    counter++;
}
function logCounter(){
    console.log(counter);
}
```

---

## principle of Function Programming 

 > 1. Pure Function
 > 2. Immutability
 > 3. Higher-Order Function
 > 4. First-Class Function
 > 5. Declarative approach


---

### Pure Function

 1. **Given the same inputs, it always returns the same output**.
 2. It does not produce side effects. That means no changing external variables, modifying objects, logging to the console, or performing DOM operations.


```js 
// Pure Funciton
const add = (a, b) => a + b;
console.log(add(2,3))  // 5
console.log(add(2,3)) // 5 - always the same result for the same inputs

// Non Pure Funciton
var addNew = 0;
functio add(a, b){
    addNew =1;
     return a+b + addNew;
}
console.log(add(4,5));
```
---
### Immutability

- Data isn't modified - Instead, new data is returned.

```js 
const originalArray = [1,2,3]
const newArray = originalArray.concat(4);
console.log(originalArray); // original array remains unchanged 
console.log(newArray);  // new array with added element

```
---

### Higher-Order Function

- Functions that take other functions as arguments or return them.

```js
const great = () => console.log("Hello, World");
const repeat = (fn, times) => {
    for(let i = 0; i < times; i++){
        fu();
    }

}
repeat(great,3); // Hello, World printed 3 times
```
---

### First-Class Function

- Functions are treated as values. You can pass them around like any other variable.

```js
const sayHello = () => "Hello";
const sayGoodbye =() => "Goodbye";
const speak = (fn) => {
    console.log(fn());
};

speak(sayHello); // Hello
speak(sayGoodbye); // Goodbye
```

---

## Declarative approach


- A Declarative Approach especially in functional programming focuses on ***what you want to do, rather than how you do it***.

```js
const numbers = [1, 2, 3, 4, 5];
// Imperative approach
let doubledNumbers = []
for (let i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);    // [2,4,6,8,10]
// Declarative approach
const doubled = numbers.map(n => n * 2);
console.log(doubled);   // [2,4,6,8,10]

```

## Common Functional Methods in JavaScript

-  map() - transform arrays
-  filter() - select items from arrays 
- reduce() - accumulate values
- forEach() - iterate with side effects (not tryly functional, but often used)

---

### Difference between functional programming and other programming languages.

- **Procedural**: Focuses on step-by-step instructions using functions and control flow. (e.g., loops, conditions).
- **OOPS**: Organizes Code around objects and classes, emphasizing encapsulation and inheritance.
- **Functional**: Uses pure functions and avoids state changes, focusing on immutability and function composition.

---

## Currying 

- Currying in JavaScript is a Functional Programming.
- It is used to **Breaking a function that takes many arguments into a series of functions, each taking just one argument. This helps make your code more flexible and reusable.

```js 
// normal function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

// Currying Function
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

// OR using arrow functions
const curriedAddArrow = a => b => a + b;

console.log(curriedAdd(2)(3));        // Output: 5
console.log(curriedAddArrow(4)(6));   // Output: 10

//You can create reusable functions by partially applying arguments:
const add10 = curriedAdd(10);
console.log(add10(5)); // Output: 15

```

```js
// Real time example
// normal function
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

console.log(calculateTotal(100, 0.18)); // ₹118

// Currying function
const calculateWithTax = taxRate => price => price + price * taxRate;

const withGST = calculateWithTax(0.18); // GST 18%
console.log(withGST(100)); // ₹118
console.log(withGST(250)); // ₹295

```

### Usage of Currying Functions

1. Reusability through Partial Application
1. Function Composition
2. Improved Readability & Maintainability
3. Avoids Repetition
4. Create a factory of functions 

---

## Partial Application

- **Partial Application** is a functional programming technique where a function is called with **fewer arguments than it expects**, returning a *new function that takes the remaining arguments*.

- You're **pre-filling** some arguments of a function to create a new specialized version of it.

```js 
function applyDiscount(discount, price) {
  return price - price * discount;
}

const apply10Percent = applyDiscount.bind(null, 0.10); // pre-filling

console.log(apply10Percent(200)); // 180
console.log(apply10Percent(500)); // 450

```

### Advantage of Partial Application
1. Reusability of logic

2. Cleaner, DRY code

3. Works well with currying and composition

---

## Point-Free Style

- Point-Free Style (also called tacit programming) is a coding style where you **define functions without explicitly mentioning their arguments**.
> You avoid writing the parameters (or "points") directly.


```js
// Normal
const greet = name => "Hello, " + name;

// Point-Free
const greet = str => "Hello, " + str;


//Real time example
const users = [
  { name: "Tom", active: true },
  { name: "Jerry", active: false },
  { name: "Spike", active: true }
];

// Normal 
const getActiveUserNames = users =>
  users.filter(u => u.active).map(u => u.name);

// Point-free style
import { pipe, filter, propEq, map, prop } from 'ramda';

const getActiveUserNames = pipe(
  filter(propEq('active', true)),
  map(prop('name'))
);

```

