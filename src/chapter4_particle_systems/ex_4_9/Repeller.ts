import p5, { Vector } from 'p5';
import { Particle } from './Particle';

export class Repeller {
  strength: number;
  location: Vector;
  r: number;
  p: p5;

  constructor(p: p5, location: Vector) {
    this.location = location;
    this.strength = 100;
    this.r = 10;
    this.p = p;
  }

  display() {
    this.p.stroke(255);
    this.p.fill(255);
    this.p.ellipse(this.location.x, this.location.y, this.r * 2, this.r * 2);
  }

  update() {
    this.location = new Vector(this.p.mouseX, this.p.mouseY);
  }

  repel(p: Particle): Vector {
    let dir = Vector.sub(this.location, p.location);
    let d = dir.mag();
    dir.normalize();
    d = this.p.constrain(d, 5, 100);
    let force = (-1 * this.strength) / (d * d);
    dir.mult(force);
    return dir;
  }
}
