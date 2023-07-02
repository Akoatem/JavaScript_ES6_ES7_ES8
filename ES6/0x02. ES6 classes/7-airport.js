

export class Airport{
    constructor(name, code){
        this._name = name;
        this._code = code;
    }
    
    get name(){
        return this._name;
    }
    set name(val){
        if(typeof val === 'string'){
            this._name = val;
        }else{
            throw new Error(" value must be a string")
        }
    
    }
    
    get code(){
        return this._code;
    }
    
    set code(value){
        if(typeof value === 'string'){
            this._code = value;
        }else{
            throw new Error(" value must be a string")
        }
    
    }
    toString(){
        return `[abject ${this.code} ${this.name}]`;
    }
    
}