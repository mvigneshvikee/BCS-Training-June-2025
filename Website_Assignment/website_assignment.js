// ES6 Fundamentals 
// 5
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

const getUserAge =(data)=>{
    return data?.user?.profile?.age ?? "Age not Provided"
}

// console.log(getUserAge(userData))
// console.log(getUserAge(userWithAge))
// console.log(getUserAge(userWithoutProfile))

// ======================================================

// 6
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

// console.log(getTotalPrice(products));
// console.log(getTotalPrice(products1));
// console.log(getTotalPrice(products2));

//==================================================

// 8
// Create a function that returns a greeting message based on time of day
const greet = (name) => {
  // Your code here - use Date methods to determine the current hour
  // Morning: 0-11, Afternoon: 12-17, Evening: 18-23
  const time = new Date().getHours()
  let greetings;
  if(time >= 0 && time <= 11){
    greetings= `Good Morning ${name}`
  }else if(time <= 17){
    greetings = `Good Afternoon ${name}`
  }else{
    greetings = `Good Evening ${name}`
  }
  return greetings
};

// Ternary Operator

const greet1 = (name) => {
    const hours = new Date().getHours()
    // console.log(hours)
    let greetings = hours <= 11 ? `Good Morning ${name}`: hours <= 17 ? `Good Afternoon ${name}` : `Good Evening ${name}`
    return greetings
}

// Test with different times
// console.log(greet1("Alice"));

// 13
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

// console.log(JSON.stringify(addSkill(employees, "Leadership"), null, 2));

//================================================================

//  14

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

// 1.1 Destructuring
// const getFirstFriendName = (users, userId) => {
//   const user = users.find(({ id }) => id === userId);
//   const {name:userName, friends} = user
//   const [{name:firstName}] = friends
//   if(!user){
//     return "User not found";
//   }else if(friends.length === 0){
//     return `${userName} has no friend 😥`
//   }else{
//     return firstName
//   }
// };


// console.log(getFirstFriendName(users, 1));
// console.log(getFirstFriendName(users, 2));
// console.log(getFirstFriendName(users, 3));
// console.log(getFirstFriendName(users, 4));

//===========================================

// Task 17 
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use reduce to sum all numbers
const sumNumbers = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr)
  return sum
};

// console.log(sumNumbers(numbers));
//===============================
// exc 18
const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 88 },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds and formats the top scorer
const getTopScorer = (scores) => {
  // Your code here - find the highest score and format the result
  const topScore = scores.reduce((acc, curr) => acc.score > curr.score ? acc : curr)
  return `${topScore.name} is the top scorer with a score of ${topScore.score}.`
};

// console.log(getTopScorer(scores));

//============================================

//Exc 20

const movies1 = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates average rating after a specific year
const getAverageRatingAfterYear = (movies, year) => {
  const filteredMovies = movies.filter(movie => movie.year > year);

  if (filteredMovies.length === 0) {
    return "No movies found after the given year";
  }

  // Collect all ratings into a single array
  const allRatings = filteredMovies.flatMap(({ ratings }) => ratings);

  // Calculate the average rating
  const total = allRatings.reduce((acc, rating) => acc + rating, 0);
  const average = total / allRatings.length;

  return average.toFixed(2); // rounded to 2 decimals
};


// console.log(getAverageRatingAfterYear(movies, 2016));
// console.log(getAverageRatingAfterYear(movies, 2020));

//=======================================================

// Task 21
const movies2 = [
{
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that formats movie titles with their ratings
const getTitlesAndRatings = (movies) => 
   movies.reduce((acc, curr) => acc.concat(curr.ratings), []);

// console.log(getTitlesAndRatings(movies));

// ### Expected Output:
// ```js
// [8,9,10,9,8,9,10,9,8]
// ```

//=========================

// task 24 
const movies3 = [
  {
    id: 1,
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    id: 2,
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    id: 3,
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
  {
    id: 4,
    title: "Eega",
    ratings: [7, 8, 9],
  }, 
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movie titles with high ratings
// const getTitlesWithHighRatings = (movies, threshold) => {
// const moviesName = movies.filter(movie => movie.ratings.some(ratings => ratings >= threshold)).map(movie => movie.title)
// return moviesName
// };
const getTitlesWithHighRatings = (movies, threshold) => {
  return movies
    .filter(movie => movie.ratings.some(rating => rating >= threshold))
    .map(movie => movie.title);
};

// console.log(JSON.stringify(getTitlesWithHighRatings(movies, 9)));
// console.log(JSON.stringify(getTitlesWithHighRatings(movies, 10)));

//===================================================
// task 25
const movies = [
  {
    title: "Baahubali",
    ratings: [8, 9, 10],
  },
  {
    title: "Arjun Reddy",
    ratings: [9, 8, 9],
  },
  {
    title: "Jersey",
    ratings: [9, 9, 8],
  },
  {
    title: "Mahanati",
    ratings: [10, 9, 8],
  },
  {
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that sorts movie titles by average rating
const getTitlesSortedByAverageRating = (movies) => {
  const movieCopy = movies.slice()
  const sortMovie = movieCopy.sort((a, b) => {
    const avgA =a.ratings.reduce((a,b) => a + b, 0)/a.ratings.length
    const avgB =b.ratings.reduce((a,b) => a + b, 0)/b.ratings.length
return avgB - avgA
  }).map(movie => movie.title)
  return sortMovie
};

console.log(JSON.stringify(getTitlesSortedByAverageRating(movies)));