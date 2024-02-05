//task1
function calculateVolumeAndArea(length) {
  if(typeof(length) !== 'number'||length<0||!Number.isInteger(length)){
    console.log('error');
  }
  let area,volume =0;
  area = 6 * Math.pow(length,2);
  volume =  Math.pow(length,3);

  return`area : ${area}, volume: ${volume};`

}
calculateVolumeAndArea(5);


function getCoupeNumber(number) {
  if(typeof(number)!=='number'||number<0||!Number.isInteger(number)){
    console.log('error');
  }
  if(number === 0 || number>36){
    console.log('no place')
  }
  return console.log(Math.ceil(number/4));
}

getCoupeNumber(-5);

//task2

function getTimeFromMinutes(time) {
  if(typeof(time) !=='number'|| time<0||!Number.isInteger(time)){
    return console.log('no correct data')
  }
const hour = Math.floor(time/60);
const minute = time%60;
return console.log(`hour: ${hour}, minutes: ${minute}`)
}
getTimeFromMinutes(12)

function findMaxNumber(a,b,c,d) {
  if (typeof(a) !== 'number' ||
    typeof(b) !== 'number' ||
    typeof(c) !== 'number' ||
    typeof(d) !== 'number') {
    return 0;
  } else {
    return Math.max(a, b ,c, d);
  }
}
findMaxNumber(1,4,6,23);
