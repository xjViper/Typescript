enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [Role.ADMIN, 'ADMIN'],
};

let favoriteActivies: string[];
favoriteActivies = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
