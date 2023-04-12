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
    p.strokeWeight(2);
    p.noFill();

    p.beginShape();
    for (let x = 0; x <= p.width; x += 5) {
      let y = p.map(Math.sin(angle), -1, 1, 0, p.height);

      p.vertex(x, y);

      angle += angleVel;
    }
    p.endShape();
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
