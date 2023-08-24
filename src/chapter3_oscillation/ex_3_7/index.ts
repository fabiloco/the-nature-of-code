import p5, { Vector } from 'p5';
import { Oscillator } from './Oscillator';

let sketch = (p: p5) => {
  let oscillators = new Array<Oscillator>(6);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    let legsBySide = 5;

    for (let index = 0; index < legsBySide; index++) {
      let leftLeg = new Oscillator(p, false);
      oscillators.push(leftLeg);
    }

    for (let index = 0; index < legsBySide; index++) {
      let rightLeg = new Oscillator(p, true);
      oscillators.push(rightLeg);
    }
  };

  p.draw = () => {
    p.background(255);

    oscillators.forEach((oscillator) => {
      let velocity = new Vector(0.05, 0.05);
      oscillator.oscillate(velocity);
      oscillator.display();
    });
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
