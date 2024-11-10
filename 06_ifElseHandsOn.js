//1. Function to Check Even or Odd
function checkEvenOdd(number) {
    return number % 2 === 0 ? "EVEN" : "ODD";
}

// Example usage:

console.log(`Is check number 45 even or odd : ${checkEvenOdd(45)}`);// ODD
console.log(`Is check number 70 even or odd : ${checkEvenOdd(70)}`); // EVEN
console.log(`Is check number 67 even or odd : ${checkEvenOdd(67)}`); // ODD
console.log(`Is check number 98 even or odd : ${checkEvenOdd(98)}`); // EVEN
console.log(`=============================================================`);


//2. Function to Check Voting Eligibility
function isEligibleToVote(age) {
    return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}

// Example usage:
console.log(`Check if person is eligible for vote or not, age = 18 : ${isEligibleToVote(18)}`); // Eligible to vote
console.log(`Check if person is eligible for vote or not, age = 20 : ${isEligibleToVote(20)}`); // Eligible to vote
console.log(`Check if person is eligible for vote or not, age = 17 : ${isEligibleToVote(17)}`); // Not Eligible to vote
console.log(`Check if person is eligible for vote or not, age = 40 : ${isEligibleToVote(40)}`); // Eligible to vote
console.log(`=============================================================`);



//3. Function to Check String Length
function checkStringLength(str) {
    return str.length > 10 ? "More than 10 characters" : "10 characters or less";
}

// Example usage:
console.log(`Check if string contains more than 10 character or not, "JavaScript - Es6" : ${checkStringLength("JavaScript - ES6")}`); // More than 10 characters

console.log(`=============================================================`);


//4. Function to Check if String Starts with "Java"
function startsWithJava(str) {
    return str.startsWith("Java") ? "Starts with Java" : "Does not start with Java";
}

// Example usage:
console.log(`Check if string starts with “Java” and invoke the FE for, "JavaScript Language" : ${startsWithJava("JavaScript Language")}`); // Starts with Java
console.log(`Check if string starts with “Java” and invoke the FE for, "Programming Language" :${startsWithJava("Programming Language")}`); // Does not start with Java