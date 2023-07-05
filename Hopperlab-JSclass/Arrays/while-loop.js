let num = [3,5,10,30,8,6];
let i = 0;
let sum = 0;
// let multiply = 1;
while(i<num.lenght){
    console.log(num[i]);
    sum+=num[i]
    // multiply*=num[i]

    i++;
}
console.log({sum});
// console.log({multiply});

let num1 = [3,5,10,30,8,6];
let j = 0;
let multiply = 1;
while(j<num1.length){
    console.log(num[j]);
    multiply*=num1[j];
    j++;
}
console.log({multiply});