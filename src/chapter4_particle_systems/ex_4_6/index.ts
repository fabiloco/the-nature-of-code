import p5, { Vector } from 'p5';
import { Shape } from './Shape';

let sketch = (p: p5) => {
  let shape = new Shape(p, new Vector(640 / 2, 360 / 2), 32);
  let shape1 = new Shape(p, new Vector(400, 100), 64);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background('#242424');
  };

  p.draw = () => {
    p.background('#242424');
    shape.checkClick();
    shape.display();
    shape.update();

    shape1.checkClick();
    shape1.display();
    shape1.update();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
