

for(let i=1;i<=7;i++){
    
 document.querySelector(".drum"+i).addEventListener("click",
 function (){
   mouse(".drum"+i);
 var sound=new Audio("./sounds/sound"+i+".mp3");
    sound.play();
 });  
  
}
document.addEventListener("keydown",function(e){
    switch(e.key){
        case 'w':{
            keyboard(e.key);
            var sound=new Audio("./sounds/sound1.mp3");
            sound.play();
        }break;
        case 'a':{
            keyboard(e.key);
            var sound=new Audio("./sounds/sound2.mp3");
            sound.play();
        }break;
        case 's':{
            keyboard(e.key);
            var sound=new Audio("./sounds/sound3.mp3");
            sound.play();
        }break;
        case 'd':{
            keyboard(e.key);
            var sound=new Audio("./sounds/sound4.mp3");
            sound.play();
        }break;
        case 'j':{
            keyboard(e.key);
            var sound=new Audio("./sounds/sound5.mp3");
            sound.play();
        }break;
        case 'k':{
            keyboard(e.key);
            var sound=new Audio("./sounds/sound6.mp3");
            sound.play();
        }break;
        case 'l':{
            keyboard(e.key);
            var sound=new Audio("./sounds/sound7.mp3");
            sound.play();
        }break;
    }
  
})
function keyboard(lol){
   var button= document.querySelector("."+lol);
   button.classList.add("scaling");
   setTimeout(function(){
    button.classList.remove("scaling");
   },200);
}
function mouse(lol){
    var but=document.querySelector(lol);
    but.classList.add("scaling");
   setTimeout(function(){
    but.classList.remove("scaling");
   },200);
}