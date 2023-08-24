import p5 from 'p5';
import { Liquid } from './Liquid';
import { Mover } from './Mover';

let sketch = (p: p5) => {
  let movers: Array<Mover>;
  let liquid: Liquid;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
    movers = new Array(20);
    for (let i = 0; i < 20; i++) {
      movers[i] = new Mover(p, p.random(0.1, 5), p.random(0, p.width), 0);
    }
    liquid = new Liquid(p, 0, p.height / 2, p.width, p.height / 2, 0.1);
  };

  p.draw = () => {
    p.background(255);

    liquid.display();

    for (const mover of movers) {
      if (mover.isInside(liquid)) {
        mover.drag(liquid);
      }

      mover.update();
      mover.checkEdges();
      mover.display();
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
