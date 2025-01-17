//Problem 01
function convertCase(str) {
  let upperCaseStr = str.toUpperCase();
  let lowerCaseStr = str.toLowerCase();
  return `${upperCaseStr}, ${lowerCaseStr}`;
}
console.log(convertCase("JavaScript"));


//Problem 02
let str = "JavaScript";
let word = "Script";
if (str.includes(word)) {
  console.log(`The string "${str}" contains the word "${word}".`);
} else {
  console.log(`The string "${str}" does not contain the word "${word}".`);
}

//Problem 03

let numbersArray = [1, 2, 3, 4];

numbersArray.push(5, 6);
numbersArray.pop();

console.log(numbersArray);

//Problem 04
const originalArray = [10, 20, 30, 40];
const subArray = getFirstThreeElements(originalArray);

function getFirstThreeElements(arr) {
  return arr.slice(0, 3);
}

console.log(subArray);


//Problem 05
function isGreaterThanFifty(num) {
  if (num > 50) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(isGreaterThanFifty(60));
console.log(isGreaterThanFifty(40)); 

//Problem 06
function checkNumber(num) {
  if (num > 100 && num % 2 === 0 && num > 0) {
      console.log("The number is positive, even, and greater than 100.");
  } else {
      console.log("The number does not meet all the conditions.");
  }
}
checkNumber(170);


//Problem 07
function findGrade(marks) {
  if (marks >= 90) {
    return 'A';
  } else if (marks >= 80) {
    return 'B';
  } else if (marks >= 70) {
    return 'C';
  } else {
    return 'Fail';
  }
}
console.log(findGrade(90)); 

//Problem 09
function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(15, 25);
console.log(result);

//Problem 10
function retunName(name) {
  return `Hello, ${name}!`;
}
console.log(retunName("Farid"));

//Problem 11
document.getElementById("content").innerText = "Hello, World!";

//Problem 12
let box = document.querySelector('.box');
box.style.backgroundColor = 'lightblue';

//Problem 17
const userPassword = document.getElementById('userpassword');
const button = document.getElementById('btn');


let show = false;

button.addEventListener('click', ()=>{


    show= !show;

    if(show){
        userPassword.setAttribute('type', 'Text');
        button.setAttribute('class', 'fa-solid fa-eye-slash')
    
    }else{
        userPassword.setAttribute('type', 'password');
        button.setAttribute('class', 'fa-solid fa-eye')
    }

})


//Problem 19
let problem19Numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < problem19Numbers.length; i++) {
  console.log(problem19Numbers[i]);
}


//Problem 20
let numbers = [10, 15, 20, 25, 30];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  }
}





