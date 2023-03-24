import p5 from 'p5';
import { Attractor } from './Attractor';
import { Mover } from './Mover';

let sketch = (p: p5) => {
  let mover: Mover;
  let attractor: Attractor;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
    mover = new Mover(p, 1, p.width / 2 - 50, p.height / 2 - 50);
    attractor = new Attractor(p);
  };

  p.draw = () => {
    p.background(255);

    let force = attractor.attract(mover);
    mover.applyForce(force);

    mover.update();

    mover.display();
    attractor.display();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
