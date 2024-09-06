// to generate random numbers, we use random function of math. Math.random
let randomNum;
randomNum=Math.random(randomNum)*6; //*6 here will the to 6;
console.log(randomNum)// this will generate a random number between 0 and 1
//to remove the decimal part
randomNum=Math.trunc(randomNum);
console.log(randomNum);
let random;
const min=1;
const max=6;
const btn=document.getElementById("mybutton");
const label=document.getElementById("label");
btn.onclick =function(){
    random=Math.floor(Math.random()*max)+min;
    label.textContent=random;
    console.log(label)
}
