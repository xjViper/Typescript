//class

abstract class User {
  //protected id: number;
  //public userName: string;
  private userFamily: string[] = [];

  constructor(
    /*id: number, userName: string private readonly id: number,*/
    public userName: string
  ) {
    //this.id = id;
    //this.userName = userName;
  }

  abstract greeting(this: User): void;

  addFamily(families: string) {
    this.userFamily.push(families);
  }

  printFamilyInformation() {
    console.log(this.userFamily.length);
    console.log(this.userFamily);
  }
}

class Admin extends User {
  isAdmin: boolean;
  private static instance: Admin;

  //private constructor para não criar usando "New" e sim chamando o método getInstance nesse caso
  private constructor(adminName: string, private role: string) {
    super(adminName);
    this.isAdmin = true;
  }

  static getInstance() {
    if (Admin.instance) {
      return this.instance;
    }
    this.instance = new Admin('Jobson', 'GM');
    return this.instance;
  }

  static createUser(name: string) {
    return { name: name };
  }

  get adminRole() {
    if (this.role) {
      return this.role;
    }
    throw new Error('No Role Found');
  }

  addRole(job: string) {
    this.role = job;
  }

  set adminRole(roleName: string) {
    if (!roleName) {
      throw new Error('Please i need a job role');
    }
    this.addRole(roleName);
  }

  greeting() {
    console.log(`Hello ${Admin.name}`);
  }
}

//const sam = new Admin('Jobson', 'GM');
const sam = Admin.getInstance();

sam.addFamily('Dad');
sam.addFamily('Mom');
sam.addFamily('Brother');
sam.addFamily('Sister');
sam.addFamily('Cousin');

sam.greeting();

sam.printFamilyInformation();

const user1 = Admin.createUser('jv');
console.log(user1);
// const samCopy = { id: 1, userName: 's', greeting: sam.greeting };

// samCopy.greeting();
