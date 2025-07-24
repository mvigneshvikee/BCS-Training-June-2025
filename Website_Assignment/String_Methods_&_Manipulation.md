# String Methods and Manipulation

## Exercise 40 Reverse a String

Reverse any given string using spread, array reverse, and join.

### Answer

```js
const sample = "Hello World";

// ===== YOUR CODE BELOW =====
// Write a function to reverse a string using spread, reverse & join
const reverseString = (str) => {
  const reverseString = [...str].reverse();
  return reverseString.join("");
};

console.log(reverseString(sample));
```

### Expected Output:

```js
dlroW olleH
```

---

## Exercise 41 Title Case Converter

Convert a sentence into title case using string and array methods.

### Answer

```js
const sentence = "mastering javascript is fun";

// ===== YOUR CODE BELOW =====
// Write a function to convert sentence to title case
const toTitleCase = (str) => {
  const titleSplit = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return titleSplit;
};

console.log(toTitleCase(sentence));
```

### Expected Output:

```js
Mastering Javascript Is Fun
```

---

## Exercise 42 Check Palindrome

Determine if a string is a palindrome ignoring case and non-alphanumerics.

### Answer

```js
// Create an arrow function that adds two numbers
const add = (a, b) => a + b;
console.log(add(5, 3));
console.log(add(10, 7));
```

### Expected Output:

```js
[true, true, false];
```

---
