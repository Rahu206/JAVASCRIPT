var sum=0;
  //create function for calulate value of harmonic
function harmonicNumber(number)
  { 
       for(var i=1;i<=number;i++)
        {
            sum+=(1/i);
        }

console.log("Total Sum="+sum);
  }
//take input fron user for printing nth value harmonic number
const ps = require("prompt-sync")
const prompt = ps();
const number = prompt('Enter the number : ');

harmonicNumber(number);