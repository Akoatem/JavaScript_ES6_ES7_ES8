class Animal{
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    };
     makeNoise(sound = 'loud noise'){
        console.log(sound);
     }
     get metaData(){
        return `Type: ${this.type}, Legs: ${this.legs}, Tail: ${this.tail}, Colour: ${this.colour}`
     }
     static return10(){ // this is use if you dont want to change anything
        return 10;
     }
}

// inheritance
class Cat extends Animal{
    constructor(type, legs, tail, colour){
        super(type, legs);
        this.tail = tail;
        this.colour = colour;
    }
    makeNoise(sound= 'meow'){ // to overide the makeNoise
        console.log(sound);
    }

}


let cat = new Cat('cat', 4);
cat.legs = 3;
cat.tail = true;
cat.colour = 'white';
cat.makeNoise();
//let dog = new Animal('dog', 4);

console.log(cat.metaData);
