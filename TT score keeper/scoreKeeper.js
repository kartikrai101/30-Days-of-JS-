const p1Button=document.querySelector("#p1Button");
const p2Button=document.querySelector("#p2Button");
const p1Display=document.querySelector("#p1Display");
const p2Display=document.querySelector("#p2Display");
const resetbtn= document.querySelector("#reset");
const winningScoreSelect= document.querySelector("#playto");

let p1Score= 0;
let p2Score=0;
let winningScore=3 ;
let isGameOver= false;

p1Button.addEventListener("click", ()=>{
    if(!isGameOver){
    p1Score+=1;
    if(p1Score===winningScore){
        isGameOver=true;
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    }
    p1Display.textContent=p1Score;
}
});

p2Button.addEventListener("click", ()=>{
    if(!isGameOver){
    p2Score+=1;
    if(p2Score===winningScore){
        isGameOver=true;
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    p2Display.textContent=p2Score;
}
});

winningScoreSelect.addEventListener("change", function(){
    winningScore= parseInt(this.value);                          //this is a very important thing that u must remember//we are changing it to int because this.value will return me a string
    reset();  //here we are calling the function rather than just passing its reference
});

resetbtn.addEventListener("click",reset); //notice that here we are not calling the function here but only passing its reference so that it will execute only when the time comes

function reset(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}


