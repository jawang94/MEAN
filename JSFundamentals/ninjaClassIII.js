class Ninja {
  constructor(name) {
    var _speed = 3;
    var _strength = 3;
    this.name = name;
    this._ninja = true;
    this._health = 100;

    this.getStrength = function() {
      return _strength;
    };
    this.getSpeed = function() {
      return _speed;
    };
  }
  drinkSake() {
    health += 10;
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
