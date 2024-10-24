// Write any two function with no arguments & no return type as per your choice & log message on console.
function helloWorld(){
    console.log("Hello World");
    console.log("================");  
}
helloWorld();

function myLife(){
    console.log("My Life");
    console.log("================");  
}
myLife();

// WAF personalDetails with arguments namely firstName, lastName, collegeName.
function personalDetails(firstName, lastName, collegeName){
    console.log("First Name : Prathamesh");
    console.log("Last Name : Godase");
    console.log("College Name : Sangamner College Sangamner"); 
    console.log("================");
    
}
personalDetails();

// WAF with 3 Parameter or arguments and it should log the addition. Function name: addThreeValues()

function addThreeValues(n1, n2, n3){
    console.log("Addition is: ", n1, n2, n3);
    var result = n1 + n2 + n3;
    return result;
}
var returnValue = addThreeValues(10.23, 600, 40);
console.log("Addition of Three Number: ", returnValue);

addThreeValues("Hello","Good", "Morning");

