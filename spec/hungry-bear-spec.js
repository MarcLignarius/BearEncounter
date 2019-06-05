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
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 0;
    expect(hiker.isHikerDead()).toEqual(true);
  });

  it('should kill the hiker if 10 seconds pass without feeding', function() {
    let hiker = new Hiker("Linda");
    jasmine.clock().tick(10001);
    expect(hiker.isHikerDead()).toEqual(true);
  });

  it('should have its shotgun amount reduced by 1 when shooting the bear', function() {
    let hiker = new Hiker("Linda");
    fuzzy.shootBear(hiker);
    expect(hiker.backpack["shotgun"]).toEqual(4);
  });

  it('should have its foodLevel go up by 3 when fed Trail Mix', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 5;
    jasmine.clock().tick(7001);
    fuzzy.feedTrailMix(hiker);
    expect(fuzzy.foodLevel).toEqual(1);
  });

  it('should have its Trail Mix amount reduced by 1 when feeding a Trail Mix', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedTrailMix(hiker);
    expect(hiker.backpack["trailMix"]).toEqual(4);
  });

  it('should have its foodLevel go up by 5 when fed a Granola Bar', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 8;
    jasmine.clock().tick(7001);
    fuzzy.feedGranolaBar(hiker);
    expect(fuzzy.foodLevel).toEqual(6);
  });

  it('should have its Granola Bar amount reduced by 1 when feeding a Granola Bar', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedGranolaBar(hiker);
    expect(hiker.backpack["granolaBar"]).toEqual(2);
  });

  it('should have its foodLevel go up by 10 when fed a sandwich', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 2;
    jasmine.clock().tick(3001);
    fuzzy.feedSandwich(hiker);
    expect(fuzzy.foodLevel).toEqual(9);
  });

  it('should have its sandwich amount reduced by 1 when feeding a sandwich', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedSandwich(hiker);
    expect(hiker.backpack["sandwich"]).toEqual(2);
  });

  it('should have its foodLevel go up by 20 when fed a carcass', function() {
    let hiker = new Hiker("Linda");
    fuzzy.foodLevel = 1;
    jasmine.clock().tick(6001);
    fuzzy.feedCarcass(hiker);
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should have its carcass amount reduced by 1 when feeding a carcass', function() {
    let hiker = new Hiker("Linda");
    fuzzy.feedCarcass(hiker);
    expect(hiker.backpack["carcass"]).toEqual(3);
  });

});
