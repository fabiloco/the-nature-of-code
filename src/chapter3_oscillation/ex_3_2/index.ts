import p5, { Vector } from 'p5';
import { Mover } from './Mover';

let sketch = (p: p5) => {
  let movers: Array<Mover>;

  let cannonAngle = 0;
  let cannonForceMagnitude = 10;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    movers = new Array();
  };

  p.draw = () => {
    p.background(255);

    if (p.keyIsDown(83)) {
      const newMover = new Mover(p, 1, 0, p.height / 2);
      movers.push(newMover);

      let force = Vector.fromAngle((cannonAngle * Math.PI) / 180);
      force.mult(cannonForceMagnitude);

      newMover.applyForce(force);
    }

    if (p.keyIsDown(65)) {
      cannonAngle += 1;
    }

    if (p.keyIsDown(68)) {
      cannonAngle -= 1;
    }

    for (const mover of movers) {
      mover.update();

      mover.display();
    }

    p.rectMode(p.CENTER);
    p.stroke(0);
    p.fill(175);
    p.push();
    p.translate(0, p.height / 2);
    p.rotate((cannonAngle * Math.PI) / 180);
    p.rect(0, 0, 128, 32);
    p.pop();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
