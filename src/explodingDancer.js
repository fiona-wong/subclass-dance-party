var ExplodingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.applyEffect();
};

ExplodingDancer.prototype = Object.create(Dancer.prototype);
ExplodingDancer.prototype.constructor = ExplodingDancer;

ExplodingDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
};

ExplodingDancer.prototype.applyEffect = function() {
  this.$node.addClass('explodingDancer');
};