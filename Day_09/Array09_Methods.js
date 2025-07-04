// const num = [5, 6, 8, 10]

// // console.log(num.every(e => e > 1))
// // console.log(num.every(e => typeof e === "number"))

// const numUnshift = num.unshift(9, 45)  // unshift returns number

// console.log(num)
// console.log(numUnshift)
// console.log(typeof numUnshift)

// const reverseNUm = num.reverse()  // reverse returns objects

// console.log(num)
// console.log(reverseNUm)     // copy by reference
// console.log(typeof reverseNUm)

// const y1 ="present"
// const y2 ="present"
// const y3 ="present"

// if ([y1, y2, y3].every(n=> n == "present")){
//     console.log("Class Started")

// }else{
//     console.log("Class Not Started")
// }

// const students = [
//     {name:"Aarav", status:"present"},
//     {name:"Divya", status:"absent"},
//     {name:"Rohan", status:"present"}
// ]
// // 1.2.2
// if(students.every(n => n.status == "present")){
//     console.log("Class Started")
// }else{
//     console.log("Class Not Started")
// }

// // 1.2.1
// if(students[0].status == "present" && students[1].status == "present" && students[2].status == "present" ){
//     console.log("Class Started")
// }else{
//     console.log("Class Not Started")
// }

// =========================================================================

const movies = [
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
    genre: "Action",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 6],
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
// Write a function that finds a movie by ID and returns formatted details
// const getMovieDetails = (movies, id) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const filterMovie = movies.filter((movie) => movie.id == id);
//   if (filterMovie.length != 0) {
//     const firstLetter = filterMovie[0].genre.slice(0, 1).toLowerCase();

//     if (vowels.includes(firstLetter)) {
//       return `${filterMovie[0].title} is an ${filterMovie[0].genre} movie`;
//     } else {
//       return `${filterMovie[0].title} is a ${filterMovie[0].genre} movie`;
//     }
//   } else {
//     return `Movies not Found`;
//   }
// };
// console.log(getMovieDetails(movies, 1));
// console.log(getMovieDetails(movies, 5));
// console.log(getMovieDetails(movies, 6));

//===================================================================

const allRatingsAboveForGenre1 = (movies, rating, genre) => {
  const genreMovies = movies.filter((movie) => movie.genre == genre);
  const movieRating = genreMovies.every((movie) =>
    movie.ratings.every((r) => r > rating));
  console.log(movieRating)
  if(movieRating) {
    return `Yes, all ${genre} movies are above ${rating} ratings`;
  } else {
    return `No, not all ${genre} movies are above ${rating} ratings`;
  }
};


// ================================================================


const allRatingsAboveForGenre = (movies, rating, genre) => {
  const genreMovies = movies.filter((movie) => movie.genre == genre);
  const ratingLit = genreMovies.reduce((acc, curr) => [...acc, ...curr.ratings],[])

  //  ratingLit.every(r => r > rating)
  // const ratingList = 
  if(ratingLit.every(r => r > rating)) {
    return `Yes, all ${genre} movies are above ${rating} ratings`;
  } else {
    return `No, not all ${genre} movies are above ${rating} ratings`;
  }
  
};
console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));

// Yes, all Action movies are above 7 ratings
// No, not all Biography movies are above 8 ratings

// console.log(getMovieDetails(movies, 1));
// console.log(getMovieDetails(movies, 5));
// console.log(getMovieDetails(movies, 6));

//======================================================================================
// const books = [
//   { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
//   { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
//   { title: "Sapiens", rating: 4.9, genre: "History" },
//   { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
//   { title: "Clean Code", rating: 4.7, genre: "Technology" },
// ];
// const getTitles1 = (books) => books.map(book => book.title)
// const getTitles = (books) => {
//   const movieFiction = books.filter(book => book.genre == "Fiction")
// // console.log(movieGenre)
// const fictionMovies = movieFiction.map(movie => movie.title)
// return fictionMovies
// }

// console.log(getTitles(books))
// console.log(getTitles1(books))

// const person = { name: "Tom",
//   age: 28 ,
//   Adre: {
//     city : "kk",
//     vil :"ll"
//   }
// };
// const { name, age,Adre:{city,vill} } = person;
// console.log(name, age);
