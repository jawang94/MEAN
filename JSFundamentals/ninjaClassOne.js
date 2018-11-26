function Ninja(name) {
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = 100;

  function drinkSake() {
    health += 10;
  }

  this.sayName = function() {
    console.log(this.name);
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
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
