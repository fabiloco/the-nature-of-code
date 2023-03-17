import p5 from 'p5';
import { Walker } from './Walker';

let sketch = (p: p5) => {
  let walker: Walker;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
    walker = new Walker(p);
  };

  p.draw = () => {
    walker.step();
    walker.render();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
