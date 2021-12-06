const remove= document.querySelector('body');

setTimeout(()=>{
  const note= document.querySelector('#remove');
  note.innerText= "";
}, 5000);



remove.addEventListener('keydown', function(e){
  if (e.keyCode == 69) {
    document.querySelector('#e').style.backgroundColor= "grey";
    setTimeout(()=>{
      document.querySelector('#e').style.backgroundColor= "black";
    }, 100);
    if(document.getElementById('audio6').paused){
    document.getElementById('audio6').play();
   }
   else{
    document.getElementById('audio6').pause;
  }
}

else if (e.keyCode == 65) {
  document.querySelector('#a').style.backgroundColor= "grey";
  setTimeout(()=>{
    document.querySelector('#a').style.backgroundColor= "black";
  }, 100);
  if(document.getElementById('audio5').paused){
  document.getElementById('audio5').play();
 }
 else{
  document.getElementById('audio5').pause;
}
}

else if (e.keyCode == 68) {
  document.querySelector('#d').style.backgroundColor= "grey";
  setTimeout(()=>{
    document.querySelector('#d').style.backgroundColor= "black";
  }, 100);
  if(document.getElementById('audio4').paused){
  document.getElementById('audio4').play();
 }
 else{
  document.getElementById('audio4').pause;
}
}

else if (e.keyCode == 71) {
  document.querySelector('#g').style.backgroundColor= "grey";
  setTimeout(()=>{
    document.querySelector('#g').style.backgroundColor= "black";
  }, 100);
  if(document.getElementById('audio3').paused){
  document.getElementById('audio3').play();
 }
 else{
  document.getElementById('audio3').pause;
}
}

else if (e.keyCode == 66) {
  document.querySelector('#b').style.backgroundColor= "grey";
  setTimeout(()=>{
    document.querySelector('#b').style.backgroundColor= "black";
  }, 100);
  if(document.getElementById('audio2').paused){
  document.getElementById('audio2').play();
 }
 else{
  document.getElementById('audio2').pause;
}
}

else if (e.keyCode == 67) {
  document.querySelector('#c').style.backgroundColor= "grey";
  setTimeout(()=>{
    document.querySelector('#c').style.backgroundColor= "black";
  }, 100);
  if(document.getElementById('audio1').paused){
  document.getElementById('audio1').play();
 }
 else{
  document.getElementById('audio1').pause;
}
}
  console.log(e.key);
});
