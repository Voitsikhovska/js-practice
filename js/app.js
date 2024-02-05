
'use strict';
let numberOfFilms;
function start(){
 numberOfFilms = +prompt('How many movies have you watched?');
 while(numberOfFilms == ''|| numberOfFilms==null||isNaN(numberOfFilms)){
   numberOfFilms = +prompt('How many movies have you watched?');
 }
}
start();
const personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};
function rememberMyFilms(){
  for (let i=0; i<2;i++){
    const lastFilm = prompt('One of the last films you watched?','');
    const ratingFilm = prompt('How much would you rate it?','');
    if (lastFilm !=null && ratingFilm!= null && lastFilm !='' && ratingFilm !='' && lastFilm.length <50 && ratingFilm.length<50){
      personalMovieDB.movies[lastFilm]=ratingFilm;
    }
    else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count<10){
    alert("too malo films");
  } else if(personalMovieDB.count>=10&&personalMovieDB.count <30){
    alert('you are classic');
  }
  else if(personalMovieDB.count>30){
    alert('ypu are kinoman');
  }
  else {alert('error')}
  console.log(personalMovieDB);
}
detectPersonalLevel();
function showMyDB(hidden){
  if(!hidden){
    console.log(personalMovieDB) ;
  }
}
showMyDB(personalMovieDB.privat);
function writeYourGenres(variable){
 for (let i=1;i<=3;i++) {
   personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
 }

}
writeYourGenres()
/*const lines = 5;
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

console.log(result);*/
