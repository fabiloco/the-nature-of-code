import p5, { Vector } from 'p5';

document.getElementById('excersise')!.innerHTML = '';

let sketch = (p: p5) => {
  let location: Vector;
  let velocity: Vector;

  p.setup = () => {
    location = new Vector(100, 100);
    velocity = new Vector(1, 3.3);

    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    location.add(velocity);

    if (location.x > p.width || location.x < 0) {
      velocity.x *= -1;
    }

    if (location.y > p.height || location.y < 0) {
      velocity.y *= -1;
    }

    p.stroke(0);
    p.fill(175);

    p.ellipse(location.x, location.y, 50, 50);
  };
};

new p5(sketch, document.getElementById('excersise')!);
