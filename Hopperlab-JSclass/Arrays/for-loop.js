let num =[3,5,10,30,8,6];
for(let element of num){
    console.log(element);
}

for(let i =0; i<num.length;i++){
    if(i === 2){
        break;
        
    }
    console.log("option3",num[i]);
    
}
for(let j =0; j<num.length;j++){
    if(j === 3){
        continue;
        
    }
    console.log("continue",num[j]);
}
let array =[10,20,30,40,50];
for (let r=0;r<array.length;r++){
    console.log(r)
}