var myString: string;
myString = "Bee stinger";
myString = "9"; // must be assigned a string value, not integer

function sayHello(name: string) {
  return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
console.log(sayHello("9")); // parameter must be a string

function fullName(firstName: string, lastName: string, middleName: string) {
  if (middleName.length > 0) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
  } else {
    let fullName = `${firstName} ${lastName}`;
    return fullName;
  }
}
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones", "")); // if middle name is blank, set if statement to only log first and last

interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student) {
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${
    ninja.belts
  } belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
};
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4 // this field in jay's creation was misspelled. belt v belt(s)
};
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

class Ninja {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = `${firstName} ${lastName}`;
  }
  debug() {
    console.log("Console.log() is my friend.");
  }
}
// This is not making an instance of Ninja, for some reason:
const turing = new Ninja("Alan", "Turing"); // must include constructor parameters on instance creation

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
  return `Ready to whiteboard an algorithm, ${programmer.fullName}?`;
}
// Now this has problems:
console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));
let square = x => {
  return x * x;
}; // must return something
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => x * y; // requires parenthesis for multiple params
// Nor is this working:
var math = (x, y) => {
  // was missing arrow notation for function
  let sum = x + y;
  let product = x * y;
  let difference = Math.abs(x - y);
  return [sum, product, difference];
};

class Elephant {
  constructor(public age: number) {}
  birthday = () => {
    // added arrow notation w/ zero param
    this.age++;
  };
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000);
setTimeout(function() {
  console.log(`Babar's age is ${babar.age}.`);
}, 2000);
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
