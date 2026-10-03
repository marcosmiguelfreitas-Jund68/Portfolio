// Botão "Copiar e-mail": copia o endereço e confirma no próprio botão.
document.querySelectorAll('[data-copy]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var text = btn.getAttribute('data-copy');
    var original = btn.textContent;
    function done(msg) {
      btn.textContent = msg;
      setTimeout(function () { btn.textContent = original; }, 2000);
    }
    function selectFallback() {
      var el = document.getElementById('email');
      if (!el) return;
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      done('Selecionado: copie com Ctrl+C');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done('Copiado'); }, selectFallback);
    } else {
      selectFallback();
    }
  });
});

// Índice lateral: marca a seção que está na tela.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var visible = {};
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    var current = null;
    links.forEach(function (a) { var id = a.getAttribute('href').slice(1); if (!current && visible[id]) current = id; });
    if (!current) return;
    links.forEach(function (a) { a.classList.toggle('is-current', a === byId[current]); });
  }, { rootMargin: '-10% 0px -55% 0px' });
  Object.keys(byId).forEach(function (id) { var el = document.getElementById(id); if (el) obs.observe(el); });
})();
