//demonstring copmarisions
let a =20;
let b='20';
let isEqual=a==b; //this checks if the values are the same
//it doesnt consider the data type

console.log(isEqual);

console.log(a!=b);// this checks if a is not equal to

console.log(a!==b);
//this check the data type and value. it considers
// the data type first and then the value unlike the equal operator 


let ages=18;
let isAge= ages==18;
console.log(isAge);

let mansAge=30;
let minumumAge=30;
let isEqualAge=mansAge==minumumAge;
console.log(isEqualAge);

let selectedItemQty=3;
let requirementQty='3';
let checkedEqual=selectedItemQty===requirementQty
console.log(checkedEqual);
console.log(selectedItemQty!==requirementQty);

let newPassword='1234';
let oldPassword='12345';
let checkEqual=newPassword!=oldPassword;
console.log(checkEqual);
console.log(newPassword!==oldPassword);


let studentGpa=4.0;
let requiredGpa=3.5;
let checkGpa=(studentGpa>requiredGpa);
console.log(checkGpa);
document.write(checkGpa);


const input=document.getElementById("input");
const submit=document.getElementById("")