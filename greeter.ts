// // function
// function greeter(person) {
//   return "Hello, " + person;
// }

// let user = "Jane User";

// document.body.textContent = greeter(user);

// interface

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "John", lastName: "User" };

// document.body.textContent = greeter(user);
// console.log(greeter(user));

// Class

// class Student {
//   fullName: string;
//   constructor(
//     public firstName: string,
//     public middleInitial: string,
//     public lastName: string
//   ) {
//     this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "User");

// document.body.textContent = greeter(user);

// numbers
// let isDone: boolean = false

// let decimal : number = 6;

// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;

// String
// let color: string = "blue";
// color = "red";

// let fullName: string = `bob bob`;
// let age: number = 37;
// let sentence: string = `Hello, my name is ${fullName}.
// I'll be ${age + 1} year old nex month. `;

// let sentence: string =
//   " Hello, my name is " +
//   fullName +
//   ".\n \n" +
//   "I'l be " + (age + q);

// array

// let list: number[] = [1, 2, 3];
// let list: Array<number> = [1,2,3];

// // tuple

// let x: [string, number];
// x = ["hello", 10] // ok
// x = [10, "hello"] // error

// accessing
// console.log(x[0].substring(1)); //ok
// console.log(x[1].substring(1)); //error, 'number' does not have 'substring'

// x[3] = "world"; // Error, Property '3' does not exist on type

//Enum

// enum Color {
//   Red,
//   Green,
//   Blue
// }
// let c: Color = Color.Green;

// // Any means any type might be

// let notSure: any = 4;
// notSure = "Maybe a string instead";
// notSure = false; // okay, definitely a boolean

// let list: any[] = [1, true, "free"];
// list[1] = 100;

// // void type

// function warnUser(): void {
//   console.log("This is my warning message");
// }
// let u: undefined = undefined;
// let u: null = null

// // never

// function error(message : string): never {
//   throw new Error(message);
// }

// // Inferred return type is never

// function fail() {
//   return error("Something failed")
// }

// function infiniteLoop(): never {
//   while (true) {}
// }

// Object

// declare function create(o: object | null): void;

// create({ prop: 0 }); // ok
// create(null); // ok

// create(42); //error
// create(string); //error
// //...error
// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;

// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;

