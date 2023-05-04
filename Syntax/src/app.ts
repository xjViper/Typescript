//let and const

//const userName = 'Max';

//let age = 29;

const add = (a: number, b: number) => a + b;

const addArrow = (a: number, b: number) => {
  return a + b;
};

const addN = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNums = addN(5, 10, 2, 3.7);

const hobbies = ['Sports', 'Cooking'];

//const hobby1 = hobbies[0];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const person = {
  firstName: 'Max',
  age: 30,
};

const { firstName, age } = person;
console.log(person, firstName, age);
