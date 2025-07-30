# Array

## Exercise 15 ( 1 ) Basic Array Map

Transform an array of numbers by doubling each value using the map method.

### Answer

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use map to double each number
const doubleNumbers = (numbers) => {
  // Your code here
  return numbers.map((n) => n * 2);
};

console.log(JSON.stringify(doubleNumbers(numbers)));
```

### Expected Output:

```js
[2, 4, 6, 8, 10];
```

---

## Exercise 16 ( 2 ) Basic Array Filter

Filter an array to keep only even numbers using the filter method.

### Answer

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ===== YOUR CODE BELOW =====
// Use filter to keep only even numbers
const getEvenNumbers = (numbers) => {
  // Your code here
  return numbers.filter((n) => n % 2 == 0);
};

console.log(JSON.stringify(getEvenNumbers(numbers)));
```

### Expected Output:

```js
[2, 4, 6, 8, 10];
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

const getTitles = (books) => books.map((book) => book.title);

console.log(getTitles(books));
```

### Expected Output:

```js
[
  "Infinite Jest",
  "The Catcher in the Rye",
  "Sapiens",
  "A Brief History of Time",
  "Clean Code",
];
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
  const movieFiction = books.filter((book) => book.genre == "Fiction");
  const fictionMovies = movieFiction.map((movie) => movie.title);
  return fictionMovies;
};

console.log(getTitles(books));
```

### Expected Output:

```js
["Infinite Jest", "The Catcher in the Rye"];
```

---

## Exercise 17 Basic Array Reduce

Sum all numbers in an array using the reduce method.

### Answer

```js
const numbers = [1, 2, 3, 4, 5];

// ===== YOUR CODE BELOW =====
// Use reduce to sum all numbers
const sumNumbers = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr);
  return sum;
};

console.log(sumNumbers(numbers));
```

### Expected Output:

```js
15;
```

---

## Exercise 18 Find the Top Scorer

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
  const topScore = scores.reduce((acc, curr) =>
    acc.score > curr.score ? acc : curr
  );
  return `${topScore.name} is the top scorer with a score of ${topScore.score}.`;
};

console.log(getTopScorer(scores));
```

### Expected Output:

```js
Charlie is the top scorer with a score of 92.
```

---

---

## Exercise 19 Movie Details Finder

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
  const filterMovie = movies.find((movie) => movie.id == id);
  if (filterMovie) {
    const firstLetter = filterMovie.genre.slice(0, 1).toLowerCase();

    if (vowels.includes(firstLetter)) {
      return `${filterMovie.title} is an ${filterMovie.genre} movie`;
    } else {
      return `${filterMovie.title} is a ${filterMovie.genre} movie`;
    }
    // using ternary operator
    //  return vowels.includes(firstLetter) ?  `${filterMovie.title} is an ${filterMovie.genre} movie`: `${filterMovie.title} is a ${filterMovie.genre} movie`
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

---

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
  const filteredMovies = movies.filter((movie) => movie.year > year);

  if (filteredMovies.length === 0) {
    return "No movies found after the given year";
  }

  // Destructuring in parameter:
  // const allTitles = filteredMovies.map(({ title }) => title);
  // Collect all ratings into a single array map() + flat() ==> flatMap()
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

## Exercise 21 High Ratings Checker

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
    movie.ratings.every((r) => r > rating)
  );
  console.log(movieRating);
  if (movieRating) {
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

## Exercise 22 Movie Titles and Ratings Formatter

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
  return movies.map((movie) => movie.title + ": " + movie.ratings).join(" | ");
};
// 1.1
const getTitlesAndRatings1 = (movies) =>
  movies.map((movie) => movie.title + ": " + movie.ratings).join(" | ");

console.log(getTitlesAndRatings(movies));
```

### Expected Output:

```js
Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8
```

---

## Exercise 23 Compile All Ratings

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
const getAllRatings = (movies) =>
  movies.reduce((acc, curr) => acc.concat(curr.ratings), []);

// Version 1.2
movies.reduce((acc, curr) => [...acc, ...curr.ratings], []);

// Version 1.3
//  const getAllRatings = (movies) =>
// movies.flatMap((movie) => movie.ratings);

// Version 1.4
// const getAllRatings = (movies) =>
//   movies.map(movie => movie.ratings).flat();

console.log(JSON.stringify(getAllRatings(movies)));
```

### Expected Output:

```js
[8, 9, 10, 9, 8, 9, 10, 9, 8];
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
    .filter((movie) => movie.ratings.some((rating) => rating >= threshold))
    .map((movie) => movie.title);
};

console.log(JSON.stringify(getTitlesWithHighRatings(movies, 9)));
console.log(JSON.stringify(getTitlesWithHighRatings(movies, 10)));
```

### Expected Output:

```js
["Baahubali", "Arjun Reddy", "Mahanati", "Eega"][("Baahubali", "Mahanati")];
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
  const movieCopy = movies.slice();
  const sortMovie = movieCopy
    .sort((a, b) => {
      const avgA = a.ratings.reduce((a, b) => a + b, 0) / a.ratings.length;
      const avgB = b.ratings.reduce((a, b) => a + b, 0) / b.ratings.length;
      return avgB - avgA;
    })
    .map((movie) => movie.title);
  return sortMovie;
};

console.log(JSON.stringify(getTitlesSortedByAverageRating(movies)));
```

### Expected Output:

```js
["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"];
```

---

## Exercise 26 Find Movies with Low Ratings

Write a function that returns an array of titles of movies that have at least one rating below a certain threshold.

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
const getTitlesWithLowRatings = (movies, threshold) => {
  const movie = movies
    .filter((movie) => movie.ratings.some((r) => r < threshold))
    .map((movie) => movie.title);
  return movie;
};

console.log(JSON.stringify(getTitlesWithLowRatings(movies, 8)));
console.log(JSON.stringify(getTitlesWithLowRatings(movies, 9)));
```

### Expected Output:

```js
["Eega"][("Baahubali", "Mahanati", "Eega", "Jersey")];
```

---

## Exercise 27 Calculate Total Ratings by Genre

Write a function that calculates the total number of ratings for movies of a specific genre.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", genre: "Action", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", genre: "Drama", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", genre: "Biography", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", genre: "Fantasy", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", genre: "Sports", ratings: [9, 9, 8] },
];

// ===== YOUR CODE BELOW =====
// Write a function that calculates total ratings by genre
const getTotalRatingsByGenre = (movies, genre) => {
  return movies
    .filter((movie) => movie.genre === genre)
    .reduce((total, movie) => total + movie.ratings.length, 0);
};

console.log(getTotalRatingsByGenre(movies, "Action"));
console.log(getTotalRatingsByGenre(movies, "Drama"));
```

### Expected Output:

```js
3;
3;
```

---

## Exercise 28 Find Movies with High Average Ratings

Write a function that returns an array of movies where the average rating is above a certain value, including the average rating in the result.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movies with high average ratings
const getMoviesWithHighAverageRating = (movies, threshold) => {
  const fiterMovie = movies.filter((movie) => {
    const avg = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
    return avg >= threshold;
  });
  const avgMovie = fiterMovie.map((movie) => {
    const avg = movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length;
    return `${movie.title} has an average rating of ${avg.toFixed(2)}`;
  });
  return avgMovie;
};

console.log(JSON.stringify(getMoviesWithHighAverageRating(movies, 8.5)));
```

### Expected Output:

```js
[
  "Baahubali has an average rating of 9.00",
  "Arjun Reddy has an average rating of 8.67",
  "Jersey has an average rating of 8.67",
];
```

---

## Exercise 29 Find Movies by Director Sorted by Year

Write a function that returns an array of movie titles directed by a specific director, sorted by year in ascending order.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", director: "S. S. Rajamouli", year: 2015 },
  { id: 2, title: "Arjun Reddy", director: "Sandeep Reddy Vanga", year: 2017 },
  { id: 3, title: "Mahanati", director: "Nag Ashwin", year: 2018 },
  { id: 4, title: "Eega", director: "S. S. Rajamouli", year: 2012 },
  { id: 5, title: "Jersey", director: "Gowtam Tinnanuri", year: 2019 },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movies by director sorted by year
const getTitlesByDirectorSortedByYear = (movies, director) => {
  const filteredMovie = movies
    .filter((movie) => movie.director == director)
    .sort((a, b) => a.year - b.year);
  const movieTitle = filteredMovie.map((movie) => movie.title);
  return movieTitle;
};

console.log(
  JSON.stringify(getTitlesByDirectorSortedByYear(movies, "S. S. Rajamouli"))
);
console.log(
  JSON.stringify(getTitlesByDirectorSortedByYear(movies, "Nag Ashwin"))
);
```

### Expected Output:

```js
["Eega", "Baahubali"]["Mahanati"];
```

---

## Exercise 30 Calculate Average Rating by Year

Write a function that returns the average rating of movies released in a specific year.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", year: 2015, ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", year: 2017, ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", year: 2018, ratings: [10, 9, 8] },
  { id: 4, title: "Eega", year: 2012, ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", year: 2019, ratings: [9, 9, 8] },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds movies with high average ratings
const getAverageRatingByYear = (movies, year) => {
  const movieFilter = movies.filter((movie) => movie.year === year);

  if (movieFilter.length === 0) {
    return "No movies released in the specified year";
  } else {
    const avg = movieFilter.map(
      (movie) => movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length
    );
    // console.log(avg);

    return avg[0].toFixed(2);
  }
};

console.log(getAverageRatingByYear(movies, 2018));
console.log(getAverageRatingByYear(movies, 2020));
```

### Expected Output:

```js
9.00
No movies released in the specified year
```

---

## Exercise 31 Find Movies with Highest Ratings

Write a function that returns an array of objects with movie titles and their highest ratings.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds highest rating for each movie
const getMoviesWithHighestRatings = (movies) => {
  const movie = movies.map((movie) => ({
    title: movie.title,
    //highestRating: movie.ratings.reduce((a, b) => (a > b ? a : b))
    highestRating: Math.max(...movie.ratings),
  }));
  return movie;
};

console.log(JSON.stringify(getMoviesWithHighestRatings(movies)));
```

### Expected Output:

```js
[
  { title: "Baahubali", highestRating: 10 },
  { title: "Arjun Reddy", highestRating: 9 },
  { title: "Mahanati", highestRating: 10 },
  { title: "Eega", highestRating: 9 },
  { title: "Jersey", highestRating: 9 },
];
```

---

## Exercise 32 Find Director with Most Movies

Write a function that returns the director with the most movies directed.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", director: "S. S. Rajamouli" },
  { id: 2, title: "Arjun Reddy", director: "Sandeep Reddy Vanga" },
  { id: 3, title: "Mahanati", director: "Nag Ashwin" },
  { id: 4, title: "Eega", director: "S. S. Rajamouli" },
  { id: 5, title: "Jersey", director: "Gowtam Tinnanuri" },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds highest rating for each movie
const getDirectorWithMostMovies = (movies) => {
  const directorCount = {};

  // Count how many times each director appears
  for (const movie of movies) {
    const director = movie.director;
    directorCount[director] = (directorCount[director] || 0) + 1;
  }

  // Find the director with the maximum count
  let maxDirector = "";
  let maxCount = 0;
  // Object.entries(directorCount)--> idhu object-oda key-value pairs ah array of arrays aa maathudhu.
  //   [
  //   ["S. S. Rajamouli", 2],
  //   ["Sandeep Reddy Vanga", 1],
  //   ["Nag Ashwin", 1]
  // ]

  for (const [director, count] of Object.entries(directorCount)) {
    if (count > maxCount) {
      maxDirector = director;
      maxCount = count;
    }
  }

  return maxDirector;
};

console.log(getDirectorWithMostMovies(movies));
```

### Expected Output:

```js
S.S.Rajamouli;
```

---
