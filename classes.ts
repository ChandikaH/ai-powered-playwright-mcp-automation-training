class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Rex", 5);
dog.bark();
dog.move(10);
