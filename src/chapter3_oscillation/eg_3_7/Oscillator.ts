import p5, { Vector } from 'p5';

export class Oscillator {
  p: p5;

  angle: Vector;
  velocity: Vector;
  amplitude: Vector;

  constructor(p: p5) {
    this.p = p;
    this.angle = new Vector();
    this.velocity = new Vector(p.random(-0.05, 0.05), p.random(-0.05, 0.05));
    this.amplitude = new Vector(
      p.random(this.p.width / 2),
      p.random(this.p.height / 2)
    );
  }

  update() {
    this.oscillate();
  }

  oscillate() {
    this.angle.add(this.velocity);
  }

  display() {
    let x = Math.sin(this.angle.x) * this.amplitude.x;
    let y = Math.sin(this.angle.y) * this.amplitude.y;

    this.p.push();
    this.p.translate(this.p.width / 2, this.p.height / 2);
    this.p.stroke(0);
    this.p.fill(175);

    this.p.line(0, 0, x, y);
    this.p.ellipse(x, y, 16, 16);

    this.p.pop();
  }
}
