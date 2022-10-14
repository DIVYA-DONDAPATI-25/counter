var seconds = 00 ;
var OutputSeconds = document.getElementById('second');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;
buttonStart.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime,100)
})
buttonStop.addEventListener('click',()=>{
    clearInterval(Interval);
    
})
buttonReset.addEventListener('click',()=>{
    clearInterval(Interval);
    seconds = "00";
    OutputSeconds.innerHTML = seconds
})
function startTime(){
    seconds++
    OutputSeconds.innerHTML = "0" + seconds;
    if(seconds>9){
        OutputSeconds.innerHTML = seconds;
    }
}