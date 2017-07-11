var ExplodingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ExplodingDancer.prototype = Object.create(Dancer.prototype);
ExplodingDancer.prototype.constructor = ExplodingDancer;

ExplodingDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.animate({'border-width': '50px', 'border-radius': '50px'}).animate({'border-width': '10px'});
};