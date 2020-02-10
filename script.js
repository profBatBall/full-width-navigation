function menuToggle() {
  var nav = document.getElementById('menu-overlay');
  var menuToggle = document.getElementById('toggleButton');

  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
}