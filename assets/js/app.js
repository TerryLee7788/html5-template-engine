// Generated by CoffeeScript 1.4.0

define(["jquery", "vendor/modernizr/modernizr"], function($) {
  var initialize;
  initialize = function() {
    console.info('Welcome to Html5 Template Engine');
    if (Modernizr.canvas) {
      console.info('Your browser support canvas');
    }
    if (Modernizr.touch) {
      return console.info('Your device support touch event');
    }
  };
  return {
    initialize: initialize
  };
});