//way 1
const obj = {
    name : "Tanishq",
    email : "tanishq901.be22@chitkara.edu.in"
}

//way 2
const user1 = new Object();
user1.name = "Maverick";
user1.email = "t@gmail.com";

//way 3 modern js ES6 Class
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

const u1 = new User("Mav","m@gmail.com");

//way 4 Using Object.create
const parent = {
  greet() {
    console.log("Hello");
  }
};

const child = Object.create(parent);
child.name = "Ram";
child.greet();



//for notes refer hand_made sheet