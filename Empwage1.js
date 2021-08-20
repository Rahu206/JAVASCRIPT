let STATUS = Math.floor(Math.random()*10)%3

let IS_PARTTIME=1
let IS_FULLTIME=2

let PARTTIME_HOUR=4
let FULLTIME_HOUR = 8

let WAGE_PER_HOUR=20
let emp_hour = 0

switch(STATUS){
case IS_PARTTIME:
    emp_hour=PARTTIME_HOUR
    break;
case IS_FULLTIME:
     emp_hour=FULLTIME_HOUR
     break;
default:
     emp_hour=0;
}

let employee_wage = emp_hour*WAGE_PER_HOUR
console.log ("Employee wage is : "+employee_wage)

