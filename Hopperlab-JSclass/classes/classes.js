class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('Hello');
    }

};

let person = new Person("Jane",50);
console.log(person);
person.greet();

class student extends Person{
    constructor(name,age){
super(name,age)        
    }
}
let students = new student("Henry",45);
console.log({student});

student.isPrototypeOf.height = "6ft";
console.log(student.height);

// inheritance
class Sister extends Person{
    constructor(name,age){
        super(name,age);
        this.name = name;
        this.age = age;
        this.race = 'white'
    }
}
let sister = new sister()
