import p5, { Vector } from 'p5';

export class Mover {
  p: p5;

  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  topspeed: number;

  tx: number;
  ty: number;

  constructor(p: p5) {
    this.p = p;
    this.location = new Vector(p.width / 2, p.height / 2);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.topspeed = 10;

    this.tx = 0;
    this.ty = 10000;
  }

  update() {
    let helium = new Vector(0, -0.002);
    this.acceleration.add(helium);

    let windForce = new Vector(
      this.p.map(this.p.noise(this.tx, this.ty), 0, 1, 0, -0.005),
      this.p.map(this.p.noise(this.tx, this.ty), 0, 1, 0.005, -0.005)
    );
    this.acceleration.add(windForce);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);

    this.acceleration.mult(0);

    this.tx++;
    this.ty++;
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);
    this.p.ellipse(this.location.x, this.location.y, 16, 16);
  }

  checkEdges() {
    if (this.location.x > this.p.width) {
      let borderForce = new Vector(-0.2, 0);
      this.acceleration.add(borderForce);
    } else if (this.location.x < 0) {
      let borderForce = new Vector(0.2, 0);
      this.acceleration.add(borderForce);
    }

    if (this.location.y > this.p.height) {
      let borderForce = new Vector(0, -0.2);
      this.acceleration.add(borderForce);
    } else if (this.location.y < 0) {
      let borderForce = new Vector(0, 0.2);
      this.acceleration.add(borderForce);
    }
  }
}
