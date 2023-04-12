import p5 from 'p5';
import { Oscillator } from './Oscillator';

let sketch = (p: p5) => {
  let oscillators = new Array<Oscillator>(20);

  p.setup = () => {
    p.createCanvas(640, 360);
    p.background(255);

    for (let i = 0; i < oscillators.length; i++) {
      oscillators[i] = new Oscillator(p);
    }
  };

  p.draw = () => {
    p.background(255);

    oscillators.forEach((oscillator) => {
      oscillator.update();
      oscillator.display();
    });
  };
};

new p5(sketch, document.getElementById('excersise-canvas')!);
