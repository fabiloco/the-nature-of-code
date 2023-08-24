import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  topspeed: number;

  constructor(p: p5) {
    this.p = p;
    this.location = new Vector(p.random(p.width), p.random(p.height));
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.topspeed = 10;
  }

  update() {
    if (this.p.keyIsDown(87)) {
      this.acceleration.add(new Vector(0.0001, 0.0001));
    } else if (this.p.keyIsDown(83)) {
      this.acceleration.add(new Vector(-0.0001, -0.0001));
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);
    this.p.ellipse(this.location.x, this.location.y, 16, 16);
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
