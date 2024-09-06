let body=document.querySelector(".body");
let btn=document.querySelector(".btn");
let btns=document.querySelector(".btns");
let btnn=document.querySelector(".btnn");
let hh=document.querySelector(".hh");

btn.onclick=function (){
    body.style.backgroundColor="grey";
    body.style.color="white";
    body.style.textAlign="center";
    hh.textContent="color changed successful";
}
btns.onclick=function (){
    body.style.backgroundColor="blue";
    body.style.color="white";
}
//the dom helps manipulate a webpage. it contains some method that help to add , delete, update. basically it helps us to interact with html. 
//addEventListener contains two things. 1 event type and callback function;
//for example
btnn.addEventListener("click",function (){
    hh.style.color="yellow";

    hh.style.border="3px solid red";
    hh.style.width="300px";
body.style.backgroundColor="purple";
//click is the event type examples of event types are click, dbclick,hover etc
})
