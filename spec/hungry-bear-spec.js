import { Hiker } from './../src/hiker.js';
import { HungryBear } from './../src/hungry-bear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should kill the hiker if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should kill the hiker if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have its foodLevel go up by 2 when fed Trail Mix', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 5;
    jasmine.clock().tick(7001);
    fuzzy.feedTrailMix(hiker);
    expect(fuzzy.foodLevel).toEqual(0);
  });

  it('should have its Trail Mix amount reduced by 1 when feeding a Trail Mix', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedTrailMix(hiker);
    expect(hiker.backpack["trailMix"]).toEqual(4);
  });

  it('should have its foodLevel go up by 3 when fed a Granola Bar', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 8;
    jasmine.clock().tick(7001);
    fuzzy.feedGranolaBar(hiker);
    expect(fuzzy.foodLevel).toEqual(4);
  });

  it('should have its Granola Bar amount reduced by 1 when feeding a Granola Bar', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedGranolaBar(hiker);
    expect(hiker.backpack["granolaBar"]).toEqual(2);
  });

  it('should have its foodLevel go up by 4 when fed a Peanut Butter Sandwich', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 2;
    jasmine.clock().tick(3001);
    fuzzy.feedGranolaBar(hiker);
    expect(fuzzy.foodLevel).toEqual(2);
  });

  it('should have its Peanut Butter Sandwich amount reduced by 1 when feeding a Peanut Butter Sandwich', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedPeanutButterSandwich(hiker);
    expect(hiker.backpack["peanutButterSandwich"]).toEqual(2);
  });

  it('should have its foodLevel go up by 4 when fed a Body Part', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 1;
    jasmine.clock().tick(6001);
    fuzzy.feedBodyPart(hiker);
    expect(fuzzy.foodLevel).toEqual(3);
  });

  it('should have its body parts amount reduced by 1 when feeding a body part', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedBodyPart(hiker);
    expect(hiker.backpack["bodyParts"]).toEqual(3);
  });
});
//
//END OF OLD CODE
