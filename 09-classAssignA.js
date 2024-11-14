//Define Vehicle class
class Vehical{

    constructor(companyName, modelName, engineType, avg, price){
        this.companyName = companyName;
        this.modelName = modelName;
        this.engineType = engineType;
        this.avg = avg;
        this.price = price;

    }
    details(){
        console.log(`CompanyName:${this.companyName}, ModelName:${this.modelName}, EngineType:${this.engineType}, Avg: ${this.avg} ,Price:${this.price}`);
        
    }

}
//Creating 5 Object of vehical Class
console.log(`=================== Vehical Details =======================`);

console.log(`================ #Vehical1 =====================`);
const Vehical1 = new Vehical("MarutiSuzuki","Swift","Petrol", 22,"8L");
Vehical1.details();

console.log(`================ #Vehical2 =====================`);
const Vehical2 = new Vehical("Tata","Harrier","Diesel", 10,"25L"); 
Vehical2.details();

console.log(`================ #Vehical3 =====================`);
const Vehical3 = new Vehical("Hyundai","Creta","Diesel", 16,"14L"); 
Vehical3.details();

console.log(`================ #Vehical4 =====================`);
const Vehical4 = new Vehical("Toyota","Innova","Diesel", 10,"25L"); 
Vehical4.details();

console.log(`================ #Vehical5 =====================`);
const Vehical5 = new Vehical("Ford","Endeavour","Diesel", 7,"35L"); 
Vehical5.details();

// Define a class for College
class College {
    // Constructor to initialize the properties
    constructor(name, location, department, labs) {
        this.name = name;                 
        this.location = location;     
        this.department = department;
        this.labs = labs;
    }

    // Method to display the details of the college
    display() { console.log(`College Name: ${this.name} Location: ${this.location} Department: ${this.department} Labs: ${this.labs} `)
    }
}

console.log(`=================== College Details =======================`);

console.log(`============== #College 1 =================`);
const College1 = new College("Amrutvahini College Of Engineering", "Sangamner", 5, 14);
College1.display();

console.log(`============== #College 2 =================`);
const College2 = new College("Sangamner College", "Sangamner", 8, 15);
College2.display();

console.log(`============== #College 3 =================`);
const College3 = new College("MIT-WPU", "Kothrud, Pune", 8, 10);
College3.display();

console.log(`============== #College 4 =================`);
const College4 = new College("JSPM College", "Wakad", 4, 7);
College4.display();

console.log(`============== #College 5 =================`);
const College5 = new College("AGASTI INSTITUTE OF MANAGEMENT, COMPUTER APPLICATION AND RESEARCH (AIMCAR), AKOLE", "Akole", 4, 5);
College5.display();




