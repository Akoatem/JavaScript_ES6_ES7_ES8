// Methods, static methods, computed methods names..... MONEY
// Implement a class named Currency:

//- Constructor attributes:
// code (String)
// name (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullCurrency that will return the attributes in the following format name (code)

class Currency{
    constructor(code, name){
        this._code = null;
        this._name = null;

        this.code = code;
        this.name = name;
    }

    get code(){
        return this._code;
    }

    set code(value){
        this._code = value;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
    
    displayFullCurrency(){
        return `${this.name} ${this.code}`
    }
}

export {Currency};