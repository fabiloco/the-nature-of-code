import p5, { Vector } from 'p5';
import { Box } from './Box';

let sketch = (p: p5) => {
  const adj = 640;
  const opp = 360 - 100;

  const angle = p.atan(adj / opp);

  const box = new Box(p, new Vector(640, 80), angle);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    p.stroke(0);
    p.fill(0, 50);

    p.line(640, 100, 0, 360);
    box.go();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
