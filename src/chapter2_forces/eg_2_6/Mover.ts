import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;

  mass: number;

  constructor(p: p5, mass: number, xLocation: number, yLocation: number) {
    this.p = p;
    this.location = new Vector(xLocation, yLocation);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.mass = mass;

    this.applyForce(new Vector(1, 0));
  }

  update() {
    this.velocity.add(this.acceleration);
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
}
