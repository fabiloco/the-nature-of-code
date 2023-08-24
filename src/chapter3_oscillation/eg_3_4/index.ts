import p5 from 'p5';

let sketch = (p: p5) => {
  let r = 75;
  let theta = 0;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    let x = r * p.cos(theta);
    let y = r * p.sin(theta);

    p.stroke(0);
    p.fill(115);

    p.line(p.width / 2, p.height / 2, x + p.width / 2, y + p.height / 2);

    p.ellipse(x + p.width / 2, y + p.height / 2, 32, 32);
    theta += 0.01;
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
