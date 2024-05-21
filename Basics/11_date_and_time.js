// Dates

let todayDate = new Date()
console.log(todayDate);
console.log(todayDate.toString());
console.log(todayDate.toLocaleDateString()); //  month-date-year
console.log(todayDate.toISOString());
console.log(todayDate.toJSON());
console.log(todayDate.toLocaleTimeString()); //hours:minutes:seconds
console.log(todayDate.toUTCString());

console.log(typeof todayDate); //object

let createddate = new Date(2023,0,23) // months start with 0 in JS
console.log(createddate.toDateString());

// another method 
let newdate =  new Date("2024-05-21")
console.log(newdate.toLocaleDateString());

// timestamp 
let timestamp =  Date.now()
console.log(timestamp);
console.log(newdate.getTime());

// converting to milisecond 
console.log(Math.floor(Date.now()/1000));

// some new 
let anotherdate = new Date()
console.log(anotherdate.getMonth());

// cutomizing the date format 
console.log(anotherdate.toLocaleString('default', {
    weekday: "long"
}))