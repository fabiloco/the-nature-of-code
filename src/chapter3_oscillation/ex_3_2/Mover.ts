import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;

  mass: number;

  angle: number;
  aVelocity: number;
  aAcceleration: number;

  constructor(p: p5, mass: number, xLocation: number, yLocation: number) {
    this.p = p;
    this.location = new Vector(xLocation, yLocation);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.mass = mass;

    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
  }

  update() {
    let gravityForce = new Vector(0, 0.1 * this.mass);
    this.applyForce(gravityForce);

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.aAcceleration = this.acceleration.x / 10;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = this.p.constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;

    this.acceleration.mult(0);
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);

    this.p.rectMode(this.p.CENTER);
    this.p.push();

    this.p.translate(this.location.x, this.location.y);
    this.p.rotate(this.angle);

    this.p.rect(
      0,
      0,
      // this.location.x,
      // this.location.y,
      16 * this.mass,
      16 * this.mass
    );
    this.p.pop();
  }

  applyForce(force: Vector) {
    let f: Vector = new Vector();
    Vector.div(force, this.mass, f);
    this.acceleration.add(f);
  }
}
