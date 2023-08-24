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

    let y = (amplitude / 2) * p.sin((Math.PI * 2 * p.frameCount) / period);
    let x = amplitude * p.cos((Math.PI * 2 * p.frameCount) / period);

    y = p.map(y, -100, 100, 0, 100);
    // x = p.map(x, -100, 100, 0, 100);

    p.stroke(0);
    p.fill(115);
    p.translate(p.width / 2, p.height / 2);

    p.line(0, -p.height / 2, x, y);

    p.ellipse(x, y, 20, 20);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
