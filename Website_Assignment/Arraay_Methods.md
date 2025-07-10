# Array

## Exercise 15  ( 1 )
Transform an array of numbers by doubling each value using the map method.

### Answer

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
  // Your code here
  return numbers.map(n => n * 2)
};

console.log(JSON.stringify(doubleNumbers(numbers)));

```
### Expected Output:
```js
[2,4,6,8,10]
```

---

## Exercise 16  ( 2 )
Filter an array to keep only even numbers using the filter method.
### Answer

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => {
  // Your code here
  return numbers.filter(n => n%2 == 0)
};

console.log(JSON.stringify(getEvenNumbers(numbers)));

```
### Expected Output:
```js
[2,4,6,8,10]
```

## Exercise 3.1  
Filter the books titles only
### Answer

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getTitles = (books) => books.map(book => book.title)

console.log(getTitles(books))
```
### Expected Output:
```js
['Infinite Jest', 'The Catcher in the Rye', 'Sapiens', 'A Brief History of Time', 'Clean Code']
```
---

## Exercise 3.1  
Filter the fiction books titles only
### Answer

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const getTitles = (books) => {
  const movieFiction = books.filter(book => book.genre == "Fiction")
  const fictionMovies = movieFiction.map(movie => movie.title)
return fictionMovies
}

console.log(getTitles(books))
```
### Expected Output:
```js
['Infinite Jest', 'The Catcher in the Rye']
```
---
## Exercise 17  Basic Array Reduce
Sum all numbers in an array using the reduce method.

### Answer

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use reduce to sum all numbers
const sumNumbers = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr)
  return sum
};

console.log(sumNumbers(numbers));

```
### Expected Output:
```js
15
```

---

## Exercise 18  Find the Top Scorer
Write a function that generates a summary string for the top scorer using template literals and array methods.

### Answer

```js
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

console.log(getTopScorer(scores));

```
### Expected Output:
```js
Charlie is the top scorer with a score of 92.
```

---

---
## Exercise 19  Movie Details Finder
Write a function that finds a movie by ID and returns its title and genre in a formatted string using array methods and template literals.
### Answer

```js
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
// Write a function that finds a movie by ID and returns formatted details
const getMovieDetails = (movies, id) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const filterMovie = movies.filter((movie) => movie.id == id);
  if (filterMovie.length != 0) {
    const firstLetter = filterMovie[0].genre.slice(0, 1).toLowerCase();

    if (vowels.includes(firstLetter)) {
      return `${filterMovie[0].title} is an ${filterMovie[0].genre} movie`;
    } else {
      return `${filterMovie[0].title} is a ${filterMovie[0].genre} movie`;
    }
  } else {
    return `Movies not Found`;
  }
};
console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));

```
### Expected Output:
```js
Baahubali is an Action movie
Jersey is a Sports movie
Movie not found
```
----

## Exercise 20 Average Rating Calculator
Write a function that filters movies released after a certain year and calculates their average rating.
### Answer

```js
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


console.log(getAverageRatingAfterYear(movies, 2016));
console.log(getAverageRatingAfterYear(movies, 2020));


```
### Expected Output:
```js
8.83
No movies after the specified year
```

---

## Exercise 21  High Ratings Checker
Write a function that checks if all movies of a certain genre have ratings above a certain value using array methods.

### Answer

```js
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
// Write a function that finds and formats the top scorer
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

console.log(allRatingsAboveForGenre(movies, 7, "Action"));
console.log(allRatingsAboveForGenre(movies, 8, "Biography"));
```
### Expected Output:
```js
Yes, all Action movies are above 7 ratings
No, not all Biography movies are above 8 ratings
```

---
## Exercise 22  Movie Titles and Ratings Formatter
Write a function that returns a string with each movie's title and its ratings joined by commas using array methods.

### Answer

```js
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
const getTitlesAndRatings = (movies) => {
  return movies.map(movie => movie.title +": "+movie.ratings).join(" | ")
};
// 1.1
const getTitlesAndRatings1 = (movies) => 
   movies.map(movie => movie.title +": "+movie.ratings).join(" | ")

console.log(getTitlesAndRatings(movies));

```
### Expected Output:
```js
Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8
```

---

## Exercise 23  Compile All Ratings
Write a function that returns a single array containing all ratings of all movies using array methods.
### Answer

```js
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
const getTitlesAndRatings = (movies) => 
   movies.reduce((acc, curr) => acc.concat(curr.ratings), []);

console.log(JSON.stringify(getAllRatings(movies)));

```
### Expected Output:
```js
[8,9,10,9,8,9,10,9,8]
```

---
## Exercise 24 Find High-Rated Movie Titles
Write a function that returns an array of titles of movies that have ratings above a certain threshold using array methods.

### Answer

```js
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
  {
    id: 4,
    title: "Eega",
    ratings: [7, 8, 9],
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movie titles with high ratings
const getTitlesWithHighRatings1 = (movies, threshold) => {
  return movies
    .filter(movie => movie.ratings.some(rating => rating >= threshold))
    .map(movie => movie.title);
};

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 9)));
console.log(JSON.stringify(getTitlesWithHighRatings(movies, 10)));

```
### Expected Output:
```js
["Baahubali","Arjun Reddy","Mahanati","Eega"]
["Baahubali","Mahanati"]
```

---
## Exercise 25 Sort Movies by Average Rating
Write a function that returns an array of movie titles sorted by their average ratings in descending order.

### Answer

```js
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
  // Your code here
  
};

console.log(JSON.stringify(getTitlesSortedByAverageRating(movies)));

```
### Expected Output:
```js
["Baahubali","Arjun Reddy","Jersey","Mahanati","Eega"]
```

---
