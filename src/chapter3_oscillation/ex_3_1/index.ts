import p5 from 'p5';

import { Baton } from './Baton';

let sketch = (p: p5) => {
  let baton: Baton;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    baton = new Baton(p);
  };

  p.draw = () => {
    p.background(255);

    baton.update();
    baton.display();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
