function one() {  //child function can access parent functions 
    const username = "flaapy"

    function two() {
        const website = "youtube"
        console.log(username);
    
    }
    //console.log(website);
    two()
    
}
one()

//++++++++++INTERESTING+++++++++++
//ways to describe a function 
function addone(num) {
    return num + 1    
}
addone(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)
