// adding objects in array 
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "hello flaapy"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

// Maps 
const map =new Map()
map.set('IN', "INDIA")
map.set('USA', "United States Of America")

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}

const myobject = { //objects are not iterateble 
    'game1' : 'NFS',
    'game2' : 'Spiderman' 
}

for (const [key,value] of myobject) {
    console.log(key, ':-' , value)
}