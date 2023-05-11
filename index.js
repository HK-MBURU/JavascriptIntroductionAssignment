// question 1
let currentDate=new Date();

let dd=currentDate.getDate();
let mm=currentDate.toLocaleString('default',{month:'long'});
let year=currentDate.toLocaleString('default',{year:'numeric'});
console.log(`${mm}-${dd}-${year}`);
console.log(`${mm}/${dd}/${year}`);
console.log(`${dd}-${mm}-${year}`);
console.log(`${dd}/${mm}/${year}`);

// Question 2
let randNo= Math.floor((Math.random() * 10) + 1);

let guessNo=Number(prompt("Enter your Guess No"))

if(randNo==guessNo){
    alert("Good work");
}else{
    alert("Not matched")
}
// question 3
let num1=50
let num2=70
let diff1=(100-num1)**2
let diff2=(100-num2)**2

if(diff1>diff2){
    console.log("Num2 is Close to 100");
}else{
    console.log("Num1 is Close to 100");
}
// let num=Number(prompt("Enter any Number"))
if (100-num1)


// question 4
(function() {
    for (let i = 1; i <= 100; i++) {
       if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      }else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      }  else {
        console.log(i);
      }
    }
  })();

//   question 5
courses=["Computer Science","BBIT","Engneering","Nursing"]
let i=0
while(i<courses.length){
    console.log(`\n ${courses[i]}`);
    i++
}
  
