import { Car } from "./10-car.js";


export class EVCar extends Car {
    constructor(brand, motor, color, range){
        super(brand, motor, color);
        this._range = range;
    }
    get range(){
        return this._range;
    }

    cloneCar(){
        const{brand, motor, color} = this;
        return new Car(brand, motor, color);
    }

}