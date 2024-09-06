document.getElementById("idr").textContent=("hello");
// the code above send hello to the html page. it uses id that that is found in the html element tag to create the content
// variable declaration 
let age=26;
let price =10.5;
let gpa=3.9;
// to check the type of data type use the keyword tpeof
console.log(typeof age)
let first_name="idrisu";
console.log(typeof first_name);
let online =true;
console.log('you are online: ${online}');
///displayinf context on pages
// we are gong to tag the element in our html file with an id;
let fullName ="idrisu";
let ages=25;
let student =true;

document.getElementById("p1").textContent= "your name is " + fullName;
document.getElementById("p2").textContent=age;
document.getElementById("p3").textContent =student ;

// aritthmetric also works like c++
let students =30;
students+=1; // this style is known asugument assignment operator;

console.log(students)
// when exponent we use double **
students=students**2;
console.log(students);
// remaider is use the modules operator%
//example
let number1=12;
number1 = number1 %2;
console.log(number1)// the remaider will be 0 in this case;
// this work the same as c++

// to increment a value by one 1 we can the increment operator in c++
number1++;
number1--;
