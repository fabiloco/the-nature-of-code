import p5, { Vector } from 'p5';
import { ParticleSystem } from './ParticleSystem';
import { Repeller } from './Repeller';

let sketch = (p: p5) => {
  let systems = new Array<ParticleSystem>();
  let repellers = new Array<Repeller>();

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background('#242424');

    for (let index = 0; index < 4; index++) {
      repellers[index] = new Repeller(p, new Vector(160 * index, 360 / 2));
    }
  };

  p.draw = () => {
    p.background('#242424');

    if (p.mouseIsPressed) {
      systems.push(new ParticleSystem(p, new Vector(p.mouseX, p.mouseY)));
    }

    for (const system of systems) {
      let gravity = new Vector(0, 0.1);
      system.applyForce(gravity);

      system.run();
      system.addParticle();
      system.applyRepellers(repellers);

      // if (p.isDead()) {
      //   const index = this.particles.indexOf(p);
      //   if (index !== -1) {
      //     this.particles.splice(index, 1);
      //   }
      // }
    }

    for (const repeller of repellers) {
      repeller.display();
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
