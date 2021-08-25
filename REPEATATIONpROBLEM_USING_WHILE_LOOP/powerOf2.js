//take input from user
var ps = require("prompt-sync")
var prompt = ps();
let number = prompt('Enter the range upto which you want to calculate powerNumber : ');

    let x = 1;
    let i = 1;
    while(i<= number){
        x = x * 2;
        console.log(x);
        i++;
        if(x == 256){
            break;
        }
    }