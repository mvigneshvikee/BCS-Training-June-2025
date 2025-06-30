const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

function movies1(names) {
  let titles = [];
  for (let book of names) {
    titles.push(book.title);
  }
  return titles;
}

// console.log(movies(books));

function genre1(names) {
  let titles = [];
  for (let book of names) {
    if(book.genre == "Fiction"){
    titles.push(book.title);
    }
  }
  return titles;
}

function movies(names) {
  let titles = [];
  for (let book of names) {
    let {title} = book
    titles.push(title)
  }
  return titles;
}

console.log(movies(books))

function genre(names) {
  let titles = [];
  for (let {title,genre} of names) {
    // let {genre} = book
    if(genre == "Fiction"){
    titles.push(title);
    }
  }
  return titles;
}

console.log(genre(books))

const nums = [10,20,40,]
const multi =nums.map(n => n*2)
console.log(multi)

const movieTitle = books.map(book => book.title)
console.log(movieTitle)

const movieFiction = books.filter(book => book.genre == "Fiction")
// console.log(movieGenre)
const fictionMovies = movieFiction.map(movie => movie.title)
console.log(fictionMovies)

//===========================================================================

const ratings = books.filter(book => book.rating >= 4.7)

if (ratings.length == 0 ){
  console.log("There no books which are >= 4.7. The are no good books available 😓")
}else if(ratings.length == 1){
  console.log(`There is only one Highest rated book is ${ratings.map(movie => movie.title)}`)
}else{
  const bookList =ratings.map(b => b.title)
  const lastBook = bookList.pop()
  console.log(`There are ${ratings.length} more Highest rated books are: ${bookList.join(", ")} and ${lastBook} `)

}

