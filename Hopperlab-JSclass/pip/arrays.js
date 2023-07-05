let num = [3,6,8,25,7,5,7];

console.log(num.length);

let multiples = num.map(iteim=>iteim*2);
console.log({multiples});

//forEach requires you to declare an empty array outside.Returns undefined if not declared an empty array
let triples =[];
num.forEach(item=>{
    triples.push(item*2)
});
console.log({triples}); 

//Returns the ones which have passed the condition and leave the others
let less = num.filter(item=>item <10);
console.log({less});

//returns the first occurence of the number if it's in the list and undefined if its not there
let getSeven = num.find(item => 7);

