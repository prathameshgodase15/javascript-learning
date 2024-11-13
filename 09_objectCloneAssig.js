//create the object -> banksbi using literals with at least 4 properties
const bankSbi = {
 bankname : "State Bank Of India",
 bankAccNo : "101212128978",
 bankIfseNo : "SBI0090",
 bankStaff : "05"
}

const bankLocation = {
 street : "Karve road",
 city : "Pune",
 pin : "411052"
}

console.log(`============ Step 1 : Cloned BankSbi Object ===============`);
const clonedBankSbi = Object.assign({  }, bankSbi);
console.log(clonedBankSbi);

console.log(`============ Step 2 : Cloned BankLocation Object ===============`);
const clonedBankLoc = Object.assign({  }, bankLocation);
console.log(clonedBankLoc);

const rateOfInterest = {
 homeLoneInterest : 6.5,
 personalLoanInterest : 13.5,
 dueInterest : 18.5,
}

console.log(`============ Merge the Step 1, Step 2, Step 4 into new object = sbiDetails =============`);
const sbiDetails = Object.assign({  }, bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);

console.log(`========== Traverse this merged object After Step 5 ============`);
for (const key in sbiDetails) {
    console.log(`${key} => ${sbiDetails[key]}`);
    
}

