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
    let windForce = new Vector(0.01, 0);
    this.applyForce(windForce);

    let gravityForce = new Vector(0, 0.01);
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

  checkEdges() {
    if (this.location.x > this.p.width) {
      let force = new Vector(-1, 0);
      this.applyForce(force);
    } else if (this.location.x < 0) {
      let force = new Vector(1, 0);
      this.applyForce(force);
    }

    if (this.location.y > this.p.height) {
      let force = new Vector(0, -1);
      this.applyForce(force);
    } else if (this.location.y < 0) {
      let force = new Vector(0, 1);
      this.applyForce(force);
    }
  }
}
