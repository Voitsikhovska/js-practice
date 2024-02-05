const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
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
function showExperience(plan) {
  const {exp} = plan.skills;
  return console.log(exp)
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
  let str ='';
  const {programmingLangs}= plan.skills;
  for (const programmingLangsKey in programmingLangs) {
    str+=`${programmingLangsKey} has studying ${programmingLangs[programmingLangsKey]}\n`;
  }
  console.log(str);
}
showProgrammingLangs(personalPlanPeter)
