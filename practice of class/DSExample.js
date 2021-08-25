
let employees =["Rahul","Naresh","Ishu","Meghna"]
let numbers=[1,2,4,9,25,45,38,33,85]
console.log(numbers.filter)
function filterEvenNumbers(arr){
    let oddNumbers=[];
    for(let number of arr){
    if (number%2!=0){
     oddNumbers.push(number)
    }
}
    return oddNumbers;
}
console.log(filterEvenNumbers(numbers)); 