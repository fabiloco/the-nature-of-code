import p5 from 'p5';

export class Baton {
  p: p5;

  angle: number;
  aVelocity: number;
  aAcceleration: number;

  constructor(p: p5) {
    this.p = p;
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0.001;
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);

    this.p.rectMode(this.p.CENTER);
    this.p.translate(this.p.width / 2, this.p.height / 2);
    this.p.rotate(this.angle);

    this.p.line(-50, 0, 50, 0);
    this.p.ellipse(50, 0, 8, 8);
    this.p.ellipse(-50, 0, 8, 8);
  }

  update() {
    this.aVelocity += this.aAcceleration;
    this.angle += this.aVelocity;
  }
}
