import p5 from 'p5';

import { Mover } from './Mover';

let sketch = (p: p5) => {
  let mover: Mover;

  p.setup = () => {
    p.createCanvas(640, 640);
    p.background(255);
    mover = new Mover(
      p,
      3,
      p.random(0, p.width),
      p.random(0, p.height / 2 - 100)
    );
  };

  p.draw = () => {
    p.background(255);

    mover.update();
    mover.checkEdges();
    mover.display();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
