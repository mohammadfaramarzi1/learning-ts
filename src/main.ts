// class Person {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }

// const myPerson = new Person("Mohammad", "faramarzi.dev@gmail.com", 20);

// class Student extends Person {
//   lessons: string[];
//   constructor(name: string, email: string, age: number, lessons: string[]) {
//     super(name, email, age);
//     this.lessons = lessons;
//   }
// }

// const myStudent = new Student("ali", "ali@gmail.com", 22, ["ts", "js"]);
// console.log(myStudent);

// ///////////////////////////////

// class Person {
//   private static counts: number = 0;
//   constructor(
//     public name: string,
//     public age: number,
//     private lessons: string[]
//   ) {
//     Person.counts++;
//   }
//   get getLessons() {
//     return this.lessons;
//   }

//   public static getCounts() {
//     return Person.counts;
//   }
// }

// const person = new Person("ali", 20, ["js"]);
// const person2 = new Person("ali", 20, ["js"]);
// console.log(Person.getCounts());

// /////////////////////

// interface User {
//   name: string;
//   age: number;
// }

// const user: User = {
//   name: "Ali",
//   age: 20,
// };

// console.log(user);

// /////////////////////

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Teacher = {
//   name: string;
//   startDate: Date;
// };

// const showProp = (member: Admin | Teacher) => {
//   if ("startDate" in member) {
//     console.log(member.startDate);
//   } else if ("privileges" in member) {
//     console.log(member.privileges);
//   }
// };

// const reza: Teacher = {
//   name: "Reza",
//   startDate: new Date(),
// };

// const mmd: Admin = {
//   name: "mmd",
//   privileges: ["Ts", "js"],
// };

// showProp(reza);
// showProp(mmd);

///////////////////////////////////

// type Combine = string | number;

// const sumNumbers = (num1: Combine, num2: Combine): Combine => {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else if (typeof num1 === "string" && typeof num2 === "string") {
//     return num1.toString() + num2.toString();
//   }
// };

//////////////////////////////

// class Car {
//   constructor(public name: string, public color: string, public model: number) {
//     this.name = name;
//     this.color = color;
//     this.model = model;
//   }

//   drive(speed: number) {
//     console.log(`${this.name} drives ${speed} km/h`);
//   }
// }

// class Truck extends Car {
//   constructor(public name: string, public color: string, public model: number) {
//     super(name, color, model);
//   }

//   load(weight: string) {
//     console.log(`set ${weight}(kg) load on ${this.name}`);
//   }
// }

// const useCar = (car: Car | Truck) => {
//   if (car instanceof Truck) {
//     car.load("120");
//   } else if (car instanceof Car) {
//     car.drive(120);
//   }
// };

// const pride = new Car("Pride", "White", 1403);
// const benz = new Truck("Benz", "Orange", 1400);

// useCar(pride);
// useCar(benz)

//////////////////////////

// type Admin = {
//   type: "ADMIN";
//   name: string;
//   privileges: string[];
// };

// type Teacher = {
//   type: "TEACHER";
//   name: string;
//   startDate: Date;
// };

// const showProp = (member: Admin | Teacher) => {
//   switch (member.type) {
//     case "ADMIN": {
//       console.log(member.privileges);
//       break;
//     }
//     case "TEACHER": {
//       console.log(member.startDate);
//       break;
//     }
//     default: {
//       throw new Error("Invalid member!");
//     }
//   }
// };

//////////////////////////////////

// type Combine = string | number;

// function sumNumbers(num1: number, num2: number): number;
// function sumNumbers(num1: string, num2: string): string;

// function sumNumbers(num1: Combine, num2: Combine): Combine {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     return num1 + num2;
//   } else if (typeof num1 === "string" && typeof num2 === "string") {
//     return num1.toString() + num2.toString();
//   }
// }

///////////////////////////

// type Errors = {
//   type: string;
//   [prop: string]: string;
// };

// const loginFormErrors: Errors = {
//     type: "login",
//     name: "login"
// }

///////////////////////////////

// import { isLogin, User } from "./funcs.js";

// const user: User = {
//   name: "mmd",
//   age: 20,
//   email: "faramarzi",
// };

// console.log(isLogin(user));

/////////////////////////////////

namespace Saipa {
  export let car = "pride";
  export class Body {
    constructor(public name: string, public color: string) {
      this.name = name;
      this.color = color;
    }

    make() {
      console.log("car created successfully.");
    }
  }
}

let carName = Saipa.car;

let car = new Saipa.Body("pride", "white");
console.log(car);
