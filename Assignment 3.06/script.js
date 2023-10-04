

// var p = document.getElementById("changeMe");
var p = document.querySelector("#changeMe");


p.innerHTML = "Block";
p.style.background = "blue";
p.style.color = "red";
p.style.textAlign = "center";

function changeParagraphBackground()
{
    this.style.background = 'green';
    if (p.style.background = "green"){
        p.innerHTML = "Hello"
        p.style.color = "white"
    }
}


p.onclick = changeParagraphBackground


var currentMargin = 0;
function nextFrame()
{
    currentMargin++;
    p.style.margin = currentMargin + "px";
}


var animation;


function play ()
{
    animation = setInterval(nextFrame,250);
}
play();
document.querySelector("#play").onclick = play;


function stop()
{
    currentMargin = 0;
    p.style.margin = "0px";
    clearInterval(animation);
}


document.querySelector("#stop").onclick = stop;
