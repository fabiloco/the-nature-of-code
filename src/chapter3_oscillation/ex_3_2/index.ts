import p5, { Vector } from 'p5';
import { Mover } from './Mover';

let sketch = (p: p5) => {
  let movers: Array<Mover>;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    movers = new Array();

    for (let i = 0; i < 20; i++) {}
  };

  p.draw = () => {
    p.background(255);

    if (p.keyIsDown(83)) {
      const newMover = new Mover(p, 1, 0, p.height / 2);
      movers.push(newMover);

      let cannonForce = new Vector(10, 0);

      newMover.applyForce(cannonForce);
    }

    for (const mover of movers) {
      mover.update();

      mover.display();
    }

    p.rectMode(p.CENTER);
    p.stroke(0);
    p.fill(175);
    p.rect(0, p.height / 2, 128, 32);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
