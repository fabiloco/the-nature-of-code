import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  topspeed: number;

  mass: number;

  theta: number;

  constructor(p: p5) {
    this.p = p;
    this.location = new Vector(p.width / 2, p.height / 2);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.topspeed = 10;

    this.mass = 10;
    this.theta = 0;
  }

  update() {
    // A
    if (this.p.keyIsDown(65)) {
      this.theta += 1.5;
    }

    // D
    if (this.p.keyIsDown(68)) {
      this.theta -= 1.5;
    }

    // Z
    if (this.p.keyIsDown(87)) {
      let force = Vector.fromAngle((this.theta * Math.PI) / 180);
      this.applyForce(force);
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);

    this.p.push();
    this.p.rectMode(this.p.CENTER);
    this.p.translate(this.location.x, this.location.y);
    this.p.rotate((this.theta * Math.PI) / 180 - Math.PI / 2);

    this.p.rect(-10, -25, 10, 10);
    this.p.rect(10, -25, 10, 10);
    this.p.triangle(-20, -25, 20, -25, 0, 25);

    this.p.pop();
  }

  applyForce(force: Vector) {
    let f: Vector = new Vector();
    Vector.div(force, this.mass, f);
    this.acceleration.add(f);
  }

  checkEdges() {
    if (this.location.x > this.p.width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = this.p.width;
    }

    if (this.location.y > this.p.height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = this.p.height;
    }
  }
}
