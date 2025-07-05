# Destructring

## Exercise 9  Basic Object Destructuring
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
---

## Exercise 10   Array Destructuring Basics
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
---

## Exercise 11  Basic Spread Operator 
Use the spread operator to combine arrays and copy objects.

### Answer
```js
/const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];

// ===== YOUR CODE BELOW =====
// Use spread operator to combine arrays
const combineArrays = (arr1, arr2) => {
  // Your code here - use spread operator
  return [...arr1, ...arr2]
  
};

console.log(JSON.stringify(combineArrays(fruits, vegetables)));
```

### Expected Output:
```js
["apple","banana","carrot","broccoli"]
```
---
## Exercise 12  Extract User's Preferences with Destructuring
Write a function that extracts the user's name and theme, providing default values if they are missing using destructuring with default values.
### Answer
```js
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

const userWithoutSettings = { id: 2, name: "Adam" };


// ===== YOUR CODE BELOW =====
// Write a function that extracts the user's name and theme with default values
const getUserSettings = (user) => {
  // Your code here - use destructuring with default values
  const {name, settings:{theme = "light"}={}} = user
  return `${name} prefers the ${theme} theme`
};

console.log(getUserSettings(userProfile));
console.log(getUserSettings(userWithoutSettings));
```

### Expected Output:
```js
Eve prefers the dark theme
Adam prefers the light theme
```
---

## Exercise 13  Enhance Employee Skills with Spread Operator
Write a function that returns a new array with an additional skill for each employee using destructuring and the spread operator.

### Answer
```js
const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { 
    id: 3, 
    name: "Charlie", 
    position: "CEO", 
    skills: ["Strategy", "Vision"] 
  },
];
const addSkill = (employees, newSkill) => {
  return employees.map((employee) => ({
    ...employee,
    skills: [...employee.skills, newSkill],
  }));
};

console.log(JSON.stringify(addSkill(employees, "Problem Solving"), null, 2));
```

### Expected Output:
```js
[
  {
    "id": 1,
    "name": "Alice",
    "position": "Developer",
    "skills": [
      "JavaScript",
      "React",
      "Problem Solving"
    ]
  },
  {
    "id": 2,
    "name": "Bob",
    "position": "Manager",
    "skills": [
      "Leadership",
      "Communication",
      "Problem Solving"
    ]
  },
  {
    "id": 3,
    "name": "Charlie",
    "position": "CEO",
    "skills": [
      "Strategy",
      "Vision",
      "Problem Solving"
    ]
  }
]
```
---

## Exercise 14  Find First Friend's Name
Write a function that returns the name of a user's first friend using nested destructuring and array methods.

### Answer
```js
const users = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

// ===== YOUR CODE BELOW =====
// Write a function that returns the name of a user's first friend
const getFirstFriendName = (users, userId) => {
  // Your code here - use nested destructuring
  const friend = users.find(user => user.id == userId )
  const bestFriend =  friend?.friends[0]?.name ? friend?.friends[0]?.name  : 
  friend?.friends.length == 0 ? `${friend.name} has no friend 😥` : "User not found"
  return bestFriend
  
};

console.log(getFirstFriendName(users, 1));
console.log(getFirstFriendName(users, 2));
console.log(getFirstFriendName(users, 3));
console.log(getFirstFriendName(users, 4));
```

### Expected Output:
```js
Bob
Eve
User not found
Deepak has no friend 😥
```
---


