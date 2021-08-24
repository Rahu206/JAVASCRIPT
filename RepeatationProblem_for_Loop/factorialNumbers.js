//creating function for calculate factorial number using logic 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
function factorial(num) {
    
    if (num == 0 || num == 1)
      return 1;
    
    for (var i = num - 1; i >= 1; i--) {
      num = num * i; 
    }
    console.log("factorial", num);
}
//take input from user 
const ps = require("prompt-sync")
const prompt = ps();
const num = prompt('Enter the number of which you want to calculate factorial numbers : ');

factorial(num);