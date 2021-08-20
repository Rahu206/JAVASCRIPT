let STATUS = Math.floor(Math.random()*10)%3

let IS_PARTTIME=1
let IS_FULLTIME=2

let PARTTIME_HOUR=4
let FULLTIME_HOUR=8

let WAGE_PER_HOUR=20


function getEmployeeHours(empcheck){
switch(empcheck){
case IS_PARTTIME:
    console.log("Employee is Part Time")
    return PARTTIME_HOUR
    
case IS_FULLTIME:
     console.log("Employee is Full Time")
     return FULLTIME_HOUR
     
default:
     return 0;
}
}
let employee_wage = emp_hour*WAGE_PER_HOUR
console.log ("Employee wage is : "+employee_wage)
