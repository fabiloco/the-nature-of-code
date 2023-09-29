import p5, { Vector } from 'p5';
import { Particle } from './Particle';

export class Smoke extends Particle {
  constructor(p: p5, location: Vector) {
    super(p, location);
    this.acceleration = new Vector(0, 0);
  }

  update(): void {
    this.velocity.add(-this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2.0;
  }

  display(): void {
    this.p.fill(200, this.lifespan);
    this.p.stroke(0, this.lifespan);
    this.p.ellipse(this.location.x, this.location.y, 8, 8);
  }
}
