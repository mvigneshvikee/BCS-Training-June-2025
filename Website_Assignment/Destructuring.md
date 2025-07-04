# Destructring

## Exercise 9
Extract properties from an object using destructuring assignment.

### Answer
```js
const person = { name: "Alice", age: 30, city: "New York" };

// ===== YOUR CODE BELOW =====
// Use object destructuring to extract name and age
const extractPersonInfo = (person) => {
  // Your code here - use destructuring
  const {name, age}= person
  
  return `${name} is ${age} years old`;
};

console.log(extractPersonInfo(person));
```

### Expected Output:
```js
Alice is 30 years old
```

## Exercise 10
Extract elements from an array using destructuring assignment.

### Answer

```js
const colors = ["red", "green", "blue", "yellow"];
const coordinates = [10, 20];

// ===== YOUR CODE BELOW =====
// Use array destructuring to extract first two colors
const getFirstTwoColors = (colors) => {
  // Your code here - use array destructuring
  const [first, second] = colors
  return `First: ${first}, Second: ${second}`;
};

console.log(getFirstTwoColors(colors));

```
### Expected Output:
```js

First: red, Second: green

```