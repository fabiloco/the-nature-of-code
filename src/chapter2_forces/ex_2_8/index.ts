import p5 from 'p5';
import { Attractor } from './Attractor';
import { Mover } from './Mover';

let sketch = (p: p5) => {
  let movers: Array<Mover>;
  let attractors: Array<Attractor>;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    attractors = new Array(5);
    movers = new Array(1000);

    for (let i = 0; i < 1000; i++) {
      movers[i] = new Mover(p, 1, p.random(0, p.width), p.random(0, p.height));
    }

    for (let i = 0; i < 5; i++) {
      attractors[i] = new Attractor(p);
    }
  };

  p.draw = () => {
    p.background(255);

    for (const mover of movers) {
      for (const attractor of attractors) {
        let force = attractor.attract(mover);
        mover.applyForce(force);

        // attractor.display();
      }

      mover.update();

      mover.display();
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
