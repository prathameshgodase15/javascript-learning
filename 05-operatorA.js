 

 function squareOfWordLength(givenString){
    var givenStringLength = givenString.length;
    var result = givenStringLength * givenStringLength;
    return result;

 }
 var returnValue = squareOfWordLength("JavaScript");
 console.log(`Given string is: JavaScript and it's length square is: ${returnValue}`);
 
 var returnValue = squareOfWordLength("Google Chrome");
 console.log(`Given string is: JavaScript and it's length square is: ${returnValue}`);
 
 var returnValue = squareOfWordLength("Web Developer Smart");
 console.log(`Given string is: JavaScript and it's length square is: ${returnValue}`);
 
 function StringOperation(givenString){
    var strLength = givenString.length;
    var words = givenString.split(" ");
    var totalWords = words.length;
    var strDivision = strLength/ totalWords;
    console.log(`Total number of words : ${strDivision}`);
    var strMultiply = strLength * totalWords;
    console.log(`Multiple the total words available in string : ${strMultiply} `);

 }
 StringOperation("I am Angular Developer");