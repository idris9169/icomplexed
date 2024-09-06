/*accepting input from user
//there are two ways
// using window.prompt fuction;
//using html text box;
examples*/
let username;
//username=window.prompt("whats your name"); // this unprofessinal
console.log(username);
document.write(username);
// the professinal way 
// an input tag has been created in the html file to recieve the data;

document.getElementById("submit").onclick= function(){ username=
    document.getElementById("username").value;
    console.log(username);
    document.write(username);
}

// type conversion
// most of input of the user is treated as string so we need to change the datatypes 
let ages;
//ages=window.prompt("what is your age ");
// although the input fom the user may may a number but is it interpreted as string by the browser
// therefore the need to change the datatypes.


//changing the data type
ages= Number(ages);
ages++;
// the data now will be treated as numbers
console.log(ages);

//calculating the circumference of a circle
let radius;
let circumference;
const PI=3.142;

document.getElementById("mysubmit").onclick= function(){
    radius= document.getElementById("radius").value;
    radius=Number(radius); // type conversion
    circumference=2*PI*radius;
    console.log(circumference);
    document.write(circumference);


}
const decrease =document.getElementById("decrease");
const reset =document.getElementById("reset");
const increase =document.getElementById("increase");
let countLabel=document.getElementById("counts");
let count =0;

increase.onclick =function(){
    count++;
    countLabel.textContent = count;
   

}
decrease.onclick =function(){
    count--;
    countLabel.textContent = count;
   

}
reset.onclick =function(){
    count=0;
    countLabel.textContent = count;
   

}
let teamName;
teamName=window.prompt("what is the name of your team?");
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
    countLabe.textContent=count;}
