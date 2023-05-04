"use strict";
class User {
    constructor(userName) {
        this.userName = userName;
        this.userFamily = [];
    }
    greeting() {
        console.log('Bom dia ' + this.userName);
    }
    addFamily(families) {
        this.userFamily.push(families);
    }
    printFamilyInformation() {
        console.log(this.userFamily.length);
        console.log(this.userFamily);
    }
}
const sam = new User('Sam');
sam.addFamily('Dad');
sam.addFamily('Mom');
sam.addFamily('Brother');
sam.addFamily('Sister');
sam.addFamily('Cousin');
sam.greeting();
sam.printFamilyInformation();
