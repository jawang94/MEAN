class Ninja {
  constructor(name, speed = 3, strength = 3, health = 100) {
    var _speed = speed;
    var _strength = strength;
    this.name = name;
    this._ninja = true;
    this._health = health;

    this.getStrength = function() {
      return _strength;
    };
    this.getSpeed = function() {
      return _speed;
    };
  }
  drinkSake() {
    this._health += 10;
  }
  isNinja(target) {
    return target.ninja;
  }
  sayName() {
    console.log(this.name);
  }
  getHealth() {
    console.log(this.health);
  }
  get health() {
    return this._health;
  }
  set health(damage) {
    this._health -= damage;
  }
  get speed() {
    return this.getSpeed();
  }
  get strength() {
    return this.getStrength();
  }
  get ninja() {
    return this._ninja;
  }
  showStats() {
    console.log(
      "Name: " +
        this.name +
        ", " +
        "Health: " +
        this.health +
        ", " +
        "Speed: " +
        this.speed +
        ", " +
        "Strength: " +
        this.strength
    );
  }
  punch(target) {
    if (target.ninja) {
      target.health -= 5;
      console.log(
        target.name + " was punched by " + this.name + " and lost 5 Health!"
      );
    } else {
      console.log("Target is not a ninja!");
    }
  }
  kick(target) {
    if (target.ninja) {
      let kickDamage = 15 * this.strength;
      target.health -= kickDamage;
      console.log(
        target.name +
          " was kicked by " +
          this.name +
          " and lost  " +
          kickDamage +
          " Health!"
      );
    } else {
      console.log("Target is not a ninja!");
    }
  }
}

class Sensei extends Ninja {
  constructor(name, speed = 10, strength = 10, health = 200) {
    super(name, speed, strength, health);
  }

  speakWisdom() {
    super.drinkSake();
    console.log("That was some wise sake boy~");
  }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength

console.log(blueNinja.health);
console.log(redNinja.health);

function Plebian(name) {
  this.name = name;
  this.health = 100;
}

var pleb = new Plebian("Jason");
redNinja.punch(pleb);

redNinja.drinkSake();
console.log(redNinja.health);

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
