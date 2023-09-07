import p5, { Vector } from 'p5';
import { Bob } from './Bob';

export class Spring {
  anchor: Vector;

  length: number;

  k: number;

  p: p5;

  constructor(p: p5, x: number, y: number, length: number) {
    this.anchor = new Vector(x, y);
    this.p = p;
    this.length = length;
    this.k = 0.2;
  }

  connect(bob: Bob) {
    let force = Vector.sub(bob.location, this.anchor);
    let d = force.mag();

    let stretch = d - this.length;

    force = force.normalize();
    force.mult(-1 * this.k * stretch);

    bob.applyForce(force);
  }

  setAnchor(x: number, y: number) {
    this.anchor = new Vector(x, y);
  }

  display() {
    this.p.fill(100);
    this.p.rectMode(this.p.CENTER);
    this.p.rect(this.anchor.x, this.anchor.y, 10, 10);
  }

  displayLine(bob: Bob) {
    this.p.stroke(0);
    this.p.line(bob.location.x, bob.location.y, this.anchor.x, this.anchor.y);
  }
}
