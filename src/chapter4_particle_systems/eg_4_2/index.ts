import p5, { Vector } from 'p5';
import { Particle } from './Particle';

let sketch = (p: p5) => {
  let particles = new Array<Particle>();

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background('#242424');
  };

  p.draw = () => {
    p.background('#242424');
    particles.push(new Particle(p, new Vector(p.width / 2, 50)));

    for (const p of particles) {
      p.run();
      if (p.isDead()) {
        const index = particles.indexOf(p);
        if (index !== -1) {
          particles.splice(index, 1);
        }
      }
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
