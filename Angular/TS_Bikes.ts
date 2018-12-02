class Bike {
  price: number;
  max_speed: number;
  miles: number;
  constructor(price: number, max_speed: number, miles: number) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = miles;
  }

  displayInfo() {
    console.log(
      "Price: " + this.price,
      "Max Speed: " + this.max_speed,
      "Miles: " + this.miles
    );
    return this;
  }

  ride() {
    console.log("Riding...");
    this.miles += 10;
    return this;
  }

  reverse() {
    if (this.miles === 0) {
      console.log("Cannot reverse any more!");
      return this;
    } else {
      console.log("Reversing...");
      this.miles -= 5;
      return this;
    }
  }
}

let bike1 = new Bike(200, 50, 0);
let bike2 = new Bike(200, 50, 0);
let bike3 = new Bike(200, 50, 0);

bike1
  .ride()
  .ride()
  .ride()
  .reverse()
  .displayInfo();
bike2
  .ride()
  .ride()
  .reverse()
  .reverse()
  .displayInfo();
bike3
  .reverse()
  .reverse()
  .reverse()
  .displayInfo();
