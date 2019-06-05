import { HungryBear } from './hungry-bear.js';
import { Hiker } from './hiker.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Hikers from './img/hikers.png';
import IdleBear from './img/idleBear.png';
import AngryBear from './img/angryBear.png';
import SadBear from './img/sadBear.png';

// Allows the use of images in application
let hikers = document.getElementById('hiker');
hikers.src = Hikers;
let idleBear = document.getElementById('idleBear');
idleBear.src = IdleBear;
let angryBear = document.getElementById('angryBear');
angryBear.src = AngryBear;
let sadBear = document.getElementById('sadBear');
sadBear.src = SadBear;

$(document).ready(function() {
  // Creates a new HungryBear and Hiker object
  let hungryBear = new HungryBear;
  let hiker = new Hiker;
  // Hides the two outcome divs: hiker is dead or bear is dead
  $(".hikerDead").hide();
  $(".bearDead").hide();
  // Runs StatTracker function (see below)
  StatTracker(hungryBear);
  // Runs setHunger function
  hungryBear.setHunger();
  // Runs shootBear and shotgunAmount functions on click
  $("#shotgun").text(hiker.backpack["shotgun"]);
  $("#shotgunButton").click(function() {
    hiker.shotgunAmount();
    hungryBear.shootBear(hiker);
    $("#shotgun").text(hiker.backpack["shotgun"]);
  });
  // Runs feedTrailMix and trailMixAmount functions on click
  $("#trailMix").text(hiker.backpack["trailMix"]);
  $("#trailMixButton").click(function() {
    hiker.trailMixAmount();
    hungryBear.feedTrailMix(hiker);
    $("#trailMix").text(hiker.backpack["trailMix"]);
  });
  // Runs feedGranolaBar and granolaBarAmount functions on click
  $("#granolaBar").text(hiker.backpack["granolaBar"]);
  $("#granolaBarButton").click(function() {
    hiker.granolaBarAmount();
    hungryBear.feedGranolaBar(hiker);
    $("#granolaBar").text(hiker.backpack["granolaBar"]);
  });
  // Runs feedSandwich and sandwichAmount functions on click
  $("#sandwich").text(hiker.backpack["sandwich"]);
  $("#sandwichButton").click(function() {
    hiker.sandwichAmount();
    hungryBear.feedSandwich(hiker);
    $("#sandwich").text(hiker.backpack["sandwich"]);
  });
  // Runs feedCarcass and carcassAmount functions on click
  $("#carcass").text(hiker.backpack["carcass"]);
  $("#carcassButton").click(function() {
    hiker.carcassAmount();
    hungryBear.feedCarcass(hiker);
    $("#carcass").text(hiker.backpack["carcass"]);
  });
  // Tracks bear's Health Points and Satisfaction Level
  function StatTracker(hungryBear) {
    let timer = setInterval(() => {
      $("#health").text(hungryBear.health);
      $("#hunger").text(hungryBear.foodLevel);
      hiker.isHikerDead();
      // Kills Hiker if bear's Satisfaction Level reaches zero
      if(hungryBear.foodLevel === 0) {
        $(".row").hide();
        $(".mainTitle").hide();
        $(".hikerDead").show();
        clearInterval(timer);
      }
      // Kills bear if Health Points reach zero or less
      else if (hungryBear.health <= 0) {
        $(".row").hide();
        $(".mainTitle").hide();
        $(".bearDead").show();
        clearInterval(timer);
      }
    }, 1000);
  }
});
