var p = document.querySelector("#button");
var counter = 0;

p.innerHTML = "Submit";
p.style.background = "blue";
p.style.color = "red";
p.style.textAlign = "center";

function changeBackground()
{
    counter++;
    
    if (counter % 3 == 0){
        this.style.background = "yellowgreen";
        if (p.style.background = "yellowgreen"){
            p.innerHTML = "Congrats"
            p.style.color = "white"
        }
    }
    else if (counter % 3 == 1){
        this.style.background = "lightpurple";
        if (p.style.background = "lightpurple"){
            p.innerHTML = "Good Job"
            p.style.color = "yellowgreen"
        }
    }
    else if (counter % 3 == 2){
        this.style.background = "lightblue";
        if (p.style.background = "lightblue"){
            p.innerHTML = "Congrats"
            p.style.color = "white"
        }
    }
    
}

p.onclick = changeBackground;

 

var currentMargin = 0;
function nextFrame()
{
    currentMargin++
    p.style.margin = currentMargin + "px"
}

var animation;

function start()
{
    animation = setInterval(nextFrame, 250)
}
start();
document.querySelector("#start").onclick= start;

function stop()
{
    currentMargin = 0;
    p.style.margin = "0px";
    clearInterval(animation);
}
document.querySelector("#stop").onclick = stop;