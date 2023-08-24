import p5, { Vector } from 'p5';

export class Pendulum {
  location: Vector;
  origin: Vector;

  r: number;

  angle: number;
  aVelocity: number;
  aAcceleration: number;

  damping: number;

  p: p5;

  constructor(p: p5, origin: Vector, r: number) {
    this.origin = origin;
    this.r = r;

    this.location = new Vector();

    this.angle = p.PI / 4;

    this.aVelocity = 0.0;

    this.aAcceleration = 0.0;

    this.damping = 0.995;

    this.p = p;
  }

  go() {
    this.display();
    this.update();
  }

  update() {
    let gravity = 0.4;

    this.aAcceleration = ((-1 * gravity) / this.r) * this.p.sin(this.angle);

    this.aVelocity += this.aAcceleration;
    this.angle += this.aVelocity;

    this.aVelocity *= this.damping; // some fake friction
  }

  display() {
    this.location.set(
      this.r * this.p.sin(this.angle),
      this.r * this.p.cos(this.angle),
      0,
    );
    this.location.add(this.origin);

    this.p.stroke(0);
    this.p.line(this.origin.x, this.origin.y, this.location.x, this.location.y);

    this.p.fill(175);
    this.p.ellipse(this.location.x, this.location.y, 16, 16);
  }
}
