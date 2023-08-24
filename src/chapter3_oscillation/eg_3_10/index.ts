import p5, { Vector } from 'p5';
import { Pendulum } from './Pendulum';

let sketch = (p: p5) => {
  let pendulum = new Pendulum(p, new Vector(320, 10), 125);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    p.stroke(0);
    p.fill(0, 50);

    pendulum.go();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
