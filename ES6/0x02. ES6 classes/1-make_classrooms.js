// Import the ClassRoom class from 0-classroom.js.

// Implement a function named initializeRooms. It should return an 
// array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).

import { ClassRoom } from "./0-classroom.js";

function initializeRooms(){
    const class1 = new ClassRoom(19);
    const class2 = new ClassRoom(20);
    const class3 = new ClassRoom(34);

    const classLists = [class1,class2,class3] // paas in all the classes in the array
    return(classLists);

}

export {initializeRooms};