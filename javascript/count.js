const decreasebtn =document.getElementById("decreasebtn");
const increasebtn =document.getElementById("increasebtn");
const resetbtn =document.getElementById("resetbtn");
const  countLabel =document.getElementById("countLabel");
let count=0;
increasebtn.onclick=function(){
    count++;
    countLabel.textContent=count;
    
}
decreasebtn.onclick=function(){
    count--;
    countLabel.textContent=count;
    
}
resetbtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
    
}
let teamName;
teamName=window.prompt("what is the  name of your team?");
document.getElementById("team1").textContent=teamName;
let counts =0;
const decreasebt =document.getElementById("decreasebt");
const increasebt =document.getElementById("increasebt");
const resetbt =document.getElementById("resetbt");
const  countLabe =document.getElementById("countLabe");
increasebt.onclick=function(){
    counts++;
    countLabe.textContent=counts;
    
}
decreasebt.onclick=function(){
    counts--;
    countLabe.textContent=counts;
    
}
resetbt.onclick=function(){
    counts=0;
    countLabe.textContent=counts;
    
}