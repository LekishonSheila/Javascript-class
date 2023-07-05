let student = {
    name:"Gift",
    age:2,
    introduce:function(){
        console.log("Hello");
        console.log('Hello my name is ${this.name}');
    }
}
student.introduce();
// console.log(student.introduce());
student.hobby=function(){
    console.log('I love swimming');
}
console.log({student});
student.hobby();
student.introduce();

