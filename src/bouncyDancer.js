var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.applyEffect();
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  // this.$node.animate({top: '900px'});
  // this.$node.animate({top: (Math.random() * 800) + 'px'});
};

BouncyDancer.prototype.applyEffect = function() {
  this.$node.addClass('bouncingDancer');
};