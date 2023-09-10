import p5, { Vector } from 'p5';

export class Particle {
  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  lifespan: number;

  p: p5;

  constructor(p: p5, location: Vector) {
    this.p = p;

    this.location = location;
    this.velocity = new Vector(p.random(-1, 1), p.random(-2, 0));
    this.acceleration = new Vector(0, 0.05);

    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.lifespan -= 2.0;
  }

  display() {
    this.p.stroke(0, this.lifespan);
    this.p.fill(0, this.lifespan);
    this.p.ellipse(this.location.x, this.location.y, 8, 8);
  }

  isDead(): boolean {
    if (this.lifespan < 0) return true;
    return false;
  }
}
