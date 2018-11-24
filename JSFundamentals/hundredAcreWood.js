let tigger = {
  character: "Tigger",
  greet: function() {
    console.log(
      "The wonderful thing about Tiggers is Tiggers are wonderful things!"
    );
  }
};
let pooh = {
  character: "Winnie the Pooh",
  greet: function() {
    console.log("Oh bother");
  }
};
let piglet = {
  character: "Piglet",
  greet: function() {
    console.log("Oh d-d-d-d-dear! I wasn't expecting company!");
  }
};
let bees = {
  character: "Bees",
  greet: function() {
    console.log("Buzz buzz buzz...");
  }
};
let robin = {
  character: "Christopher Robin",
  greet: function() {
    console.log("It is I, the great Robin!");
  }
};
let owl = {
  character: "Owl",
  greet: function() {
    console.log("Hoot hoot hoooooot!");
  }
};
let rabbit = {
  character: "Rabbit",
  greet: function() {
    console.log("I am a rabbit.");
  }
};
let gopher = {
  character: "Gopher",
  greet: function() {
    console.log("GOPHER!");
  }
};
let kanga = {
  character: "Kanga",
  greet: function() {
    console.log("Kanga roooooOOOO!");
  }
};
let eeyore = {
  character: "Eeyore",
  greet: function() {
    console.log("eeeyoooore");
  }
};
let heffalumps = {
  character: "Heffalumps",
  greet: function() {
    console.log("Welcome to the end of the road!");
  }
};

tigger.north = pooh;
pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;
pooh.south = tigger;
piglet.north = owl;
piglet.east = pooh;
bees.west = pooh;
bees.north = rabbit;
robin.west = owl;
robin.east = rabbit;
robin.south = pooh;
robin.north = kanga;
owl.south = piglet;
owl.east = robin;
rabbit.west = robin;
rabbit.south = bees;
rabbit.east = gopher;
gopher.west = rabbit;
kanga.south = robin;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;

let houses = [
  tigger,
  pooh,
  piglet,
  bees,
  robin,
  owl,
  rabbit,
  gopher,
  kanga,
  eeyore,
  heffalumps
];

var player = {
  location: tigger,
  honey: false
};

const move = direction => {
  console.log(`Moving ${direction}.`);
  let current = player.location;
  let newLocation = null;
  if (direction === "north") {
    newLocation = current.north;
  }
  if (direction === "west") {
    newLocation = current.west;
  }
  if (direction === "east") {
    newLocation = current.east;
  }
  if (direction === "south") {
    newLocation = current.south;
  }
  player.location = newLocation;
  console.log("You are now at " + player.location.character + " 's house.");
  player.location.greet();
};

const pickUp = () => {
  if (player.location === bees) {
    player.honey = true;
    console.log("You have picked up honey!");
  } else {
    console.log("There is no honey here!");
  }
};

let missionDestination;

const mission = () => {
  let num = Math.floor(Math.random() * houses.length);
  let destination = houses[num];
  missionDestination = destination;
  console.log(`${destination.character} is looking for honey! Can you help?`);
};

const drop = () => {
  if (player.honey === false) {
    console.log("You don't have any honey!");
  } else if (player.honey === true && player.location !== missionDestination) {
    console.log("Whoops! This isn't the place that needs the honey!");
  } else if (player.location === missionDestination) {
    console.log(
      "Congratulations! You delivered the honey to " +
        missionDestination.character +
        "!"
    );
    player.honey = false;
  }
};
