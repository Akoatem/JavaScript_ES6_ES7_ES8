// A Course, Getters, and Setters
// Implement a class named HolbertonCourse:

// Constructor attributes:
// name (String)
// length (Number)
// students (array of Strings)
// Constructor attributes:
// Make sure to verify the type of attributes during object creation
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.

class HolbertonCourse{
    constructor(name, length,students) {

        // you passed in empty contructor
        this._name = null;
        this._length = null;
        this._students = null;


        this.name = name;
        this.length = length;
        this.students = students;
        
    }

    // getter and setter operation here
     
    // getter name
    get name(){
        return this._name;
    }
    
    // setter name
    set name(val){
        if(typeof val === 'string'){
            this._name = val;
        }else{
            throw new Error('Value must be a string');
        }
    }

    //geter length

    get length(){
        return this._length;
    }

    // setter length

    set length(val){
        if(typeof val === 'number'){
            this._length = val;
        }else{
            throw new Error('The length must be a number');
        }

    }

    // getter students

    get students(){
        return this._students;
    }

    set students(val){
        if(Array.isArray(val) && val.every((student) => typeof student === 'string')){
            this._students = val;
        }else{
            throw new Error('Student must be an array of string');
        }
    }
}

export {HolbertonCourse};
