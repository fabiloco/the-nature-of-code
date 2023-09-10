import p5, { Vector } from 'p5';
import { Particle } from './Particle';

let sketch = (p: p5) => {
  let particle = new Particle(p, new Vector(640 / 2, 10));
  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    particle.run();

    if (particle.isDead()) {
      console.log('particle is dead!');
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
