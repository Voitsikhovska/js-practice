const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['uk', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  //task3
  showAgeAndLang:function (plan){
const{age}=plan;
const {languages}=plan.skills
let str =`i'm ${age} and speak`;
languages.forEach(function (lang){
  str+=` ${lang.toUpperCase()}`
})
return console.log(str)
  }
};
personalPlanPeter.showAgeAndLang(personalPlanPeter);
//task1
function showExperience(plan) {
  const {exp} = plan.skills;
  return console.log(exp)
}
showExperience(personalPlanPeter);
//task2
function showProgrammingLangs(plan) {
  let str ='';
  const {programmingLangs}= plan.skills;
  for (const programmingLangsKey in programmingLangs) {
    str+=`${programmingLangsKey} has studying ${programmingLangs[programmingLangsKey]}\n`;
  }
  console.log(str);
}
showProgrammingLangs(personalPlanPeter)



//ARRAY PRACTICE
//task1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
for (let value of arr){
}
return console.log(`family are : ${arr}`)
}
showFamily(family)

//task2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standartizeString(array){

  /*array.forEach(city=>{
    console.log(city.toLowerCase());
  })*/
  for(let i=0;i<array.length;i++){
    console.log(array[i].toLowerCase())
  }
}
standartizeString(favoriteCities)
