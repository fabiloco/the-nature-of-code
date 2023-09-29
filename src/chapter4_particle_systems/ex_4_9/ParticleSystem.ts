import p5, { Vector } from 'p5';
import { Conffetti } from './Coffetti';
import { Particle } from './Particle';
import { Repeller } from './Repeller';
import { Smoke } from './Smoke';

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
    if (r < 0.2) {
      this.particles.push(new Particle(this.p, this.origin.copy()));
    } else if (r < 0.7) {
      this.particles.push(new Smoke(this.p, this.origin.copy()));
    } else {
      this.particles.push(new Conffetti(this.p, this.origin.copy()));
    }
  }

  applyForce(force: Vector) {
    for (const particle of this.particles) {
      particle.applyForce(force);
    }
  }

  applyRepellers(repellers: Array<Repeller>) {
    for (const particle of this.particles) {
      for (const repeller of repellers) {
        let force = repeller.repel(particle);
        particle.applyForce(force);
      }
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
