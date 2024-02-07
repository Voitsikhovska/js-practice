
'use strict';


const personalMovieDB = {
  count:0,
  movies:{},
  actors:{},
  genres:[],
  privat:false,
  start: function(){//method
    personalMovieDB.count= +prompt('How many movies have you watched?');
    while(personalMovieDB.count == ''|| personalMovieDB.count==null||isNaN(personalMovieDB.count)){
      personalMovieDB.count= +prompt('How many movies have you watched?');
    }},
  rememberMyFilms: function (){ //method
    for (let i=0; i<2;i++){
      const lastFilm = prompt('One of the last films you watched?','').trim();
      const ratingFilm = prompt('How much would you rate it?','');
      if (lastFilm !=null && ratingFilm!= null && lastFilm !='' && ratingFilm !='' && lastFilm.length <50 && ratingFilm.length<50){
        personalMovieDB.movies[lastFilm]=ratingFilm;
      }
      else {
        i--;
      }
    }
  },
  detectPersonalLevel: function (){ //method
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
  },
  showMyDB:function (hidden){ //method
    if(!hidden){
      console.log(personalMovieDB) ;
    }
  },
  writeYourGenres: function (variable){ //method
   /* for (let i=1;i<=3;i++) {
      let genre = prompt(`your favorite zhanr on number ${i}`);
      if (genre === '' || genre==null){
        console.log('wrong data')
        i--;
      }
      else {
        personalMovieDB.genres[i-1]=genre;
      }
    }*/
    for (let i = 1; i < 2; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
      personalMovieDB.genres.forEach((item,i)=> {
        console.log(`favourite zhanr ${i + 1} - it's ${item}`);
      });

  },
  toggleVisibleMyDB: function (){ //method
    if(personalMovieDB.privat){
      personalMovieDB.privat = false;
    }
    else {
      personalMovieDB.privat = true;
    }
  }
};


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  arr.sort();
  let a =[],b=[],c=[],rest=[];
  for (let i=0; i<arr.length;i++){
    if(i<3){
      a.push(arr[i]);
    }
    else if(i<6){
      b.push(arr[i]);
    }
    else if(i<9){
      c.push(arr[i]);
    }
    else {
      rest.push(arr[i]);
    }
  }
  return console.log([a,b,c, `another students: ${rest.length === 0 ? '-' : rest.join(', ')}`])
}

sortStudentsByGroups(students)

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
