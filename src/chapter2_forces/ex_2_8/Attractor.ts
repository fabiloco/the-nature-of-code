import p5, { Vector } from 'p5';
import { Mover } from './Mover';

export class Attractor {
  p: p5;

  mass: number;
  G: number;
  location: Vector;

  constructor(p: p5) {
    this.p = p;
    this.location = new Vector(
      this.p.random(0, this.p.width),
      this.p.random(0, this.p.height)
    );
    this.mass = 20;

    this.G = 0.4;
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175, 200);
    this.p.ellipse(
      this.location.x,
      this.location.y,
      this.mass * 2,
      this.mass * 2
    );
  }

  attract(m: Mover) {
    let force = Vector.sub(this.location, m.location);
    let distance = force.mag();

    distance = this.p.constrain(distance, 5.0, 25.0);

    force.normalize();

    let strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);

    return force;
  }
}
