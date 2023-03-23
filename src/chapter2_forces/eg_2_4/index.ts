import p5 from 'p5';
import { Mover } from './Mover';

let sketch = (p: p5) => {
  let movers: Array<Mover>;
  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
    movers = new Array(20);
    for (let i = 0; i < 20; i++) {
      movers[i] = new Mover(p, p.random(0.1, 5), 0, 0);
    }
  };

  p.draw = () => {
    p.background(255);

    for (const mover of movers) {
      mover.update();
      mover.checkEdges();
      mover.display();
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
