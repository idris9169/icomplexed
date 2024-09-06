//checked in html and js
const myCheckbox=document.getElementById("mycheckbox");
const visabtn=document.getElementById("visabtn");
const master=document.getElementById("master");
const paypal=document.getElementById("paypal")
const btn=document.getElementById("btn");
const subresult=document.getElementById("subresult");
const payment=document.getElementById("payment");
btn.onclick= function(){
    if(myCheckbox.checked){
        subresult.textContent="thanks for subcribing"

    }
    else
    {
           subresult.textContent="please you have not suscribe";
           console.log(subresult)
    }
    if (visabtn.checked) {
        payment.textContent="you are paying with Visa ";
        
        
    }
    else if(master.checked)
    {
        payment.textContent="you are paying with MasterCard ";
        

        
    }

    else if(paypal.checked){
        payment.textContent="you are paying with paypal ";
        
    }
}