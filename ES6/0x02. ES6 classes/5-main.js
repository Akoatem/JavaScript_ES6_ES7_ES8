import { Building, House } from "./5-building.js";


const myHouse = new House(1500);
console.log(myHouse.sqft); // Output: 1500
console.log(myHouse.evacuationWarningMessage()); // Output: Evacuate the house immediately!