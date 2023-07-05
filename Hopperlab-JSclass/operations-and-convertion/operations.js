const num = 10;
const num2 = 30;

console.log(num+num2);
console.log(num-num2);
console.log(num*num2);
console.log(num/num2);
console.log(num%num2);

let a =4;
a++;
console.log(a);
a--;
console.log(a);

let x = 6;
x+=1;
// x= x+1
console.log(x);

console.log(num>=num2);

let age=10;
let age2="11";
console.log("losely equal",age==age2);
// (==)checks the value if its equal to the other and does not check the data type
console.log("losely not equal",age != age2);
// (!=)checks the value if its not equal to the other and does not check  the data type

console.log("strictly equal",age===age2);
// (===)checks the value and the data types,if both are numbers or strings it runs true and vice versa
console.log("strictly not equal",age!==age2);
// (!==) checks the value and the data type

if (age == age2 && num>= num2){
    console.log("and",true);
}
else{
    console.log("and false", false);
}
// it has two conditions
// if both passes its true,if one passes and another fails its false and vice versa












