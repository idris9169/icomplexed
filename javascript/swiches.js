let day=8;
switch(day){
    case 1: console.log('it is monday');
    break;
    case 2: console.log('it is tuesday');
    break;
    case 3: console.log('it is wednesday');
    break;
    case 4: console.log('it is thursday');
    break;
default:console.log("invalid day");
}
// more complex example
let testscore =89;
let lettergrade;
switch(true){
    case testscore>=90: lettergrade=" A";
    break;
    case testscore>=80: lettergrade=" Bv";
    break;

}
console.log(lettergrade);