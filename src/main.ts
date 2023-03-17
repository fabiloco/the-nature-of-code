import './style.css';

// document.getElementById('ex_1_1')!.addEventListener('click', () => {});

document
  .querySelectorAll<HTMLLIElement>('#excersise')
  .forEach((element: HTMLLIElement) => {
    element.addEventListener('click', () => {
      document.getElementById('excersise-canvas')!.innerHTML = '';
      import(`./${element.dataset.src}?version=${Number(new Date())}`);
    });
  });
