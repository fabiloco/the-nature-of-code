import p5, { Vector } from 'p5';
import { Wave } from './Wave';

let sketch = (p: p5) => {
  const wave1 = new Wave(p, new Vector(30, 200), 0, 0.23, 20, 10, 50);
  const wave2 = new Wave(p, new Vector(300, 100), 0.7, 0.1, 8, 10, 50);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    wave1.display();
    wave2.display();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
