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
---
## Exercise 19  ( 5 )
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
  // Your code here
  const filterMovie = movies.filter(movie => movie.id==id)
  if(filterMovie.length == 0){
    return `Movie Not Found`
  }
  return `${filterMovie[0].title} is a ${filterMovie[0].genre} movie`
  
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

## Exercise 16  ( 7 )
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

const allRatingsAboveForGenre = (movies, rating, genre) => {
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
[2,4,6,8,10]
```

---