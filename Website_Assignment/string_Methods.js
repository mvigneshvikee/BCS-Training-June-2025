// Exercise 40
const sample = "Hello World";

// ===== YOUR CODE BELOW =====
// Write a function to reverse a string using spread, reverse & join
const reverseString = (str) => {
  const reverseString = [...str].reverse();
  return reverseString.join("");
};

// console.log(reverseString(sample));

// Exercise 41

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

// console.log(toTitleCase(sentence));

// exercise 42

const inputs = ["Madam", "RaceCar!", "Hello"];

// ===== YOUR CODE BELOW =====
// Write a function that checks for palindrome
const isPalindrome = (s) => {
  const lowerWord = s.toLowerCase().split("").reverse().join("");
  const splitWord = s.toLowerCase().split("").join("");
  console.log(lowerWord);
  console.log(splitWord);
  if (lowerWord == splitWord) {
    return true;
  } else {
    return false;
  }
};

console.log(inputs.map(isPalindrome));
