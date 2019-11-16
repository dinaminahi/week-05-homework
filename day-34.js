//https://www.codewars.com/kata/speedcode-number-3-x-fun-with-es6-classes-number-5-dogs-and-classes/train/javascript

class Labrador extends Dog {
  constructor(name, age, gender, master) {
   super(...arguments);
    this.species = "Labrador";
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}


//https://www.codewars.com/kata/55a144eff5124e546400005a


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = name + 's age is ' + age;
  }
}


//https://www.codewars.com/kata/basic-subclasses-adam-and-eve/train/javascript

class God{
  static create(){
    return [new Man(), new Woman()];
  }
}

class Human {}

class Man extends Human {}

class Woman extends Human {}
