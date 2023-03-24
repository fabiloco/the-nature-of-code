import p5 from 'p5';

export class Liquid {
  p: p5;

  x: number;
  y: number;
  width: number;
  height: number;

  dragCoefficient: number;

  constructor(
    p: p5,
    x: number,
    y: number,
    width: number,
    height: number,
    c: number
  ) {
    this.p = p;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.dragCoefficient = c;
  }

  display() {
    this.p.noStroke();
    this.p.fill(175);
    this.p.rect(this.x, this.y, this.width, this.height);
  }
}
