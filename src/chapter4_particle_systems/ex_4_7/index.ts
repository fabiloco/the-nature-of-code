import p5, { Vector } from 'p5';

import { Conffetti } from './Coffetti';

let sketch = (p: p5) => {
  let coffettiArray = new Array<Conffetti>();

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background('#242424');

    for (let i = 0; i < 20; i++) {
      let coffetti = new Conffetti(
        p,
        new Vector(p.width / 2, p.height / 2),
        10,
      );
      coffettiArray.push(coffetti);
    }
  };

  p.draw = () => {
    p.background('#242424');
    for (const coffetti of coffettiArray) {
      coffetti.update();
      coffetti.display();
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
