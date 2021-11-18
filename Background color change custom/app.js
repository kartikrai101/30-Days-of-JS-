const button= document.querySelector('button');
const input= document.querySelector('input');
let code="hehe";

input.addEventListener('input', (inp)=>{
  code= input.value;
  console.log(input.value);
})

button.addEventListener('click', ()=>{
  document.body.style.backgroundColor= `#${code}`;
})
