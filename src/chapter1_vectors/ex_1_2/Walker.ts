import p5, { Vector } from 'p5';

export class Walker {
  location: Vector;
  p: p5;

  constructor(p: p5) {
    this.p = p;
    this.location = new Vector(p.width / 2, p.height / 2);
  }

  render() {
    this.p.stroke(0);
    this.p.point(this.location.x, this.location.y);
  }

  step() {
    var choice = this.p.floor(this.p.random(4));
    if (choice === 0) {
      this.location.x++;
    } else if (choice == 1) {
      this.location.x--;
    } else if (choice == 2) {
      this.location.y++;
    } else {
      this.location.y--;
    }
    this.location.x = this.p.constrain(this.location.x, 0, this.p.width - 1);
    this.location.y = this.p.constrain(this.location.y, 0, this.p.height - 1);
  }
}
