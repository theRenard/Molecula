from configuration
https://labs.phaser.io/view.html?src=src\game%20objects\particle%20emitter\particle%20editor.js

        frame: 'blue',
        frame: [ 0, 1, 2 ],
        frame: { frames: [ 0, 1, 2 ], cycle: true, quantity: 4 },

        x: 64,
        y: { min: 100, max: 500 },
        y: { min: 100, max: 500, steps: 8 },
        angle: { start: 0, end: 360, steps: 32 },

        lifespan: 2000,
        lifespan: { min: 100, max: 2000, steps: 1000 },

        speedX: { min: 200, max: 400 },
        speedX: { min: 100, max: 400, steps: 12 },
        speedY: { min: -20, max: 20 },        
        scale: { start: 0.4, end: 0 },
        quantity: 4,
        blendMode: 'ADD'
        tint: [ 0xffff00, 0xff0000, 0x00ff00, 0x0000ff ],
        lifespan: 2000,
        frequency: 50,
        scale: { start: 4, end: 1, random: true },
        scale: 0.4,

        alpha: { start: 1, end: 0, ease: 'Quartic.easeOut' },
        alpha: { start: 1, end: 0 },
        particleAngle: { start: 0, end: 360 },
        active: true
        radial: false,

        speedY: 200
        speed: 100,
        line = new Phaser.Geom.Line(-200, -200, 200, 200);

        emitZone: { type: 'edge', source: shape2, quantity: 48, yoyo: false }
        emitZone: { source: line },
        Phaser.Geom.Line.Rotate(line, 0.03);

  "active": true,
  "blendMode": 3,
  "collideBottom": true,
  "collideLeft": true,
  "collideRight": true,
  "collideTop": true,
  "deathCallback": null,
  "deathCallbackScope": null,
  "emitCallback": null,
  "emitCallbackScope": null,
  "follow": null,
  "frequency": 0,
  "gravityX": 0,
  "gravityY": 0,
  "maxParticles": 0,
  "name": "sparks",
  "on": true,
  "particleBringToTop": true,
  "radial": true,
  "timeScale": 1,
  "trackVisible": false,
  "visible": true,
  "accelerationX": 0,
  "accelerationY": 0,
  "angle": {
    "min": 165,
    "max": 155
  },
  "alpha": {
    "start": 0.7000000000000001,
    "end": 0.5,
    "ease": "Circ.easeInOut"
  },
  "bounce": 0,
  "delay": 0,
  "lifespan": 1500,
  "maxVelocityX": 10000,
  "maxVelocityY": 10000,
  "moveToX": 0,
  "moveToY": 0,
  "quantity": 1,
  "rotate": 0,
  "tint": 16777215,
  "x": 423,
  "y": 240,
  "speed": {
    "min": 80,
    "max": 410
  },
  "scale": {
    "start": 0.2,
    "end": 0.2,
    "ease": "Sine.easeIn"
  }
