import p5, { Vector } from 'p5';
import { ParticleSystem } from './ParticleSystem';

let sketch = (p: p5) => {
  let ps = new ParticleSystem(p, new Vector(0, 0));

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background('#242424');
    ps = new ParticleSystem(p, new Vector(p.width / 2, 50));
  };

  p.draw = () => {
    p.background('#242424');
    ps.setOrigin(new Vector(p.mouseX, p.mouseY));
    ps.addParticle();
    ps.run();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
