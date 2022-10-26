// task 1: Create your own JavaScript object representing your
//    favorite movie. Include at least 5 properties: movie title,
//    director, release year, actors (make this an array with at
//    least 3 elements), and length of movie in minutes.
//    Feel free to add more!
let favMovies = {
  movies: ["Battleship", "V for Vandetta", "Weathering With You"],
  director: ["Peter Berg", "James McTeigue", "Makoto Shinkai"],
  releaseYr: [2012, 2006, 2020],
  mainActor: ["Taylor Kitsch", "Hugo Weaving", "Kataro Daigo"],
  length: [131, 122, 114]
};

// task 2: After you have created your movie object, console log the
//    title of your movie using dot notation.
console.log(favMovies.movies[1]);

// task 3: Console log the director's name
console.log(favMovies.director[1]);

// task 4: Console log the release year.
console.log(favMovies.releaseYr[1]);

// task 5: Use bracket notation in combination with dot notation to
//    access one of the actors and console log their name.
console.log(favMovies.mainActor[1]);

// task 6: Add an actor to the arrays of actors. Console log the array
//    to check the actor was added.
console.log(favMovies.mainActor.push("Nana Mori"));

// task 7: Oh, no! One of the actors has been cancelled! Remove one
//    of the actors from the array. Console log the array to check
//    the actor was removed.
favMovies.mainActor.splice(3);
console.log(favMovies.mainActor);

// task 8: An extended director's cut has been release for your movie!
//    Add 20 minutes to the duration. Console log duration.
favMovies.length[0] += 20;
console.log(favMovies.length);
