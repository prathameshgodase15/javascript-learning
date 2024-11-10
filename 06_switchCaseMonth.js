//Given a month number then log the name of the month
//  1 —- January 2 —-- February ………………….. 12 —-- December
//   Don;t forget to add the default case. Invoke 
//   function monthOfYear(0 ) for monthOfYear( 2), monthOfYear( 5), monthOfYear(12 ), monthOfYear( 15 ), monthOfYear( 100)

function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Invalid month number");
            break;
    }
}

// Invoking the function with specified month numbers
monthOfYear(0);    // Invalid month number
monthOfYear(1);    //January
monthOfYear(2);    // February
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);    // May
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);   // December
monthOfYear(15);   // Invalid month number
monthOfYear(100);  // Invalid month number