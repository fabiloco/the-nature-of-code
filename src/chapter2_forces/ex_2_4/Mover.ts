import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  topspeed: number;

  mass: number;

  constructor(p: p5, mass: number, xLocation: number, yLocation: number) {
    this.p = p;
    this.location = new Vector(xLocation, yLocation);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.topspeed = 10;
    this.mass = mass;
  }

  update() {
    this.checkFrictionPockets();

    let windForce = new Vector(0.001, 0);
    this.applyForce(windForce);

    let gravityForce = new Vector(0, 0.1 * this.mass);
    this.applyForce(gravityForce);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);
    this.p.ellipse(
      this.location.x,
      this.location.y,
      16 * this.mass,
      16 * this.mass
    );
  }

  applyForce(force: Vector) {
    let f: Vector = new Vector();
    Vector.div(force, this.mass, f);
    this.acceleration.add(f);
  }

  checkFrictionPockets() {
    let frictionCoefficient = 0;
    let direction = -1;

    let friction = this.velocity.copy();

    friction.normalize();

    if (
      this.location.y >= this.p.height / 2 &&
      this.location.y <= this.p.height / 2 + 20
    ) {
      frictionCoefficient = 1;
      direction = 1;
    }

    if (
      this.location.y >= this.p.height / 2 + 100 &&
      this.location.y <= this.p.height / 2 + 20 + 100
    ) {
      frictionCoefficient = 1;
      direction = -1;
    }

    if (
      this.location.y >= this.p.height / 2 - 100 &&
      this.location.y <= this.p.height / 2 + 20 - 100
    ) {
      frictionCoefficient = 1;
      direction = -1;
    }

    friction.mult(direction);
    friction.mult(frictionCoefficient);
    this.applyForce(friction);
  }

  checkEdges() {
    if (this.location.x > this.p.width) {
      this.location.x = this.p.width;
      this.velocity.x *= -1;
    } else if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }

    if (this.location.y > this.p.height) {
      this.location.y = this.p.height;
      this.velocity.y *= -1;
    } else if (this.location.y < 0) {
      this.location.y = 0;
      this.velocity.y *= -1;
    }
  }
}
