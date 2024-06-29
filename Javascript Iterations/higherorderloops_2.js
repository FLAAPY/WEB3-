 const nums = [1,2,3,4,5,6,7,8,9]
// const newNums = nums.filter((num) => {
//     return nums > 4
// }) //filter use 


const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
    newNums.push(num)
    }
}
)
console.log(newNums);