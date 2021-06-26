


var secHand = document.querySelector(".Sec-Det");
var minHand = document.querySelector(".Min-Det");
var hourHand = document.querySelector(".Hour-Det");

function clock(){
    var date = new Date();
    var sec = date.getSeconds();
    var secDeg = ((sec/60)*360)+90;
    var min = date.getMinutes();
    var minDeg = ((min/60)*360)+90;
    var hour = date.getHours();
    var hourDeg = ((hour/12)*360)+90
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    console.log(sec)
}

setInterval(clock, 1000)