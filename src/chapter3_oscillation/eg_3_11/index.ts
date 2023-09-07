import p5, { Vector } from 'p5';
import { Bob } from './Bob';
import { Spring } from './Spring';

let sketch = (p: p5) => {
  let bob: Bob = new Bob(p, 10, 640 / 2, 110);
  let spring: Spring = new Spring(p, 640 / 2, 100, 100);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    let gravity = new Vector(0, 1);
    bob.applyForce(gravity);

    spring.connect(bob);

    bob.update();
    bob.display();

    spring.display();
    spring.displayLine(bob);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
