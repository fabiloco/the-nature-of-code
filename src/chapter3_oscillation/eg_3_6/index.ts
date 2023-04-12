import p5 from 'p5';

let sketch = (p: p5) => {
  let period = 120;
  let amplitude = 100;

  let angle = 0;
  let aVelocity = 0.5;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    let x = amplitude * Math.cos(angle);
    angle += aVelocity;

    p.ellipseMode(p.CENTER);
    p.stroke(0);
    p.fill(115);
    p.translate(p.width / 2, p.height / 2);

    p.line(0, 0, x, 0);

    p.ellipse(x, 0, 20, 20);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
