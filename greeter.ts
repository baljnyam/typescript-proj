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

// type compatibality

// interface Named {
//   name: string;
// }

// class Person {
//   name: String;
// }

// let p: Named;

// // ok, because of structural typing

// p = new Person();

// interface Named {
//   name: string;
// }

// let x: Named;

// let y = { name: "Alice", location: "Seattle" };

// x = y;

// function greet(n: Named) {
//   console.log("Hello, " + n.name);
// }

// greet(y); // ok

// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;

// y = x;
// x = y;

// enum EventType {
//   Mouse,
//   Keyboard
// }

// interface Event {
//   timestamp: number;
// }
// interface MouseEvent extends Event {
//   x: number;
//   y: number;
// }
// interface KeyEvent extends Event {
//   KeyCode: number;
// }

// function listenEvent(eventType: EventType, handler: (n: Event) => void) {}

// Javascript essential

// const userAccount = {
//   name: "Kieron",
//   id: 0
// };

// const pie = {
//   type: "Apple"
// };

// const purchaseOrder = {
//   owner: userAccount,
//   item: pie
// };

// console.log(purchaseOrder.item.type);

// const allOrders = [purchaseOrder];

// const firstOrder = allOrders[0];
// console.log(firstOrder.item.type);

// js function ess

// function addOldSchool(x, y) {
//   return x + y;
// }

// const anonymousOldSchoolFunction = function(x, y) {
//   return x + y;
// };

// const addFunction = (x, y) => {
//   return x + y;
// };

// const add1 = (x: any, y: any) => {
//   return x + y;
// };

// add1("hello", 23);

// Code Flow

// const user = [{ name: "Ah" }, { name: "Gemma" }, { name: "Tsin" }];

// const ah = users.find(u => u.name === "ah");

// if (ah) {
//   ah;
// } else {
//   ah;
// }

// const identifiers = ["Hello", "World", 24, 29];

// const randomIdentifier = identifiers[0];
// if (typeof randomIdentifier === "number") {
//   randomIdentifier;
// } else {
//   randomIdentifier;
// }

// const func = () => ":wave:";
// const asyncFunc = async () => ":wave:";

// const myString = func();
// const myPromiseString = asyncFunc();

// myString.length;

// myPromiseString.length;

// const myWrapperFunction = async () => {
//   const myString = func();
//   const myResolvePromiseString = await asyncFunc();
//   myString.length;
//   myResolvePromiseString.length;
// };

// const myThrowingFunction = async () => {
//   throw new Error("Do no call this");
// };

// const asyncFunctionCatching = async () => {
//   const myReturnValue = "Hello World";
//   try {
//     await myThrowingFunction();
//   } catch (error) {
//     console.error("myThrowingFunction failed", error);
//   }
//   return myReturnValue;
// };

// const exampleSquareRootFunction = async (input: any) => {
//   if (isNaN(input)) {
//     throw new Error("Only numbers are accepted");
//   }

//   if (input < 0) {
//     return { success: false, message: "Cannot square root negative" };
//   } else {
//     return { success: true, value: Math.sqrt(input) };
//   }
// };
// const checkSquareRoot = async (value: number) => {
//   const response = await exampleSquareRootFunction(value);
//   if (response.success) {
//     response.value;
//   }
// };
