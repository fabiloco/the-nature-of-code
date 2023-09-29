import p5, { Vector } from 'p5';
import { ParticleSystem } from './ParticleSystem';

let sketch = (p: p5) => {
  let systems = new Array<ParticleSystem>();

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background('#242424');
  };

  p.draw = () => {
    p.background('#242424');

    if (p.mouseIsPressed) {
      systems.push(new ParticleSystem(p, new Vector(p.mouseX, p.mouseY)));
    }

    for (const system of systems) {
      system.run();
      system.addParticle();
      // if (p.isDead()) {
      //   const index = this.particles.indexOf(p);
      //   if (index !== -1) {
      //     this.particles.splice(index, 1);
      //   }
      // }
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
