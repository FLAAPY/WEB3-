// Immeddiately Invoked Fuction Expression (IIFE)
// It's used to remove the global scope pollution 

(function  chai() {
    console.log(`DataBase Connected`);
})();

 ( () =>  {
    console.log((`DB CONNECTED TWO`));
 })()