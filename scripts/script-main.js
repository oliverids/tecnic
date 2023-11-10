const menuButton = document.getElementById('menu'),
  header = document.querySelector('header'),
  nav = document.getElementById('nav')

menuButton.addEventListener('click', () => {
  header.classList.toggle('ativo');
})

window.onclick = e => {
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