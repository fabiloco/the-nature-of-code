import p5, { Vector } from 'p5';
import { Conffetti } from './Coffetti';
import { Particle } from './Particle';

export class ParticleSystem {
  particles: Array<Particle>;
  origin: Vector;
  p: p5;

  constructor(p: p5, location: Vector) {
    this.p = p;
    this.origin = location;
    this.particles = new Array<Particle>();
  }

  addParticle() {
    let r = this.p.random();
    if (r < 0.5) {
      this.particles.push(new Particle(this.p, this.origin.copy()));
    } else {
      this.particles.push(new Conffetti(this.p, this.origin.copy()));
    }
  }

  setOrigin(newOrigin: Vector) {
    this.origin = newOrigin;
  }

  run() {
    for (const p of this.particles) {
      p.run();
      if (p.isDead()) {
        const index = this.particles.indexOf(p);
        if (index !== -1) {
          this.particles.splice(index, 1);
        }
      }
    }
  }
}
