import p5 from 'p5';
import { Attractor } from './Attractor';
import { Mover } from './Mover';

let sketch = (p: p5) => {
  let movers: Array<Mover>;
  let attractor: Attractor;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    movers = new Array(20);

    for (let i = 0; i < 20; i++) {
      movers[i] = new Mover(p, 1, p.random(0, p.width), p.random(0, p.height));
    }

    attractor = new Attractor(p);
  };

  p.draw = () => {
    p.background(255);

    for (const mover of movers) {
      let force = attractor.attract(mover);
      mover.applyForce(force);

      mover.update();

      mover.display();
    }

    attractor.display();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
