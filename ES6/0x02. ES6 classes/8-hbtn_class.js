

export class HolbertonClass{
    constructor(size, location){
        this._size = size;
        this._location = location;
    }
    get size(){
        return this._size;
    }

    get location(){
        return this._location;
    }

    // to get the return size we use valueOf size

    valueOf (){
        return this._size;
    }

    // to get the return string we use toString  location

    toString(){
        return this._location;
    }
}