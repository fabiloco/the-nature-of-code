import p5, { Vector } from 'p5';
import { Particle } from './Particle';

export class Conffetti extends Particle {
  angle: number;
  aVelocity: number;
  aAcceleration: number;

  constructor(p: p5, location: Vector, size: number) {
    super(p, location, size);

    this.angle = 0.0;

    this.aVelocity = 0.0;

    this.aAcceleration = this.p.random(-0.001, 0.01);
  }

  display(): void {
    this.angle += this.aVelocity;
    this.aVelocity += this.aAcceleration;

    this.p.rectMode(this.p.CENTER);
    this.p.fill(255, this.lifespan);
    this.p.stroke(0, this.lifespan);
    this.p.push();
    this.p.translate(this.location.x, this.location.y);
    this.p.rotate(this.angle);
    this.p.rect(0, 0, 8, 8);
    this.p.pop();
  }
}
