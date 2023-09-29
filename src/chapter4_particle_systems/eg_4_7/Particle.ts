import p5, { Vector } from 'p5';

export class Particle {
  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  lifespan: number;
  mass: number;

  p: p5;

  constructor(p: p5, location: Vector, mass: number = 10) {
    this.p = p;

    this.location = location;
    this.velocity = new Vector(p.random(-1, 1), p.random(-2, 0));
    this.acceleration = new Vector(0, 0);

    this.lifespan = 255;

    this.mass = mass;
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(force: Vector) {
    let f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2.0;
  }

  display() {
    this.p.stroke(255, this.lifespan);
    this.p.fill(0, this.lifespan);
    this.p.ellipse(this.location.x, this.location.y, 8, 8);
  }

  isDead(): boolean {
    if (this.lifespan < 0) return true;
    return false;
  }
}
