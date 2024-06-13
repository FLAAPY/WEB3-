//const balance = 1000
//if (balance > 500) console.log("richie"),console.log("wowow"); // show hand notation not recommended 
    
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");    
// } else if (balance < 1250) {
//     console.log("less than 1250");
// }

const userLoggedIn = true 
const debitcard = true
const loggedInfromemail = true
const loggedinfromgoogle = false
if (userLoggedIn && debitcard) {
    console.log("allowed to buy courses");    
}
if (loggedInfromemail || loggedinfromgoogle) {
    console.log("allowed to log in");
    
}