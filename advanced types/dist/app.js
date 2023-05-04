"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('max', 6);
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'max',
    job: { title: 'ceo', descption: 'my own company' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userINP = undefined;
const storedData = userINP !== null && userINP !== void 0 ? userINP : 'DEFAULT';
console.log(storedData);
function printEmployeeInfo(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
printEmployeeInfo({ name: 'heitor', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const userInput = document.getElementById('user-input');
if (userInput) {
    userInput.value = 'Hi';
}
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a character',
};
