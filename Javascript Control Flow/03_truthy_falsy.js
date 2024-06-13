const userEmail = "flaapy.ai"

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Dont have user Email");
}

//++++++++Truthy and Falsy values+++++++++++++++++
//falsy , false , 0 ,-0,BigInt 0n,"",null, undefined , NaN

//truthy values
// "0","false"," ",[],{}, fucntion (){}


// to check the above empty array 
if (userEmail.length ===0) {
    console.log("array is empty");    
}


/// Nullish coalescing operator (??): null undefined 
let val1;
val1 = 5 ?? 10
console.log(val1);


// terniary operator
// condition ? true : false

const cocoprice = 100
cocoprice >= 80 ? console.log("less than 80") : console.log("more than 80");