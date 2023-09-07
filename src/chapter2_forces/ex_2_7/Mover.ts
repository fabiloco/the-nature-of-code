import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  topspeed: number;

  mass: number;

  airDragCoefficient: number;

  constructor(p: p5, mass: number, xLocation: number, yLocation: number) {
    this.p = p;
    this.location = new Vector(xLocation, yLocation);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.topspeed = 10;
    this.mass = mass;

    this.airDragCoefficient = 0.5;
  }

  update() {
    let frictionCoefficient = 0.01;
    let normalForce = 1;
    let frictionMagnitude = frictionCoefficient * normalForce;

    let friction = this.velocity.copy();

    // we get the opposite unit vector of velocity
    friction.mult(-1);
    friction.normalize();

    // we calculate friction
    friction.mult(frictionMagnitude);

    this.applyForce(friction);

    let windForce = new Vector(0.001, 0);
    this.applyForce(windForce);

    let gravityForce = new Vector(0, 0.1 * this.mass);
    this.applyForce(gravityForce);

    this.airDrag();

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
      16 * this.mass,
    );
  }

  applyForce(force: Vector) {
    let f: Vector = new Vector();
    Vector.div(force, this.mass, f);
    this.acceleration.add(f);
  }

  airDrag() {
    let speed = this.velocity.mag();
    let dragMagnitude = 100 * speed * speed;

    let drag = this.velocity.copy();
    drag.mult(-1);
    drag.normalize();

    drag.mult(dragMagnitude);

    this.applyForce(drag);
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
