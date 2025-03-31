
document.querySelector('.custom-toggler').addEventListener('click', function () {
  const navCollapse = document.querySelector('.custom-nav-collapse');
  const togglerIcon = document.querySelector('.custom-toggler-icon');

  navCollapse.classList.toggle('active');
  this.classList.toggle('active');

  // Toggle body overflow to prevent scrolling when menu is open
  if (navCollapse.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});