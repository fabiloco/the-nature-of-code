import p5, { Image, Vector } from 'p5';
import { Particle } from './Particle';

export class Conffetti extends Particle {
  img: Image;

  constructor(p: p5, location: Vector, size: number) {
    super(p, location, size);
    this.img = this.p.loadImage('fuzzy.png');
  }

  display(): void {
    this.p.imageMode(this.p.CENTER);
    this.p.tint(255, this.lifespan);
    this.p.image(
      this.img,
      this.location.x,
      this.location.y,
      this.size,
      this.size,
    );
  }
}
