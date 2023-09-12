import p5, { Vector } from 'p5';
import { ParticleSystem } from './ParticleSystem';

export class Shape {
  location: Vector;
  size: number;

  p: p5;

  ps: ParticleSystem;

  dead: boolean;

  constructor(p: p5, location: Vector, size: number) {
    this.p = p;
    this.location = location;
    this.size = size;

    this.ps = new ParticleSystem(this.p, this.location.copy());
    this.dead = false;
  }

  checkClick() {
    if (this.p.mouseIsPressed && !this.dead) {
      if (
        this.p.mouseX >= this.location.x - this.size / 2 &&
        this.p.mouseX <= this.location.x + this.size / 2 &&
        this.p.mouseY >= this.location.y - this.size / 2 &&
        this.p.mouseY <= this.location.y + this.size / 2
      ) {
        this.destroy();
      }
    }
  }

  destroy() {
    this.dead = true;
    for (let index = 0; index < this.size; index++) {
      this.ps.addParticle(this.size / 4);
    }
  }

  update() {
    this.ps.run();
  }

  display() {
    if (!this.dead) {
      this.p.translate(this.location.x, this.location.y);
      this.p.rectMode(this.p.CENTER);
      this.p.fill('#fff');
      this.p.stroke('#000');
      this.p.rect(0, 0, this.size);
      this.p.resetMatrix();
    }
  }
}
