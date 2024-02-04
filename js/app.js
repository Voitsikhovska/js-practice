/* Lesson assignment:

1) Create a variable numberOfFilms and place the user’s answer to the question in it:
'How many films have you seen already?'

2) Create a personalMovieDB object and place the following properties in it:
     - count - the answer to the first question is sent here
     - movies - place an empty object in this property
     - actors - also place an empty object
     - genres - place an empty array here
     - privat - place a boolean (logical) value false in this property

3) Ask the user two questions:
     - 'One of the last films you watched?'
     - 'How much would you rate it?'
The answers should be placed in separate variables
Write responses to the movies object in the format:
     movies: {
         'logan': '8.1'
     }

Check that everything works without errors in the console */


'use strict';
const numberOfFilms = +prompt('How many movies have you watched?');
const personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};
const lastFilm = prompt('One of the last films you watched?','');
const ratingFilm = prompt('How much would you rate it?','');
personalMovieDB.movies[lastFilm]=ratingFilm;
console.log(personalMovieDB);

const lines = 5;
let result = '';

for (let i = 0; i < lines; i++) {
  for (let j = 0; j < lines - i +1; j++) {
    result += " ";

  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";

  }
  result += "\n";

}

console.log(result);
