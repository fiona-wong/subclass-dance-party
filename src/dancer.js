// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setColor();  
  this.setPosition(top, left);
  
};

Dancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setColor = function() {
  var colors = ['10px solid rgb(255, 165, 0)', '10px solid rgb(255, 255, 0)', '10px solid rgb(0, 255, 255)', '10px solid rgb(255, 0, 0)', '10px solid rgb(255, 0, 255)', '10px solid rgb(173, 126, 255)'];
  var pick = Math.floor(Math.random() * colors.length);
  var styleSettings = {
    border: colors[pick]
  }; 

  this.$node.css(styleSettings);
};

  