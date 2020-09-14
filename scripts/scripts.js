// encapsulation, inheritance, polymorphism

class Animal { // es 6
  constructor(name) {
    this._name = name;
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  getName() {
    return this._name;
  }

  makeSound() {
    return '';
  }

  sayHello() {
    console.log(`Hello my name is ${this._name}! I say ${this.makeSound()}`);
  }
}


class Mammal extends Animal {

  constructor(name, numberOflegs) {
    super(name);
    this._numberOfLegs = numberOflegs;
  }

  sayHello() {
    console.log(`Hello, I have ${this._numberOfLegs} legs and my name is ${this._name}. I say ${this.makeSound()}!`);
  }
}


class Dog extends Mammal { // es 6
  makeSound() {
    return 'Bark';
  }
}

class Cat extends Mammal {
  makeSound() {
    return 'Meow';
  }
}

const buzz = new Dog('Buzz', 4);

buzz.sayHello();

const fluffy = new Cat('Fluffy', 3);

fluffy.sayHello();

console.log({buzz, fluffy});



class Human {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  getName() {
    return this._name;
  }

  setAge(age) {
    if (typeof age === 'number') {
      this._age = age;
    }
  }

  getAge() {
    return this._age;
  }

  addFriends() {
    for (const firendName of arguments) {
      if (typeof firendName === 'string') {
        this._friends.push(firendName);
      }
    }
  }


  getFriends() {
    return this._friends;
  }
}


const bob = new Human('Bob', 25);

console.log(bob);

console.log(bob.getFriends());

bob.addFriends('Mike', 'Jack', 'John', 'Jane', 1221, 12, 12121);

bob.addFriends('Chris');

bob.addFriends('Kith', 'James');


console.log(bob.getFriends());