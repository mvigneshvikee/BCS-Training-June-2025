# ES6 Fundamentals

## Exercise 1  Simple Arrow Function 
Create a basic arrow function that adds two numbers. This is your first step into ES6!

### Answer
```js
// Create an arrow function that adds two numbers
const add = (a,b) => a +b
console.log(add(5, 3));
console.log(add(10, 7));
```

### Expected Output:
```js
8
17
```
---

## Exercise 2  Basic Template Literal
Use template literals to create a greeting message. Learn the power of string interpolation!

### Answer
```js
// Create a function that returns a greeting using template literals
const greetUser = (name) => {
  return `Hello, ${name}!`
};

console.log(greetUser("Alice"));
console.log(greetUser("Bob"));
```

### Expected Output:
```js
Hello, Alice!
Hello, Bob!
```
---

## Exercise 3  Simple Optional Chaining
Safely access object properties that might not exist using optional chaining.

### Answer
```js
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

// ===== YOUR CODE BELOW =====
// Create a function that safely gets a user's age
const getUserAge = (user) => {
  return user?.age ?? undefined
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
```

### Expected Output:
```js
25
undefined
undefined
```
---

## Exercise 3  Simple Optional Chaining
Safely access object properties that might not exist using optional chaining.

### Answer
```js
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

// ===== YOUR CODE BELOW =====
// Create a function that safely gets a user's age
const getUserAge = (user) => {
  return user?.age ?? undefined
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
```

### Expected Output:
```js
25
undefined
undefined
```
---

## Exercise 3  Simple Optional Chaining
Safely access object properties that might not exist using optional chaining.

### Answer
```js
const user1 = { name: "Alice", age: 25 };
const user2 = { name: "Bob" };
const user3 = null;

// ===== YOUR CODE BELOW =====
// Create a function that safely gets a user's age
const getUserAge = (user) => {
  return user?.age ?? undefined
};

console.log(getUserAge(user1));
console.log(getUserAge(user2));
console.log(getUserAge(user3));
```

### Expected Output:
```js
25
undefined
undefined
```
---

## Exercise 4  Basic Nullish Coalescing
Provide default values for null or undefined using the nullish coalescing operator.

### Answer
```js
const settings1 = { theme: "dark" };
const settings2 = { theme: null };
const settings3 = { theme: undefined };
const settings4 = {};

// ===== YOUR CODE BELOW =====
// Create a function that gets theme with a default value
const getTheme = (settings) => {
  return settings?.theme ?? "light"
  
};

console.log(getTheme(settings1));
console.log(getTheme(settings2));
console.log(getTheme(settings3));
console.log(getTheme(settings4));
```

### Expected Output:
```js
dark
light
light
light
```
---

## Exercise 5  Uncover the User's Age with Optional Chaining
Implement the getUserAge function to extract the user's age or provide a default message if it's not available using optional chaining and nullish coalescing.

### Answer
```js
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

const userWithAge = { user: { profile: { age: 25 } } };
const userWithoutProfile = { user: {} };

// ===== YOUR CODE BELOW =====
// Write a function that safely returns the user's age or a default message
const getUserAge =(data)=>{
    return data?.user?.profile?.age ?? "Age not provided"
}

console.log(getUserAge(userData))
console.log(getUserAge(userWithAge))
console.log(getUserAge(userWithoutProfile))
```

### Expected Output:
```js
Age not Provided
 25
Age not Provided
```
---

## Exercise 6 Calculate Total Price with Arrow Functions   
Calculate the total price of all products in your cart using arrow functions and array methods.

### Answer
```js
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];
const products1 =[
  {
    "id": 1,
    "name": "Book",
    "price": 25
  },
  {
    "id": 2,
    "name": "Pen",
    "price": 5
  }
]
const products2 =[]
// ===== YOUR CODE BELOW =====
// Write a function that calculates the total price of all products
const getTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0 )
  return totalPrice
};

console.log(getTotalPrice(products));
console.log(getTotalPrice(products1));
console.log(getTotalPrice(products2));
```

### Expected Output:
```js
2200
30
0
```
---

## Exercise 7 Determine User Activity Status
Write a function that takes a user object and returns a message indicating their activity status using template literals and ternary operator.

### Answer
```js
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };
const user3 = { name: "Alice", active: null };

// ===== YOUR CODE BELOW =====
// Write a function that returns a message indicating if the user is active
const getUserStatus = (user) => {
return `${user.name} is currently ${user.active ? "active" : "inactive"}`  
};

console.log(getUserStatus(user1));
console.log(getUserStatus(user2));
console.log(getUserStatus(user3));
```

### Expected Output:
```js
Jane is currently active
John is currently inactive
Alice is currently inactive
```
---

## Exercise 8  Time-Based Greeting Function
Create a function that returns a greeting message based on the time of day using Date methods and template literals.

### Answer
```js
// Your code here - use Date methods to determine the current hour
  // Morning: 0-11, Afternoon: 12-17, Evening: 18-23
const greet1 = (name) => {
    const hours = new Date().getHours()
    console.log(hours)
    let greetings = hours <= 11 ? `Good Morning ${name}`: hours <= 17 ? `Good Afternoon ${name}` : `Good Evening ${name}`
    return greetings
}

// Test with different times
console.log(greet1("Alice"));
```

### Expected Output:
```js
Good Afternoon Alice
```
---

