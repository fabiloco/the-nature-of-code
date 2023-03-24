import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;

  mass: number;
  G: number;

  constructor(p: p5, mass: number, xLocation: number, yLocation: number) {
    this.p = p;
    this.location = new Vector(xLocation, yLocation);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.mass = mass;

    this.G = 2;

    // this.applyForce(new Vector(1, 0));
  }

  update() {
    this.attract();

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.checkEdges();

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

  repulse(m: Mover) {
    let force = Vector.sub(this.location, m.location);
    let distance = force.mag();

    distance = this.p.constrain(distance, 5.0, 25.0);

    force.normalize();

    let strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    force.mult(-1);

    return force;
  }

  attract() {
    let force = Vector.sub(
      new Vector(this.p.mouseX, this.p.mouseY),
      this.location
    );
    let distance = force.mag();

    distance = this.p.constrain(distance, 5.0, 25.0);

    force.normalize();

    let strength = (this.G * this.mass * 20) / (distance * distance);
    force.mult(strength);

    console.log(force);

    this.applyForce(force);
  }
}
