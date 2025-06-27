const x = 0;

if (x) {
  console.log("Awesome");
} else {
  console.log("Super");
}
if ("HDFC") {
  console.log("This runs because the string is truthy!");

  const examples = [
  "hello",         // non-empty string
  "0",             // still a non-empty string
  42,              // positive number
  -1,              // negative number
  3.14,            // floating-point number
  [],              // empty array
  [0],             // array with a value
  {},              // empty object
  { bank: "HDFC" },// object with data
  function() {},   // regular function
  () => {},        // arrow function
  new Date(),      // date object
  Infinity,        // special numeric value
];

examples.forEach((value, index) => {
  if (value) {
    console.log(`Value at index ${index} is truthy:`, value);
  }
});
}
const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    loss: 11,
  },
};

console.log(csk2.stats.win);


// Falsy 

const userName = ""; // empty string is falsy

if (userName) {
  console.log("Welcome, " + userName + "!");
} else {
  console.log("Whoops! No username provided.");
}

//  Whoops! No username provided.