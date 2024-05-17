// simple form to take user information 
const userName = "flappy"
// const variable are stored in memory and cannot be changed 
// string cant be stored directly in const value without ""
let accountEmail = "falppy@mdsn.co.in"
// letting any email
var accountPassword =  "flappy"
accountCity = "Delhi" // this is also a way to declare a variable but not adviced

// Now lets try to change the account username 
// userName = mario 
// this should create a error as const cannot be changed
/*
never use var due to scope issue 
*/

console.table([userName,accountEmail,accountPassword,accountCity])