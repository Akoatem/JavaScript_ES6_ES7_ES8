import { Building } from "./5-building.js";

export class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        super(sqft) // inherit from the parent class Building
        this._floors = floors;
    }
    get floors(){
        return this._floors;
    }
    set floors(value){
        this._floors = value;
    }

    evacuationWarningMessage(){
        return `Evacuate slowly the ${this.floors} floors`
    }
}