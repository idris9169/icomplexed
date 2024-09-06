//almost all the if conditions in c++ are the same in javascript
let age;

const btn =document.getElementById("btn");
let input= document.getElementById("input");
let label= document.getElementById("age");

btn.onclick=function(){
    age=input.value; // we assign the value from the input to age;
    age=Number(age); // remember anything receives from a textbox is considered as string hence we need to cast it
    if(age>90){

        label.textContent=" your too old";

    }
    else if(age==13) {
        label.textContent=('hello hamza $(age).')



    }
    else if(age==20)
    {

    }
    else{
        label.textContent=" you bad man";
    }
}

