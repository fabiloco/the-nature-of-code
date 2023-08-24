import p5 from 'p5';

let sketch = (p: p5) => {
  let startAngle = 0;
  let angleVel = 0.23;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    p.stroke(0);
    p.fill(0, 50);

    startAngle += 0.015;
    let angle = startAngle;

    for (let x = 0; x <= p.width; x += 24) {
      let y = p.map(p.noise(angle), -1, 1, 0, p.height);

      p.ellipse(x, y, 48, 48);

      angle += angleVel;
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
