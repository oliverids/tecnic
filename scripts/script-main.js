const menuButton = document.getElementById('menu'),
  header = document.querySelector('header'),
  nav = document.getElementById('nav')

menuButton.addEventListener('click', () => {
  header.classList.toggle('ativo');
})

window.onclick = e => { //fecha se a sidebar se clicar fora
  if (
    header.classList.contains('ativo') &&
    !e.target.matches('#nav') &&
    !e.target.matches('#menu') &&
    !e.target.matches('#menu div') &&
    !e.target.matches('#header .container')
  ) {
    header.classList.remove('ativo')
  }
};

function isInViewport(element) {
  let rect = element.getBoundingClientRect(),
    html = document.documentElement;

  return (
    rect.top < 500
    // rect.left >= 0 &&
    // rect.bottom <= (window.innerHeight || html.clientHeight) ,
    // rect.right <= (window.innerWidth || html.clientWidth)
  );
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const numberOne = document.getElementById("number-one"),
  numberTwo = document.getElementById("number-two"),
  numberThree = document.getElementById("number-three");


localStorage.setItem('animated', 'false');
window.addEventListener('scroll', () => {

  if (isInViewport(document.querySelector('.numbers')) && localStorage.getItem('animated') !== 'true') {
    localStorage.setItem('animated', 'true');

    animateValue(numberOne, 0, 130, 2000);
    animateValue(numberTwo, 0, 150, 2000);
    animateValue(numberThree, 0, 20, 2000);
  }
})
