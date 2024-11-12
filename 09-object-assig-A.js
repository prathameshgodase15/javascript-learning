// Step 1: Create the professor object
let professor = {
    name: "Dr. Sachin Tambe",
    age: 45,
    subject: "Computer Science",
    university: "Pune University",
    yearsOfTeaching: 20,
    //city: "Pune",
    degrees: {
        engineering: "Computer Science",
        PhD: "Advanced Computing",
        masters: "Software Engineering"
    },
    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};

// Step 5: Add new property totalExperience
console.log(`* Add new property totalExperience`);
professor.totalExperience = "14 years";
console.log(professor);

// Step 6: Modify existing property (e.g., yearsOfTeaching)
console.log(`* Modify existing property (e.g., yearsOfTeaching)`);
professor.yearsOfTeaching = 21;
console.log(professor);

// Step 7: Add a new certificate at the 2nd index of the array certificates
console.log(`* Add a new certificate at the 2nd index of the array certificates`);
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);



// Step 8: Log the last element of the array certificates
console.log(`* Log the last element of the array certificates `);
console.log(professor.certificates[professor.certificates.length - 1]);

// Step 9: Traverse the array using for of loop
console.log(`* Traverse the array using for of loop`);
for (let certificate of professor.certificates) {
    console.log(certificate);
}