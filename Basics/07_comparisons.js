// some basic comparisons

// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2!=1);

console.log("2" > 1); // auto conversion of datatype
console.log("02"> 1);
// datatype must be same while comparing 
console.log(null<0);
console.log(null==0);
console.log(null >=0);

// comparison convert null to a number
// treating it a 0 therefore null >= 0 is true and null >= is false

// === strict check this will also check the datatype of the conversion 
console.log("2" === 2 ); // answer would be false 

//  Primitive data type (copied from memory and then given to you )
// 7 types : String , Number , Boolean , Null , undefined , symbol , BigInt

// 

// Reference data type (non primitive) (direct reference is give to you)
// array , objects , functions 

const heros = ["flaapy", "flaapy2"] //array
let objects = {
    name : "flaapy",
    age : 01,
} // {} inside this is object 

// function
const myFunction = function(){
    console.log("hi flaapy");
}    
// typeof is also a function 
// typeof function return function (function object)
// typeof symbol is symbol