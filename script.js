let peeku=document.getElementById("peeku");
let dino=document.getElementById("dino");
counter=0;

function jump(){
    if(peeku.classList == "animate")
    {return}
    peeku.classList.add("animate");
    setTimeout(function(){
        peeku.classList.remove("animate");
    },300);
}
let checkDead =setInterval(function(){
    let peekuTop =parseInt(window.getComputedStyle(peeku).getPropertyValue("top"));
    let dinoLeft=parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    if(dinoLeft<140 && dinoLeft>-20 && peekuTop>=130){
        dino.style.animation="none";
        alert("Game Over. score: "+Math.floor(counter/100));;
        counter=0;
        dino.style.animation="dino 1s infinite linear";
    }
    else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);
