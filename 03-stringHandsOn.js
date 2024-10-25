// Given s string: "   Hey you are doing good, keep it up   ";

function stringHandsOn(){
    var str = "   Hey you are doing good, keep it up   ";
    console.log(`1. Given String is : ${str}`);
    console.log(`2. Length of the string is : ${str.length}`);
    var result = str.trim();
    console.log(`3. After trim string is : ${result} and it's length ${result.length}`);
    console.log(`4. First char ${result.charAt(0)} and Last char ${result.charAt(result.length-1)}`);
    var resultValue = result.split(" ");
    console.log(`5. Total words available in string is : ${resultValue.length}`);
    var result1= result.indexOf("good");  
    console.log(`6. Index of word 'good' from the given string is :  ${result1}`);
    var result2 = result.substring(22);
    console.log(`7. Substring starting from index 22 is : ${result2} `);
    const endsWithUp = result.endsWith("up");
    console.log(`9. Check if the string ends with the word “up” after step 3 : ${endsWithUp}`);
    const startsWithHey = result.startsWith("Hey");
    console.log(`10. Check if the string starts with the word “Hey” after trimming : ${startsWithHey}`);
    
    
    
}
stringHandsOn(); //invoke the function