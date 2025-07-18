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
  //   return user?.profile?.age
  //     ? (user?.profile?.age).toString()
  //     : "age not provided";
};

// console.log(getUserAge(userWithFullProfile));
// console.log(getUserAge(userWithPartialProfile));
// console.log(getUserAge({ id: 3, name: "Charlie" }));

// exercise 36

const movies2 = [
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

// console.log(getMovieTitlesByIds(movies, 1, 3, 5));
// console.log(getMovieTitlesByIds(movies, 1, 6));

//exercise 37

const movies4 = [
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

// console.log(JSON.stringify(updateMovieDetails(movies, 2, { genre: "Romance", ratings: [10, 9, 8] })));

// console.log(updateMovieDetails(movies, 6, { genre: "Thriller" }));

// Exercise 38

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

// console.log(listMovies(movie1, movie2));
// console.log(listMovies(movie1, movie2, movie3));

// exercise 39

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
