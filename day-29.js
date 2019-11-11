//https://www.codewars.com/kata/how-new-works/train/javascript

let myObj = {};

myObj.__proto__ = MyObject.prototype;

myObj.__proto__.constructor = MyObject;

MyObject.call(myObj);


//https://www.codewars.com/kata/replicate-new/train/javascript

function nouveau (Constructor, ...args) {
    
    this.__proto__ = Constructor.prototype;
    this.__proto__.constructor = Constructor;
   
    return  Constructor.bind(this, ...args)();
}
