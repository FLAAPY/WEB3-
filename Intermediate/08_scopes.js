

if (true) { //{} inside thsi is block scope & outside this is global scope
    let a = 10
    const b = 20 
    var c = 30
}

console.log(a); // will not be printed 
console.log(b); // will not be printed 
console.log(c); // will print 

// when we check scope in code enviornment through node that scope is different from when we check scope through browser 
