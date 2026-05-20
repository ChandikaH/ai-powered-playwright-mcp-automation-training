interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet();

interface Student extends Person {
    grade: number;
}

const student: Student = {
    name: "Bob",
    age: 20,
    grade: 90,
    greet() {
        console.log(`Hi, I'm ${this.name}, a student with a grade of ${this.grade}.`);
    }
};

student.greet();

interface Employee extends Person {
    jobTitle: string;
}

const employee: Employee = {
    name: "Charlie",
    age: 40,
    jobTitle: "Software Engineer",
    greet() {
        console.log(`Hello, I'm ${this.name}, a ${this.jobTitle}.`);
    }
};

employee.greet();

class Manager implements Employee {
    name: string;
    age: number;
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}, a ${this.jobTitle}.`);
    }
}

const manager = new Manager("Dave", 45, "Project Manager");
manager.greet();