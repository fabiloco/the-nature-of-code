import p5, { Vector } from 'p5';
import { Particle } from './Particle';

export class Conffetti extends Particle {
  constructor(p: p5, location: Vector, size: number) {
    super(p, location, size);
  }

  display(): void {
    let theta = this.p.map(
      this.location.x,
      0,
      this.p.width,
      0,
      this.p.TWO_PI * 2,
    );

    this.p.rectMode(this.p.CENTER);
    this.p.fill(255, this.lifespan);
    this.p.stroke(0, this.lifespan);
    this.p.push();
    this.p.translate(this.location.x, this.location.y);
    this.p.rotate(theta);
    this.p.rect(0, 0, 8, 8);
    this.p.pop();
  }
}
