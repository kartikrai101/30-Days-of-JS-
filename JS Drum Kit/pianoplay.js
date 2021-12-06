const bo= document.querySelector('#body');

setTimeout(()=>{
  document.querySelector('#remove').innerText= "";
}, 3000);

bo.addEventListener('keydown', function(evt){
  if(evt.keyCode === 65)
  {
    if(document.getElementById('k2').paused){
    document.getElementById('k2').play();
   }
   else{
    document.getElementById('k2').pause;
  }
}
});

bo.addEventListener('keydown', function(evt){
  if(evt.keyCode === 66)
  {
    if(document.getElementById('k3').paused){
    document.getElementById('k3').play();
   }
   else{
    document.getElementById('k3').pause;
  }
}
});

bo.addEventListener('keydown', function(evt){
  if(evt.keyCode === 67)
  {
    if(document.getElementById('k4').paused){
    document.getElementById('k4').play();
   }
   else{
    document.getElementById('k4').pause;
  }
}
});
