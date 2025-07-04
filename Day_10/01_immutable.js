// let x = 10 ;

const marks = [90, 84, 82, 95, 30]
// Find the top Score 

const topScore1 = marks.reduce((acc, curr) => acc > curr ? acc : curr)

console.log(topScore1)

//============================================


const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];
//  acc.marks > curr.marks ? acc.name : curr.name
const topScore = scores.reduce((acc, curr) => acc.marks > curr.marks ? acc : curr)

// console.log(topScore.name)
// Task 1.2
// Use Reduce
// Find the top scorer name
// Output
// Debra Beard

//============================================================================

const movies = [
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
];

// ===== YOUR CODE BELOW =====
// Write a function that compiles all ratings into a single array
const getAllRatings = (movies) => {
  const ratingList = movies.reduce((acc, curr) =>  [...acc, ...curr.ratings],[])
  return ratingList
  
};

console.log(JSON.stringify(getAllRatings(movies)));

//[8,9,10,9,8,9,10,9,8]

//===================================================

// const movies1 = [
//   {
//     id: 1,
//     title: "Baahubali",
//     ratings: [8, 9, 10],
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     ratings: [9, 8, 9],
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     ratings: [10, 9, 8],
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that compiles all ratings into a single array
// const getAllRatings1 = (movies) => {
//   const movieTitle =movies.map(movie => movie.title+": " + movie.ratings.join(", ")).join(" | ")
// //   const movieJoin = movieList.join()
// return movieTitle
  
// };

// console.log(JSON.stringify(getAllRatings1(movies)));