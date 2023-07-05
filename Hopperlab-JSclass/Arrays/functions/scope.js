// global variable
let a =20; 
function add(b){
    console.log(a+b);
    // local variable cannot be accessed outside the function
    let fruit = 'Apple';
    console.log(fruit);
}
add(50);

function greet(){
    let hello ="hi";
    function talk(){
        let c = "hello there"
        console.log(`${hello} ${c}`);
    }
    talk();
}
greet();