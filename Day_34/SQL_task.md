## Exercise 1 — Tasks

- Find the title of each film ✓
  ```sql
  SELECT title FROM movies;
  ```
- Find the director of each film ✓
  ```sql
  SELECT director FROM movies;
  ```
- Find the title and director of each film ✓
  ```sql
  SELECT title, director FROM movies;
  ```
- Find the title and year of each film ✓
  ```sql
  SELECT title, year FROM movies;
  ```
- Find all the information about each film ✓
  ```sql
  SELECT * FROM movies;
  ```

---

## Exercise 2 — Tasks

- Find the movie with a row id of 6 ✓
  ```sql
      SELECT *
      FROM movies
      WHERE id = 6;
  ```
- Find the movies released in the years between 2000 and 2010
  ```sql
  SELECT *
  FROM movies
  WHERE  year BETWEEN 2000 AND 2010;
  ```
- Find the movies not released in the years between 2000 and 2010
  ```sql
  SELECT *
  FROM movies
  WHERE  year NOT BETWEEN 2000 AND 2010;
  ```
- Find the first 5 Pixar movies and their release year
  ```sql
  SELECT *
  FROM movies
  WHERE  id BETWEEN 1 AND 5;
  ```

---

## Exercise 3 — Tasks

- Find all the Toy Story movies

  ```sql
  SELECT * FROM movies
  WHere title like 'toy story%';
  ```

  ```sql
  SELECT * FROM movies
  WHere title like 'toy%';
  ```

  ```sql
  SELECT * FROM movies
  WHere title like '%story%';
  ```

- Find all the movies directed by John Lasseter
  ```sql
  SELECT * FROM movies
  WHere director like 'john lasseter%';
  ```
- Find all the movies (and director) not directed by John Lasseter
  ```sql
  SELECT title, director
  FROM movies
  WHere director NOT LIKE 'john lasseter%';
  ```
  ```sql
  SELECT *
  FROM movies
  WHere director NOT LIKE 'john%';
  ```
- Find all the WALL-\* movies
  ```sql
  SELECT title, director
  FROM movies
  WHere title  LIKE 'wall-%';
  ```
  ```sql
  SELECT title, director
  FROM movies
  WHere title  LIKE 'wall-_';
  ```

---

## Exercise 4 — Tasks

- List all directors of Pixar movies (alphabetically), without duplicates ✓
  ```sql
  SELECT DISTINCT director
  FROM movies
  ORDER BY director;
  ```
- List the last four Pixar movies released (ordered from most recent to least)
  ```sql
  SELECT *
  FROM movies
  ORDER BY year Desc
  LIMIT 4;
  ```
- List the first five Pixar movies sorted alphabetically
  ```sql
  SELECT *
  FROM movies
  ORDER BY title
  LIMIT 5;
  ```
- List the next five Pixar movies sorted alphabetically
  ```sql
  SELECT *
  FROM movies
  ORDER BY title
  LIMIT 5 OFFSET 5;
  ```

---

## Review 1 — Tasks

- List all the Canadian cities and their populations ✓
  ```sql
  SELECT city,population
  FROM north_american_cities
  WHERE country = 'Canada';
  ```
  ```sql
  SELECT City, Population
  FROM north_american_cities
  WHERE Country LIKE 'Canada';
  ```
- Order all the cities in the United States by their latitude from north to south
  ```sql
  SELECT *
  FROM north_american_cities
  WHERE country Like 'United States'
  ORDER BY latitude Desc;
  ```
- List all the cities west of Chicago, ordered from west to east
  ```sql
  SELECT *
  FROM north_american_cities
  WHERE longitude < (SELECT longitude
                      FROM north_american_cities
                      WHERE City = 'Chicago')
  ORDER BY longitude;
  ```
- List the two largest cities in Mexico (by population)
  ```sql
  SELECT *
  FROM north_american_cities
  WHERE COUNTRY = 'Mexico'
  ORDER By population desc
  LIMIT 2;
  ```
- List the third and fourth largest cities (by population) in the United States and their population
  ```sql
  SELECT city, population
  FROM north_american_cities
  WHERE COUNTRY = 'United States'
  ORDER By population desc
  LIMIT 2 OFFSET 2;
  ```

---

## Exercise 6 — Tasks

- Find the domestic and international sales for each movie ✓
  ```sql
  SELECT title,domestic_sales, international_sales
  FROM movies
  INNER JOIN boxoffice
    ON movies.id = boxoffice.movie_id;
  ```
- Show the sales numbers for each movie that did better internationally rather than domestically
  ```sql
  SELECT title,domestic_sales, international_sales
  FROM movies
  INNER JOIN boxoffice
      ON movies.id = boxoffice.movie_id
  Where domestic_sales < international_sales;
  ```
- List all the movies by their ratings in descending order
  ```sql
  SELECT title,rating
  FROM movies
  INNER JOIN boxoffice
      ON movies.id = boxoffice.movie_id
  ORDER By rating Desc;
  ```

---

## Exercise 7 — Tasks

- Find the list of all buildings that have employees ✓

```sql
  SELECT DISTINCT building FROM employees;
```

- Find the list of all buildings and their capacity
  ```sql
  SELECT distinct building_name, capacity
  FROM buildings;
  ```
  ```sql
  SELECT distinct *
  FROM buildings;
  ```
- List all buildings and the distinct employee roles in each building (including empty buildings)
