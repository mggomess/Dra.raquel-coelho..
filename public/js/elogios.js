/*
 * ELOGIOS (avaliações do Google)
 * Para adicionar uma avaliação, copie um bloco { ... } abaixo e preencha:
 *   nome:  nome como aparece no Google
 *   nota:  1 a 5
 *   data:  ex.: "há 2 meses" ou "10/2026" (opcional)
 *   texto: o texto da avaliação, exatamente como foi publicado
 * Deixe a lista vazia ([]) para exibir o convite "Avalie no Google".
 */
window.ELOGIOS = [
  // { nome: "Nome do Cliente", nota: 5, data: "há 1 mês", texto: "Texto da avaliação." },
];

(function () {
  var MAPS = 'https://www.google.com/maps/place/Dra.+Raquel+Coelho+Advocacia+e+Consultoria+Jur%C3%ADdica/@-16.372838,-39.593489,17z/data=!4m8!3m7!1s0x7366d88fab4ef89:0x7159ae6d54dc9cd6!8m2!3d-16.372838!4d-39.593489!9m1!1b1!16s%2Fg%2F11z_6bnq6b?hl=pt';
  var STAR = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor"/></svg>';

  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function initials(n) {
    var p = String(n).trim().split(/\s+/);
    return ((p[0] || '?')[0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
  }

  window.renderElogios = function (list) {
    var box = document.getElementById('lista-elogios');
    var vazio = document.getElementById('elogios-vazio');
    if (!box || !list || !list.length) return;
    if (vazio) vazio.style.display = 'none';
    box.querySelectorAll('[data-elogio]').forEach(function (n) { n.remove(); });
    list.forEach(function (e) {
      var nota = Math.max(1, Math.min(5, parseInt(e.nota, 10) || 5));
      var stars = '';
      for (var i = 0; i < 5; i++) stars += '<span class="' + (i < nota ? 'text-gold' : 'text-ivory/20') + '">' + STAR + '</span>';
      var fig = document.createElement('figure');
      fig.setAttribute('data-elogio', '');
      fig.className = 'card flex flex-col gap-5 p-7';
      fig.innerHTML =
        '<div class="flex items-center gap-1" role="img" aria-label="Nota ' + nota + ' de 5">' + stars + '</div>' +
        '<blockquote class="font-light leading-relaxed text-ivory/85">' + esc(e.texto) + '</blockquote>' +
        '<figcaption class="mt-auto flex items-center gap-4">' +
        '<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-metal font-display text-xl font-semibold text-[#1A1405]" aria-hidden="true">' + esc(initials(e.nome)) + '</span>' +
        '<span class="min-w-0"><span class="block font-display text-xl font-semibold leading-tight">' + esc(e.nome) + '</span>' +
        '<span class="block text-xs uppercase tracking-[.12em] text-ivory/60">Avaliação no Google' + (e.data ? ' · ' + esc(e.data) : '') + '</span></span>' +
        '</figcaption>';
      box.appendChild(fig);
    });
    if (!document.getElementById('elogios-mais')) {
      var a = document.createElement('div');
      a.id = 'elogios-mais';
      a.className = 'mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row';
      a.innerHTML = '<a href="' + MAPS + '" class="btn btn-line">Ver todas as avaliações no Google</a>' +
        '<a href="' + MAPS + '" class="btn btn-gold">Deixar a sua avaliação</a>';
      box.parentNode.appendChild(a);
    }
  };

  window.renderElogios(window.ELOGIOS);
})();
