let nameinput=document.querySelector(".nameinput");
let btn=document.querySelector(".btn");
let result=document.querySelector(".result");

btn.addEventListener("click", function(){
    result.innerHTML=nameinput.value.toUpperCase();
    
});
console.log(nameinput.value);

//creating global and local variable;
let idrisu="999"
function mum(){
    let sule ="444"
    
}