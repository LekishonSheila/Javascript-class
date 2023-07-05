let num=[24,true,"hello",38];
let num2= new Array(24,true,"hello",38);
console.log(num);
console.log(num2);
// push adds elements at the end of the array
num.push("fruits");
console.log(num);
// adds elements at the start
num.unshift("3")
console.log(num);
// removes last element from an array
num.pop();
console.log(num);
// removes first element from an array
num.shift();
console.log(num);
// adds at the centre
num[3]=8;
console.log(num);
// Given an array of numbers x return an array even where every iteim in x is multiplied by 5
let x = [5,8,2,87,33,67];
let even = x.map(function(item){
    return item * 5
})
console.log(even);
let result = x.forEach(function(iteim){
    return iteim * 5
})
console.log(result);
let newArray = num.concat(x);
console.log(newArray);

let tests = ["Angela", ...x];
console.log(tests);
let [a, b, ...c] = x;
console.log({a});
console.log({b});
console.log({c});

// map
// let arrs=[10,30,40,50,70];
// const newArr = arrs.map(function(element){
//     return element *4
// })
// console.log(newArr)
// or
let arrs=[10,30,40,50,70];
const newArr = arrs.map(element=>element*4)
console.log(newArr)


