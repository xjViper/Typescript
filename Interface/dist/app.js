"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n, a) {
        this.name = n;
        if (a) {
            this.age = a;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person('Max', 99);
user1.greet('Hi there - I am');
console.log(user1);
