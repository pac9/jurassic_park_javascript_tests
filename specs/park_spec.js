const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Diplodocus', 'herbivore', 120);
    dinosaur3 = new Dinosaur('Velociraptor', 'omnivore', 10);
    park = new Park('Jurassic Park', 10.00, )

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10.00);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.hasDinosaurs();
    assert.deepStrictEqual(actual, 0);
    //is deepStrictEqual correct?
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.dinosaurAttractingMostVisitors();
    const actual = dinosaur2.guestsAttractedPerDay;
    assert.deepStrictEqual(actual, 120)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.dinosaursOfParticularSpecies();
    const actual = dinosaur2.species;
    assert.deepStrictEqual(actual, 'Diplodocus');
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    // dinosaur4 = new Dinosaur('Diplodocus', 'herbivore', 120);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    // park.addDinosaur(dinosaur4);

    park.removeDinosaur(park.removeDinosaursOfParticularSpecies());
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 2);
  });

});
