let hs=0;
let gs=0;
let homeScore=document.getElementById("homescore");
let guestScore=document.getElementById("guestscore");
homeScore.textContent=hs;
guestScore.textContent=gs;
function add1Home(){
    hs=hs+1;
    homeScore.textContent=hs;
    highlight();
}
function add2Home(){
    hs=hs+2;
 homeScore.textContent=hs;   
 highlight();
}
function add3Home(){
    hs=hs+3;
 homeScore.textContent=hs;   
 highlight();
}
function add1Guest(){
    gs=gs+1;
    guestScore.textContent=gs;
    highlight();
}
function add2Guest(){
    gs=gs+2;
 guestScore.textContent=gs;   
 highlight();
}
function add3Guest(){
    gs=gs+3;
 guestScore.textContent=gs;   
 highlight();
}
function reset(){
    hs=0;
    gs=0;
    homeScore.textContent=hs;
    guestScore.textContent=gs;
    highlight();
}
function highlight(){
    
if(hs>gs){
    
   homeScore.style.border="2px solid red";
    guestScore.style.border="none";
}
else if(hs < gs){
      homeScore.style.border="none";
      guestScore.style.border="2px solid red";
}
else{
    homeScore.style.border="none";
    guestScore.style.border="none";
}
}