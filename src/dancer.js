// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  
  this.top = top;
  this.left = left;
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
  //console.log(this.$node.position());
  this.detectCollision();
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

Dancer.prototype.detectCollision = function() {
  //console.log(this.$node.position().top);
  //console.log(this.left);
  for (var i = 0; i < window.dancers.length; i++) {
    var aSqrd = Math.pow(window.dancers[i].top - this.$node.position().top, 2);
    var bSqrd = Math.pow(window.dancers[i].left - this.$node.position().left, 2);
    var c = Math.sqrt(aSqrd + bSqrd);
    //console.log(c);
    if (c <= 100 && window.dancers[i] !== this) {
      this.$node.addClass('onCollision').animate({top: '75%'});
      window.dancers[i].$node.addClass('onCollision').animate({top: '75%'});
      //console.log('COLLISION DETECTED');
    }
  }
};


  