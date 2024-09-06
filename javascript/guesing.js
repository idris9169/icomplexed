const min=1;
const max=20;
let answer=Math.floor(Math.random()*max)+min;
let guess
let number=document.querySelector(".numbers");
let result=document.querySelector(".rel");
let btn=document.querySelector(".btn");
let running =true;
let attempt=0;
window.alert("hello welcome number guesing game");
guess=number.value;
while(running){
       guess=window.prompt(" enter  number from "+min+" to "+max) ;
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("invalid response")
    }
    else if(guess<min||guess>max){
        window.alert("enter a number from "+min+" to "+max);

    }
    else{
        attempt++;
        if(guess<=5){

            window.alert("so close");

        }
        else if(guess<answer){
            window.alert("too low");
        }
        else{
            
           
            if(attempt==1){
                window.alert("wow! you are amazing");
            }
            else {
                window.alert("correct! your attempt was "+ attempt++);
                running=false;
            }
        }
    }
}
