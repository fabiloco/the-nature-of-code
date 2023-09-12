import p5, { Vector } from 'p5';

export class Particle {
  location: Vector;
  velocity: Vector;
  acceleration: Vector;
  lifespan: number;

  p: p5;

  size: number;

  constructor(p: p5, location: Vector, size: number) {
    this.p = p;

    this.location = location;
    this.velocity = new Vector(p.random(-1, 1), p.random(-2, 0));
    this.acceleration = new Vector(0, 0.05);

    this.lifespan = 255;
    this.size = size;
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
    this.p.fill(255, this.lifespan);
    this.p.rect(this.location.x, this.location.y, this.size);
  }

  isDead(): boolean {
    if (this.lifespan < 0) return true;
    return false;
  }
}
