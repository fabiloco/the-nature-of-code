import p5 from 'p5';

let sketch = (p: p5) => {
  let period = 120;
  let amplitude = 100;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    let x = amplitude * p.cos((Math.PI * 2 * p.frameCount) / period);

    p.stroke(0);
    p.fill(115);
    p.translate(p.width / 2, p.height / 2);

    p.line(0, 0, x, 0);

    p.ellipse(x, 0, 20, 20);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
