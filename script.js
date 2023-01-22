
const main = document.getElementById('body');
const div = document.createElement('div');
div.classList.add('circle');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


main.addEventListener('click', (e)=>{
    let X = e.clientX;
    let Y = e.clientY;
    // console.log(X,Y);
    div.style.left = X-15 + 'px';
    div.style.top = Y-15 + 'px';
    div.style.backgroundColor = getRandomColor();
    let clo = div.cloneNode(true);
    main.append(clo);
});
