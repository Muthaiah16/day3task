let obj1 ={name:"hari",age:22};
let keys1= Object.keys(obj1).sort();
console.log(keys1)
let obj2 ={age:22, name:"hari"};
let keys2 = Object.keys(obj2).sort();
if (JSON.stringify(keys1)===JSON.stringify(keys2)){
    console.log("Equal")
}
else{
    console.log("Not Equal")
}