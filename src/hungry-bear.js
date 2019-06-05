export class HungryBear {
  // Creates a HungryBear object and sets its properties
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.foodLevel = 10;
  }

  // Makes Satisfaction Level decrease by 1 every second.
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  // Shoots the bear and reduces Health Points by a random amount between 0 and 50.
  shootBear(Hiker) {
    var healthLost = Math.floor(Math.random() * Math.floor(50));
    this.health -= healthLost;
    Hiker.backpack["shotgun"] -=1;
  }

  // Checks bear's Health Points and kills bear if Health Points are less than or equal to zero.
  isBearDead() {
    if (this.health <= 0) {
      return true;
    } else {
      return false;
    }
  }

  // Feeds bear trail mix: Increases Satisfaction Level by 3, reduces trail mix amount by 1.
  feedTrailMix(Hiker) {
    this.foodLevel += 3;
    Hiker.backpack["trailMix"] -= 1;
  }

  // Feeds bear granola bar: Increases Satisfaction Level by 5, reduces granola bar amount by 1.
  feedGranolaBar(Hiker) {
    this.foodLevel += 5;
    Hiker.backpack["granolaBar"] -= 1;
  }

  // Feeds bear sandwich: Increases Satisfaction Level by 10, reduces sandwich amount by 1.
  feedSandwich(Hiker) {
    this.foodLevel += 10;
    Hiker.backpack["sandwich"] -= 1;
  }

  // Feeds bear carcass: Increases Satisfaction Level by 20, reduces carcass amount by 1.
  feedCarcass(Hiker) {
    this.foodLevel += 20;
    Hiker.backpack["carcass"] -= 1;
  }
}
