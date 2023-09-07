import p5, { Vector } from 'p5';
import { Bob } from './Bob';
import { Spring } from './Spring';

let sketch = (p: p5) => {
  let bob1: Bob = new Bob(p, 10, 640 / 2, 50);
  let spring1: Spring = new Spring(p, 640 / 2, 0, 50);
  let bob2: Bob = new Bob(p, 10, 640 / 2, 100);
  let spring2: Spring = new Spring(p, 640 / 2, 0, 50);
  let bob3: Bob = new Bob(p, 10, 640 / 2, 150);
  let spring3: Spring = new Spring(p, 640 / 2, 0, 50);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    let gravity = new Vector(0, 1);
    bob1.applyForce(gravity);
    bob2.applyForce(gravity);
    bob3.applyForce(gravity);

    spring1.connect(bob1);
    spring2.connect(bob2);
    spring3.connect(bob3);

    spring2.setAnchor(bob1.location.x, bob1.location.y);
    spring3.setAnchor(bob2.location.x, bob2.location.y);

    bob1.update();
    bob1.display();
    bob2.update();
    bob2.display();
    bob3.update();
    bob3.display();

    spring1.display();
    spring1.displayLine(bob1);
    spring2.display();
    spring2.displayLine(bob2);
    spring3.display();
    spring3.displayLine(bob3);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
