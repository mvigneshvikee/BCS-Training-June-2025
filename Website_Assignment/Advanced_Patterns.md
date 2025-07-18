# Advanced Patterns

## Exercise 33 Advanced User Age Detection

Write a function that returns the user's age if available, or a default message if not, using nullish coalescing and optional chaining with complex nested objects..

### Answer

```js
// exercise 33
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

// ===== YOUR CODE BELOW =====
// Write a function that safely extracts user age from complex objects
const getUserAge = (user) => {
  return user?.profile?.age ?? "Age not provided";
};

console.log(getUserAge(userWithFullProfile));
console.log(getUserAge(userWithPartialProfile));
console.log(getUserAge({ id: 3, name: "Charlie" }));
```

### Expected Output:

```js
25
Age not provided
Age not provided
```

---

## Exercise 34 Merge Arrays with Default Values

Write a function that merges two arrays of movies into one using the spread operator and provides a default value for the second array.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" },
];

const moreMovies = [
  { id: 3, title: "Jersey", genre: "Sports" },
  { id: 4, title: "Eega", genre: "Fantasy" },
];

// ===== YOUR CODE BELOW =====
// Write a function that merges movie arrays with default handling
const mergeMovies = (movies, moreMovies = []) => {
  return [...movies, ...moreMovies];
};

console.log(JSON.stringify(mergeMovies(movies, moreMovies)));
console.log(JSON.stringify(mergeMovies(movies)));
```

### Expected Output:

```js
[
  { id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" },
  { id: 3, title: "Jersey", genre: "Sports" },
  { id: 4, title: "Eega", genre: "Fantasy" },
][
  ({ id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" })
];
```

---

## Exercise 35 Collect Movie Titles with Rest Operator

Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator.

### Answer

```js
const movie1 = { id: 1, title: "Baahubali", genre: "Action" };
const movie2 = { id: 2, title: "Arjun Reddy", genre: "Drama" };
const movie3 = { id: 3, title: "Jersey", genre: "Sports" };

// ===== YOUR CODE BELOW =====
// Write a function that collects titles from any number of movies
const getTitles = (...movies) => {
  return movies.map((movie) => movie.title);
};

console.log(JSON.stringify(getTitles(movie1, movie2, movie3)));
console.log(JSON.stringify(getTitles(movie1, movie2)));
```

### Expected Output:

```js
["Baahubali", "Arjun Reddy", "Jersey"][("Baahubali", "Arjun Reddy")];
```

---

## Exercise 36 Fetch Movie Titles by IDs

Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string using the rest operator, nullish coalescing, and template literals.

### Answer

```js
const movies = [
  { id: 1, title: "Baahubali", genre: "Action" },
  { id: 2, title: "Arjun Reddy", genre: "Drama" },
  { id: 3, title: "Mahanati", genre: "Biography" },
  { id: 4, title: "Eega", genre: "Fantasy" },
  { id: 5, title: "Jersey", genre: "Sports" },
];

// ===== YOUR CODE BELOW =====
// Write a function that fetches movie titles by multiple IDs
const getMovieTitlesByIds = (movies, ...ids) => {
  const titles = ids.map((id) => {
    const movie = movies.find((m) => m.id === id);
    return movie?.title ?? "Unknown Title";
  });
  return `Selected Movies: ${titles.join(", ")}`;
};

console.log(getMovieTitlesByIds(movies, 1, 3, 5));
console.log(getMovieTitlesByIds(movies, 1, 6));
```

### Expected Output:

```js
Selected Movies: Baahubali, Mahanati, Jersey
Selected Movies: Baahubali, Unknown Title
```

---

## Exercise 37 Update Movie Details by ID

Write a function that updates a movie's genre and ratings by ID, using object destructuring, spread operator, and default values.

### Answer

```js
// Use **findIndex()** when you plan to update/delete an item by accessing its position in the array.
const movies = [
  { id: 1, title: "Baahubali", genre: "Action", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", genre: "Drama", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", genre: "Biography", ratings: [10, 9, 8] },
];

// ===== YOUR CODE BELOW =====
const updateMovieDetails = (movies, id, { genre, ratings }) => {
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return "Movie not found";
  }

  // Only update if the property is passed
  if (genre !== undefined) {
    movies[index].genre = genre;
  }

  if (ratings !== undefined) {
    movies[index].ratings = ratings;
  }

  return movies[index];
};

console.log(
  JSON.stringify(
    updateMovieDetails(movies, 2, { genre: "Romance", ratings: [10, 9, 8] })
  )
);

console.log(updateMovieDetails(movies, 6, { genre: "Thriller" }));
```

### Expected Output:

```js
{"id":2,"title":"Arjun Reddy","genre":"Romance","ratings":[10,9,8]}
Movie not found
```

---

## Exercise 38 Advanced Movie Information Formatter

listing their titles and genres using the rest operator, nullish coalescing, and template literals.

### Answer

```js
const movie1 = { title: "Baahubali", genre: "Action" };
const movie2 = { title: "Arjun Reddy", genre: "Drama" };
const movie3 = { title: null, genre: null };

// ===== YOUR CODE BELOW =====
// Write a function that formats movie information
const listMovies = (...movies) => {
  // Your code here
  const movieList = movies
    .map(
      (movie) =>
        `${movie?.title ?? "Unknown Title"} (${
          movie?.genre ?? "Unknown Genre"
        })`
    )
    .join(", ");
  return movieList;
};

console.log(listMovies(movie1, movie2));
console.log(listMovies(movie1, movie2, movie3));
```

### Expected Output:

```js
Baahubali (Action), Arjun Reddy (Drama)
Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)
```

---

## Exercise 39 Complete Movie Management System

Create a comprehensive function that updates or adds a movie based on ID, using all ES6 features: destructuring, spread operator, optional chaining, nullish coalescing, and array methods.

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

// ===== Your code =====
const updateOrAddMovie = (movies, newMovie) => {
  const movieIndex = movies.findIndex((movie) => movie.id === newMovie.id);

  if (movieIndex !== -1) {
    movies[movieIndex] = { ...movies[movieIndex], ...newMovie };
  } else {
    movies.push(newMovie);
  }

  return movies;
};

// ===== Test cases =====
const newMovie = {
  id: 4,
  title: "Pushpa",
  director: "Sukumar",
  year: 2021,
  ratings: [8, 9, 8],
  genre: "Action",
};
const updatedMovie = { id: 2, title: "Arjun Reddy", ratings: [10, 10, 9] };

console.log(
  JSON.stringify(
    updateOrAddMovie(movies, newMovie).find((m) => m.id === 4),
    null,
    2
  )
);
console.log(
  JSON.stringify(
    updateOrAddMovie(movies, updatedMovie).find((m) => m.id === 2),
    null,
    2
  )
);
```

### Expected Output:

```js
{"id":4,"title":"Pushpa","director":"Sukumar","year":2021,"ratings":[8,9,8],"genre":"Action"}
{"id":2,"title":"Arjun Reddy","director":"Sandeep Reddy Vanga","year":2017,"ratings":[10,10,9],"genre":"Drama"}
```

---
