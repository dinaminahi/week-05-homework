//https://www.codewars.com/kata/javascript-class-like-objects/train/javascript

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    } 
    toString() {
        return this.name + ' is a ' + this.type;
    }
}


//https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes/train/javascript

Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";
