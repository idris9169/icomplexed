let input=document.querySelector(".input");
let btn=document.querySelector(".btn");
let display=document.querySelector(".display")

btn.addEventListener("click",function(){
    display.innerHTML=  "the total number of character of your name is "+ input.value.length
    
})