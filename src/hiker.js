import { HungryBear } from './../src/hungry-bear.js';

export class Hiker {
  // Creates a Hiker object and sets its properties
  constructor(name) {
    this.name = name;
    this.alive = true;
    this.backpack =
    {"shotgun": 5, "trailMix": 5 , "granolaBar": 3, "sandwich": 3, "carcass": 4};
  }

  // Checks when user has no more shotgun ammon and disables the "Shoot bear" button.
  shotgunAmount() {
    var shotgunButton = document.getElementById("shotgunButton");
    shotgunButton.disabled = false;
    if(this.backpack["shotgun"] === 1) {
      shotgunButton.disabled = true;
    }
  }

  // Checks when user has no more trail mix and disables the "Feed trail mix" button.
  trailMixAmount() {
    var trailMixButton = document.getElementById("trailMixButton");
    trailMixButton.disabled = false;
    if(this.backpack["trailMix"] === 1) {
      trailMixButton.disabled = true;
    }
  }

  // Checks when user has no more granola bars and disables the "Feed granola bar" button.
  granolaBarAmount(){
    var granolaBarButton = document.getElementById("granolaBarButton");
    granolaBarButton.disabled = false;
    if(this.backpack["granolaBar"] === 1) {
      granolaBarButton.disabled = true;
    }
  }

  // Checks when user has no more sandwiches and disables the "Feed sandwich" button.
  sandwichAmount() {
    var sandwichButton = document.getElementById("sandwichButton");
    sandwichButton.disabled = false;
    if(this.backpack["sandwich"] === 1) {
      sandwichButton.disabled = true;
    }
  }

  // Checks when user has no more carcasses and disables the "Feed carcass" button.
  carcassAmount() {
    var carcassButton = document.getElementById("carcassButton");
    carcassButton.disabled = false;
    if(this.backpack["carcass"] === 1) {
      carcassButton.disabled = true;
    }
  }

  // Checks when bear's satisfaction level reaches 0. Kills the Hiker.
  isHikerDead() {
    if (HungryBear.foodLevel === 0) {
      return this.alive = false;
    } else {
      return this.alive = true;
    }
  }

}
