// creating an object
let person ={
    name:"Sheila",
    age:20,
    height:"5ft3Inch",
    friend:{
        name:"Brenda",
        age:20
    }
}

let student = new Object();
student.name="Mary"  //adding a property(notation)
console.log(person.age); //log a value(index)
console.log(person['name']);
console.log(person.friend.name); 
// console.log(person.friend.age);
console.log(person['friend']['age']);
console.log({student});

person.age = 23;
person.school = 'AkiraChix';
console.log({person});

let person2 = Object.assign(person); //cloning an object
console.log({person2});
let keys = Object.keys(person);
console.log({keys});
let values = Object.values(person);
console.log({values});

