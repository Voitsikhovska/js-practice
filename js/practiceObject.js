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

 //task3
const someString = 'This is some strange string';

function reverse(str) {
  if (typeof(str) !== 'string') {
    return "error!";
  }

/* it's optimal solution
 return str.split('').reverse().join('');*/

let strin='';
for (let i=str.length-1;i>=0;i--){
  strin+=str[i];
}
console.log(strin)
}
reverse(someString)


//task4
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
let str='';
arr.length === 0 ? str='No available currencies' : str='Available currencies'
  for (let i=0; i<arr.length;i++){
    if(arr[i]===missingCurr){
      continue;
    }
    str+=`\n ${arr[i]} `;
  }
  console.log(str)
}
availableCurr(additionalCurrencies,'UAH')


//task5
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach(shop => {
    square += shop.width * shop.length;
  });

  volume = data.height * square;

  if (data.budget - (volume * data.moneyPer1m3) >= 0) {
    return 'Бюджета достаточно';
  } else {
    return 'Бюджета недостаточно';
  }
}
