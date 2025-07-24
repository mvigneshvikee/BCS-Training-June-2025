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
  // const lowerWord = s.toLowerCase().split("").reverse().join("");
  // const splitWord = s.toLowerCase().split("").join("");
  // console.log(lowerWord);
  // console.log(splitWord);
  // if (lowerWord == splitWord) {
  //   return true;
  // } else {
  //   return false;
  // }

  //The Regex: /[^a-z0-9]/g
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove non-alphanumeric
  const reversed = clean.split("").reverse().join("");
  return clean === reversed;
};

// console.log(inputs.map(isPalindrome));

// Exercise 43

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

// version 2
const maskEmail2 = (email) => {
  const [username, domain] = email.split("@");
  if (username.length <= 2) {
    return "*".repeat(username.length) + "@" + domain;
  }
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const maskedMiddle = "*".repeat(username.length - 2);
  return `${firstChar}${maskedMiddle}${lastChar}@${domain}`;
};

console.log(maskEmail(email1));
console.log(maskEmail(email2));
