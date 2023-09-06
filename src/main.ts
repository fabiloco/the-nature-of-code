import './style.css';

// document.getElementById('ex_1_1')!.addEventListener('click', () => {});

window.addEventListener('load', () => {
  let activeExcersie = localStorage.getItem('active-excersise');

  if (activeExcersie) {
    import(`./${activeExcersie}?version=${Number(new Date())}`);
  }
});

document
  .querySelectorAll<HTMLLIElement>('#excersise')
  .forEach((element: HTMLLIElement) => {
    element.addEventListener('click', () => {
      document.getElementById('excersise-canvas')!.innerHTML = '';
      import(`./${element.dataset.src}?version=${Number(new Date())}`);
      document.getElementById('title')?.scrollIntoView();

      if (element.dataset.src) {
        localStorage.setItem('active-excersise', element.dataset.src);
      }
    });
  });
