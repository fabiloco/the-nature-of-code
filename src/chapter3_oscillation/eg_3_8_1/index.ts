import p5 from 'p5';

let sketch = (p: p5) => {
  let angle = 0;
  let angleVel = 0.2;
  let amplitude = 100;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    p.stroke(0);
    p.fill(115);

    for (let i = 0; i <= p.width; i += 24) {
      let y = amplitude * p.sin(angle);

      p.ellipse(i, y + p.height / 2, 48, 48);

      angle += angleVel;
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
