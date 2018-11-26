function Ninja(name) {
  var speed = 3;
  var strength = 3;
  this.ninja = true;
  this.name = name;
  this.health = 100;

  function drinkSake() {
    health += 10;
  }

  function isNinja(target) {
    return target.ninja;
  }

  this.sayName = function() {
    console.log(this.name);
  };

  this.getHealth = function() {
    console.log(this.health);
  };

  this.getSpeed = function() {
    return speed;
  };

  this.getStrength = function() {
    return strength;
  };

  this.showStats = function() {
    console.log(
      "Name: " +
        this.name +
        ", " +
        "Health: " +
        this.health +
        ", " +
        "Speed: " +
        this.getSpeed() +
        ", " +
        "Strength: " +
        this.getStrength()
    );
  };

  this.punch = function(target) {
    if (isNinja(target)) {
      target.health -= 5;
      console.log(
        target.name + " was punched by " + this.name + " and lost 5 Health!"
      );
    } else {
      console.log("Target is not a ninja!");
    }
  };

  this.kick = function(target) {
    if (isNinja(target)) {
      let kickDamage = 15 * this.getStrength();
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
  };
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

blueNinja.getHealth();
redNinja.getHealth();

function Plebian(name) {
  var ninja = false;
  this.name = name;
  this.health = 100;
}

var pleb = new Plebian("Jason");
redNinja.punch(pleb);
