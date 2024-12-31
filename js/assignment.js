"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;
    // Write the logic to decide if the variable "num" is even or odd
    // and set the element's value the string "Even" or "Odd" accordingly
   if (num % 2 === 0) {
    evenOrOddElement.textContent = "Even";
   } else {
   evenOrOddElement.textContent = "Odd";
   }
   
}

function sumTheNumbers() {
    let sum = 0;
    for (let i =1; i <= 10; i++) {
        sum += i;
    }
    sumTheNumbersElement.textContent =  sum;

    // Write the logic to sum the numbers 1 through 10
    // using a for loop. Check the expected output
    // on the assignment page

}

function createNumberArray() {
    const numberArray = [];
    let i = 1;
    while (i <= 10) {
        numberArray.push(i);
        i++;
    }
    createNumberArrayElement.textContent = numberArray.join(", ");



    // Write the logic that loops 10 times and adds the value
    // to numberArray each iteration. Check the expected output
    // on the assignment page

}

function render() {
 evenOrOdd();
 sumTheNumbers();
 createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});
