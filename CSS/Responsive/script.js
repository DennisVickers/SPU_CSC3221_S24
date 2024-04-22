function toggleMenu() {
  const menu = document.querySelector('.menu');
  if (menu.classList.contains('active')) {
      menu.classList.remove('active');
  } else {
      menu.classList.add('active');
  }
}
