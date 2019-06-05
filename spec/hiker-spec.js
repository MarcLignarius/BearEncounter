import { Hiker } from './../src/hiker.js';
import { HungryBear } from './../src/hungry-bear.js';

describe('Hiker', function() {
  let Linda = new Hiker("Linda");

  it('should have a name and an alive status of true', function() {
    expect(Linda.name).toEqual("Linda");
    expect(Linda.alive).toEqual(true);
  });

  it('should be dead if eaten by bear', function() {
    HungryBear.foodLevel = 0;
    Linda.isHikerDead();
    expect(Linda.alive).toEqual(false);
  });

});
