Mozfest 2014
=========

This repository contains code and instructions for our MozFest 2014 workshop: 

> **Modeling animal behavior with connected robots.**

  - Using Sphero as robots: controlling color, movement, position, impact, ...
  - Using Skynet.im as a chatroom for robots
  - Using Node.js to controll the robots
  - Using Cylon.js as a main robotics framework

Sphero
-----------

Sphero 2.0 are robotic balls:
  - Bluetooth connection, 30m range
  - Goes 4.5 mph
  - Led glow, RGB colors

To control a Sphero robot, you need to pair it with your computer. Follow [instruction for OSX, Ubuntu or Windows](https://github.com/hybridgroup/cylon-sphero#how-to-connect).


Skynet.im
-----------

Skynet is an open source cross-protocol mesh network for machine-to-machine instant messaging. We use Skynet as a chatroom to allow our robots to talk to each other.
Official site: [skynet.im](http://www.skynet.im)

Node.js
-----------

Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

To install Node on your machine, follow instructions on the [official site](http://nodejs.org/).

Cylon.js
--------------

Cylon.js is a next generation robotics framework with support for 27 different platforms. Technically it's a module for Node.js, and each plugin for a platform is a npm module as well.
  - Official page: [cylonjs.com](http://cylonjs.com)
  - [List of supported platforms](http://cylonjs.com/documentation/platforms/)

To install Cylon.js, open a terminal in the directory of your project and run the following command:

```sh
$ npm install cylon
```

Cylon is intuitive and easy to use. See example below on how to blink an LED on an Arduino:

```sh
var Cylon = require("cylon");

// Initialize the robot
var robot = Cylon.robot({
  // Change the port to the correct port for your Arduino.
  connection: { name: 'arduino', adaptor: 'firmata', port: '/dev/ttyACM0' },
  device: { name: 'led', driver: 'led', pin: 13 },

  work: function(my) {
    // we do our thing here
    every((1).second(), function() { my.led.toggle(); });
  }
});

// start working
robot.start();
```
Tu run the programm, enter the following command in the directory of your project:

```sh
node name_of_your_file.js
```


The lion and the Gnu herd
--------------

Using the sample code provided here, we will mimic the following behavior:
  - A lion is moving, changing direction randomly every 5 seconds.
  - A herd of gnu is moving in the opposite direction each time the lion is changing direction

Authors
----

* Benjamin Maugain - [@HerrBen]
* Gareth Drew - [@FrogStew]

License
----

MIT

[@HerrBen]:http://twitter.com/HerrBen
[@FrogStew]:http://twitter.com/frogstew
