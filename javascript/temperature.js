const number=document.querySelector(".number");
const radio1=document.querySelector(".radio1");
const radio2=document.querySelector("radio2");
const result=document.querySelector(".result");
let btn=document.querySelector(".btn");

let temp=Number(number.value);

btn.addEventListener("click", function(){
    if(radio1.checked){
       
        temp=temp*9/5+32;
        result.innerHTML=temp.value;
    }
    else if(radio2.checked){
        temp=(temp-32)*(5/9)
        result.innerHTML=temp.value;
    }
    else {
        result.textContent="select a unit"

    }
})
    






//tem=tem*9/5+32;//to faher
//tem=(tem-32)*(5/9)

