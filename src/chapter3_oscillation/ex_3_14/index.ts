import p5, { Vector } from 'p5';
import { Pendulum } from './Pendulum';

let sketch = (p: p5) => {
  let pendulum1 = new Pendulum(p, new Vector(320, 10), 125);
  let pendulum2 = new Pendulum(p, pendulum1.getLocation(), 90);
  let pendulum3 = new Pendulum(p, pendulum1.getLocation(), 50);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    p.stroke(0);
    p.fill(0, 50);

    pendulum1.go();
    pendulum2.go();
    pendulum3.go();

    pendulum2.setOrigin(pendulum1.getLocation());
    pendulum3.setOrigin(pendulum2.getLocation());
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
