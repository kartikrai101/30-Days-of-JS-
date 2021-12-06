const secondsHand= document.querySelector('.second-hand');
const minutesHand= document.querySelector('.min-hand');
const hoursHand= document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  const seconds= now.getSeconds();
  const secondsDegree= ((seconds/60) * 360) + 90;
  secondsHand.style.transform= `rotate(${secondsDegree}deg)`;

  const mins= now.getMinutes();
  console.log(mins);
  document.querySelector('.div3').innerText= mins;
  document.querySelector('.div3').style.color= "grey";
  const minutesDegree= ((mins*6)+90);
  minutesHand.style.transform= `rotate(${minutesDegree}deg)`;

  const hours= now.getHours();
  console.log(hours);
  document.querySelector('.div2').innerText= hours;
  document.querySelector('.div2').style.color= "grey";
  const hoursDegree= ((hours/12)*360)+90;
  hoursHand.style.transform= `rotate(${hoursDegree}deg)`;

  const day= now.getDay();
  if(day=== 0){
    document.querySelector('.div4').innerText= "Sunday";
  }
  else if(day=== 1){
    document.querySelector('.div4').innerText= "Monday";
  }
  else if(day=== 2){
    document.querySelector('.div4').innerText= "Tuesday";
  }
  else if(day=== 3){
    document.querySelector('.div4').innerText= "Wednesday";
  }
  else if(day=== 4){
    document.querySelector('.div4').innerText= "Thursday";
  }
  else if(day=== 5){
    document.querySelector('.div4').innerText= "Friday";
  }
  else if(day=== 6){
    document.querySelector('.div4').innerText= "Saturday";
  }

}


setInterval(setDate, 1000);
