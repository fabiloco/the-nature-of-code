import p5 from 'p5';

let sketch = (p: p5) => {
  let r = 0;
  let theta = 0;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    let x = r * p.cos(theta);
    let y = r * p.sin(theta);

    p.noStroke();
    p.fill(0);

    p.ellipse(x + p.width / 2, y + p.height / 2, 16, 16);

    theta += 0.01;
    r += 0.05;
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
