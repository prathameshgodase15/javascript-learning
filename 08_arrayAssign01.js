const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

// 1. Log the first and last element on console
console.log("First Element:", fruits_seasonal[0]);
console.log("Last Element:", fruits_seasonal[fruits_seasonal.length - 1]);

// 2. Add element → Papaya before the element ‘Banana’ and then log array on console
fruits_seasonal.unshift("Papaya");
console.log("After adding Papaya:", fruits_seasonal);

// 3. Remove ‘Mango’ from the array
const mangoIndex = fruits_seasonal.indexOf("Mango");
if (mangoIndex !== -1) {
    fruits_seasonal.splice(mangoIndex, 1);
}
console.log("After removing Mango:", fruits_seasonal);

// 4. Add element or insert an element ‘Pineapple’ at the last position
fruits_seasonal.push("Pineapple");
console.log("After adding Pineapple:", fruits_seasonal);

// 5. Insert an element - ‘Dragon Fruit’ before “Water Melon”
const watermelonIndex = fruits_seasonal.indexOf("Water Melon");
if (watermelonIndex !== -1) {
    fruits_seasonal.splice(watermelonIndex, 0, "Dragon Fruit");
}
console.log("After adding Dragon Fruit:", fruits_seasonal);

// 6. Replace an element ‘Orange’ with ‘Kiwi’
const orangeIndex = fruits_seasonal.indexOf("Orange");
if (orangeIndex !== -1) {
    fruits_seasonal[orangeIndex] = "Kiwi";
}
console.log("After replacing Orange with Kiwi:", fruits_seasonal);

// 7. Log the elements starting from index 1 to 4
console.log("Elements from index 1 to 4:", fruits_seasonal.slice(1, 5));

// 8. Only select last 3 elements and log on console: Use the length property
const lastThreeElements = fruits_seasonal.slice(-3);
console.log("Last 3 elements:", lastThreeElements);