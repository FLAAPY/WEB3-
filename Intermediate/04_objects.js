//singelton / constructor method 
// const tinderUser = new object () singelton method
// const tindeUser2 = {} Non Singelton Method 
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "flaapy"
tinderUser.isLoggedIn = false  
// const regularUser = {
//     email: "flaapy@gamil.com",
//     fullname: {
//         userFullname: {
//             firstname: "flaapy",
//             lastname: "god"
//         }
//     }
// }
// console.log(regularUser.fullname.userFullname.firstname + " " + regularUser.fullname.userFullname.lastname);


// const obj1 = {1: "a", 2: "b"}
// const obj2 = {2: "a", 4: "b"}
// // to merge the objects 
// const obj3 = Object.assign({}, obj1, obj2) // or another method to use the spread operator (...obj1,...obj3)
// console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
