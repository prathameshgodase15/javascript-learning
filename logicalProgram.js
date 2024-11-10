//1. Count the even numbers from the array
var array = [10, 20, 45, 30, 77, 60];
var evenCount = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenCount++;
    }
}

console.log("Count of even numbers in array = [10, 20, 45, 30, 77, 60]  is : ", evenCount);

//2. Count the vowels including lower and upper case
const myLove = "I Love only JavaScript";
let vowelCount = 0;
const vowels = "aeiouAEIOU";

for (let i = 0; i < myLove.length; i++) {
    if (vowels.includes(myLove[i])) {
        vowelCount++;
    }
}

console.log(`Count of vowels in given string "I Love only JavaScript" is : ${vowelCount}`);

//3. Count the occurrences of the character 'a' (including upper and lower case)
const sentence = "JavaScript LANGUAGE";
let aCount = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'a' || sentence[i] === 'A') {
        aCount++;
    }
}

console.log(`Count of 'a' characters in given sentence "JavaScript LANGUAGE"  is : ${aCount}`);