const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:'ruby',
    sw:'swift'
}
 for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// const coding = ["js","ruby","java","pythn","cpp"]
// coding.forEach(fucntion (val) {
//     console.log(val)
// }
// )