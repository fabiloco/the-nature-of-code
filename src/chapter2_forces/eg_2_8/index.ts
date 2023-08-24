import p5 from 'p5';

import { Mover } from './Mover';

let sketch = (p: p5) => {
  let movers: Array<Mover>;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    movers = new Array(20);

    for (let i = 0; i < 20; i++) {
      movers[i] = new Mover(p, 1, p.random(0, p.width), p.random(0, p.height));
    }
  };

  p.draw = () => {
    p.background(255);

    for (let i = 0; i < movers.length; i++) {
      for (let j = 0; j < movers.length; j++) {
        if (i !== j) {
          let force = movers[j].attract(movers[i]);
          movers[i].applyForce(force);
        }
      }

      movers[i].update();
      movers[i].display();
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
