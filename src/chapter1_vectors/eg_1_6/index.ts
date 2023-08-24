import p5, { Vector } from 'p5';

let sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    let mouse = new Vector(p.mouseX, p.mouseY);
    let center = new Vector(p.width / 2, p.height / 2);
    mouse.sub(center);

    mouse.normalize();
    mouse.mult(100);

    p.translate(p.width / 2, p.height / 2);

    p.line(0, 0, mouse.x, mouse.y);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
