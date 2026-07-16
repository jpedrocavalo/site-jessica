document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.navtoggle');
  var menu = document.querySelector('.navmenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    menu.classList.toggle('open');
  });

  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      item.classList.toggle('open');
    });
  });
});
