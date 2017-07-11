describe('bouncyDancer', function() {
  var bouncyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });
});

describe('explodingDancer', function() {

});

describe('rotatingDancer', function() {

});