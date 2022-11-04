/* Title: person.class.ts
Author: Professor Krasso
Modified By: April Yang
Date: 10/18/2022
Description: Person class that implements a Person interface 
 */


import { IPerson } from "./person.interface";

// implements interface 
class Person implements IPerson {

    // creates two fields 
    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


// initiates new person object
let myName = new Person("April", "Yang");
console.log(`My name is ${myName.firstName} ${myName.lastName}`)