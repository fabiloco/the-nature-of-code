import p5, { Vector } from 'p5';

export class Box {
  location: Vector;

  angle: number;
  velocity: Vector;
  acceleration: Vector;

  p: p5;

  constructor(p: p5, position: Vector, angle: number) {
    this.location = position;
    this.p = p;

    this.angle = angle;
    this.velocity = new Vector();
    this.acceleration = new Vector();
  }

  update() {
    let gravity = 0.4;

    this.acceleration = new Vector(
      (-1 * gravity * this.p.sin(this.angle)) / 16,
      (1 * gravity * this.p.cos(this.angle)) / 16,
    );
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.acceleration.mult(0.99);
  }

  display() {
    this.p.fill(175);
    this.p.translate(this.location.x, this.location.y);
    this.p.rotate(this.angle);
    this.p.square(0, 0, 16);
  }

  go() {
    this.display();
    this.update();
  }
}
