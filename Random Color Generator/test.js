function generator(){
   return Math.floor(Math.random()*256);
}

setInterval(()=>{
  const color = `rgb(${generator()}, ${generator()}, ${generator()})`;
  console.log(color);
  document.querySelector('#test').style.backgroundColor= color;
}, 1000);
