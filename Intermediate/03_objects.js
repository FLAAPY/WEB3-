//singelton in later part 
 // object literals 
const mySym = Symbol("Key1")

const flaapy = {
    name: "Flaapy",
    age: 23,
    location: "Delhi",
    email:"flaapy@onboard.com",
    lastlogindays: ["Monday","Tuesday"],
    [mySym]: "Key1"
 }
 // now accessing the datails 
 console.log(flaapy.email); //accessing either by.
 console.log(flaapy["email"]); //accessing by []
 console.log(flaapy[mySym]); //accessing symbol

 flaapy.email = "flaapy@google.com"
//Object.freeze(flaapy)
 console.log(flaapy);
  
 flaapy.greeting = function(){
   console.log("hello");
 }

 console.log(flaapy.greeting());

 flaapy.greetingtwo = function(){
   console.log(`hello, ${this.name}`);
   console.log(flaapy.greetingtwo());
 }