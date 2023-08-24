import p5, { Vector } from 'p5';

export class Wave {
  numberOfCircles: number;
  gapBtwCircles: number;
  amplitude: number;

  location: Vector;

  startAngle = 0;
  angleVel = 0;

  p: p5;

  constructor(
    p: p5,
    location: Vector,
    startAngle: number,
    angleVel: number,
    numberOfCircles: number,
    gapBtwCircles: number,
    amplitude: number,
  ) {
    this.p = p;
    this.location = location;

    this.numberOfCircles = numberOfCircles;

    this.startAngle = startAngle;
    this.angleVel = angleVel;
    this.gapBtwCircles = gapBtwCircles;

    this.amplitude = amplitude;
  }

  update() {}

  display() {
    this.p.stroke(0);
    this.p.fill(0, 50);

    this.startAngle += 0.015;
    let angle = this.startAngle;

    let circlesDisplayed = 0;

    for (let x = 0; x <= this.p.width; x += this.gapBtwCircles) {
      let y = this.p.map(this.p.sin(angle), -1, 1, 0, this.amplitude);

      this.p.square(x + this.location.x, y + this.location.y, 48, 48);

      angle += this.angleVel;
      circlesDisplayed++;

      if (circlesDisplayed === this.numberOfCircles) {
        return;
      }
    }
  }
}
