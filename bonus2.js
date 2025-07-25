console.log("Script loaded!");
let startTime;
let elapsedTime=0;
let timerInterval;

function timeToString(time){
    let diff = new Date(time);
    return diff.toISOString().slice(11,23)
}
function print(txt){
    document.getElementById("display").innerHTML = txt;
}
function start(){
    if(!timerInterval){
        startTime = Date.now()-elapsedTime;
        timerInterval = setInterval(function(){
            elapsedTime = Date.now()-startTime;
            print(timeToString(elapsedTime));
        },10);
    }
}
function pause(){
    clearInterval(timerInterval);
    timerInterval = null;
}
function reset(){
    clearInterval(timerInterval);
    print("00:00:00.000");
    elapsedTime=0;
    timerInterval=null;
    document.getElementById("laps").innerHTML="";
}
function lap(){
    if(elapsedTime){
        const lapTime = timeToString(elapsedTime);
        const lapItem = document.createElement("li");
        lapItem.textContent = `Lap:${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
    }
}