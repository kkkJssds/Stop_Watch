var secound=document.getElementById("secound");
var milisecound=document.getElementById("milisecound");
var start=document.getElementById("start");
var stop=document.getElementById("stop");
var reset=document.getElementById("reset");
var sec=0;
var timeInterval;
var milisec=0;
const timer=()=>{
    milisec++;
    if(milisec<9){
    milisecound.innerHTML="0"+milisec;
    }    
    if(milisec>9){
        milisecound.innerHTML=milisec;
        }   
        if(milisec>99){
            sec++;
            secound.innerHTML="0"+sec;
            milisec=0;
            milisecound.innerHTML="0"+0;
            }   
            if(sec>9){
                secound.innerHTML=sec;
                }  

}
start.addEventListener('click',()=>{
timeInterval=setInterval(timer,10);

})
stop.addEventListener('click',()=>{
    clearInterval(timeInterval);
    
    })
reset.addEventListener('click',()=>{
    clearInterval(timeInterval);
    sec="00";
    milisec="00";
    milisecound.innerHTML=milisec;
    secound.innerHTML=sec;
    console.log(secound);

        })