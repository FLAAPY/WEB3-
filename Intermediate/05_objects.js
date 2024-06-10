// value extracting 

const course = {
    coursename: "flaapy to moon",
    price: "$99",
    courseInstructor:"flaapy ofcourse"
}
const {courseInstructor: instructor}= course // object destructuring 
//console.log(courseInstructor);
console.log(instructor);