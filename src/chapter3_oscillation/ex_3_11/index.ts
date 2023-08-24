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

    for (let x = 0; x <= p.width; x += 8) {
      let y = p.map(p.sin(angle), -1, 1, 0, p.height / 4);

      if (x >= 100 && x <= 150) {
        angleVel = 0.01;
      } else if (x > 150 && x <= 250) {
        angleVel = 1;
      } else if (x >= 450 && x <= 550) {
        angleVel = 0.7;
      } else {
        angleVel = 0.23;
      }

      p.ellipse(x, y + p.height / 4, 48, 48);

      angle += angleVel;
    }
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
