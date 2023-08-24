import p5 from 'p5';

let sketch = (p: p5) => {
  let x = 100;
  let y = 100;
  let xspeed = 1;
  let yspeed = 3.3;

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);

    x += xspeed;
    y += yspeed;

    if (x > p.width || x < 0) {
      xspeed *= -1;
    }

    if (y > p.height || y < 0) {
      yspeed *= -1;
    }

    p.stroke(0);
    p.fill(175);

    p.ellipse(x, y, 50, 50);
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
