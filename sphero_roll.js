//sphero_roll.js
/*
 * Send random direction to Sphero every second
 * */

var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'sphero', adaptor: 'sphero', port: 'COM8' },
  device: { name: 'sphero', driver: 'sphero' },

  work: function(my) {
    every((5).second(), function() {
      my.sphero.roll(60, Math.floor(Math.random() * 360));

    });
  }
}).start();