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
const inputs = ["Madam", "RaceCar!", "Hello"];

// ===== YOUR CODE BELOW =====
// Write a function that checks for palindrome
const isPalindrome = (s) => {
  //The Regex: /[^a-z0-9]/g
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove non-alphanumeric
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
};

console.log(inputs.map(isPalindrome));
```

### Expected Output:

```js
[true, true, false];
```

---

## Exercise 43 Mask Email

Mask username part of an email, leaving only first & last char.

### Answer

```js
const email1 = "ragavkumarv@example.com";
const email2 = "john.doe@gmail.com";

// ===== YOUR CODE BELOW =====
// Write a function to mask email username
const maskEmail = (email) => {
  // Your code here
  const [username, domain] = email.split("@");
  const maskedUsername = username
    .split("")
    .map((ch, i) => (i === 0 || i === username.length - 1 ? ch : "*"))
    .join("");
  return `${maskedUsername}@${domain}`;
};
console.log(maskEmail(email1));
console.log(maskEmail(email2));
```

### Expected Output:

```js
r**********v@example.com
j*****e@gmail.com
```

---
