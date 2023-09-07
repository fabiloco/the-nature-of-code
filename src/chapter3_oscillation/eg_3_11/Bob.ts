import p5, { Vector } from 'p5';

export class Bob {
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
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.acceleration.mult(-0.99);

    if (this.p.mouseIsPressed) {
      this.location.x = this.p.mouseX;
      this.location.y = this.p.mouseY;
    }
  }

  display() {
    this.p.stroke(175);
    this.p.fill(175);
    this.p.ellipse(
      this.location.x,
      this.location.y,
      4 * this.mass,
      4 * this.mass,
    );
  }

  applyForce(force: Vector) {
    let f: Vector = new Vector();
    Vector.div(force, this.mass, f);
    this.acceleration.add(f);
  }
}
