import p5, { Vector } from 'p5';
import { Particle } from './Particle';

export class ParticleSystem {
  particles: Array<Particle>;
  origin: Vector;
  p: p5;

  maxParticles: number;
  actualParticles: number;

  constructor(p: p5, location: Vector, maxParticles: number = 120) {
    this.p = p;
    this.origin = location;
    this.particles = new Array<Particle>();

    this.maxParticles = maxParticles;
    this.actualParticles = 0;
  }

  addParticle() {
    if (this.actualParticles < this.maxParticles) {
      this.particles.push(new Particle(this.p, this.origin.copy()));
      this.actualParticles++;
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
