/*
 * Avaliações do Google.
 * 1) Mostra as avaliações abaixo (copiadas do perfil no Google, sem alterações).
 * 2) Se a função /api/reviews estiver configurada na Vercel, substitui pelas avaliações atuais do Google.
 *
 * Para adicionar outra avaliação, copie um bloco { ... } da lista AVALIACOES.
 *   nota:     opcional (1 a 5). Se omitida, as estrelas não são exibidas.
 *   cortado:  true se o texto veio truncado do Google ("… Mais"); mostra link "Ler avaliação completa".
 *   resposta: opcional, resposta do proprietário.
 */
var AVALIACOES = [
  { autor: 'Geisa Dayane', quando: 'nov. 2026',
    texto: 'Ótimo atendimento, atenção e profissionalismo em todos os momentos. Uma experiência muito positiva. Super recomendo!👏🏻👏🏻👏🏻👏🏻' },
  { autor: 'Elizangia Souza Silva', quando: 'nov. 2026',
    texto: 'Na Dr. Raquel Coelho Advocacia e consultoria Jurídica, você encontra uma defensora que faz jus ao seu nome, além de um atendimento incrível, além de muito atenciosa nos detalhes. Tenha a certeza que você não vai se arrepender de contratar os serviços de Dr Raquel Coelho. Sempre que eu e minha família precisar já temos nossa advogada, Dr. Raquel Coelho, muito obrigada.' },
  { autor: 'Emilly Vitoria Souza Silva', quando: 'nov. 2026',
    texto: 'Dr. Raquel coelho "A forma como você se prepara, estuda os detalhes e domina o assunto transmite uma segurança enorme. É um privilégio contar com uma profissional do seu nível."',
    resposta: 'Obrigada pela avaliação, cada cliente trás uma história de vida é um aprendizado, poder ajudar com atenção aos detalhes é fundamental. Estou a disposição.' },
  { autor: 'Nara Silva', quando: 'nov. 2026',
    texto: 'Tive a oportunidade de buscar orientação com a Dra. Raquel em uma situação bastante delicada, envolvendo uma questão judicial em que uma das partes estava sem entender muito bem a situação e sem saber a quem recorrer. Ao procurar a Dra. Raquel, recebi orientações claras, atenciosas e muito esclarecedoras sobre como proceder. Foi extremamente prestativa, demonstrando conhecimento, profissionalismo e sensibilidade ao lidar com a situação. Sou muito grata pela atenção e pelo cuidado! Recomendo seu trabalho.' },
  { autor: 'Adriana Andressa', quando: 'nov. 2026',
    texto: 'Profissional de excelência. Super indico. Além de ser sensível com a realidade financeira de cada cliente, ela instrui, orienta e muito solista independente do dia e horário.' }
];

(function () {
  var MAPS = 'https://www.google.com/maps/place/Dra.+Raquel+Coelho+Advocacia+e+Consultoria+Jur%C3%ADdica/@-16.372838,-39.593489,17z/data=!4m8!3m7!1s0x7366d88fab4ef89:0x7159ae6d54dc9cd6!8m2!3d-16.372838!4d-39.593489!9m1!1b1!16s%2Fg%2F11z_6bnq6b?hl=pt';
  var STAR = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" fill="currentColor"/></svg>';
  var sec = document.getElementById('avaliacoes');
  if (!sec) return;

  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function initials(n) { var p = String(n).trim().split(/\s+/); return ((p[0] || '?')[0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase(); }
  function stars(n) { var h = ''; for (var i = 0; i < 5; i++) h += '<span class="' + (i < n ? 'text-gold' : 'text-ivory/20') + '">' + STAR + '</span>'; return h; }

  function card(v) {
    var n = v.nota ? Math.max(1, Math.min(5, Math.round(v.nota))) : 0;
    return '<figure class="card flex w-full flex-col gap-5 p-7 md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">' +
      '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C9A24E" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6"/></svg>' +
      (n ? '<div class="flex items-center gap-1" role="img" aria-label="Nota ' + n + ' de 5">' + stars(n) + '</div>' : '') +
      '<blockquote class="font-light leading-relaxed text-ivory/85">' + esc(v.texto) + '</blockquote>' +
      (v.cortado ? '<a href="' + MAPS + '" class="text-sm font-medium uppercase tracking-[.12em] text-gold hover:text-gold-hi">Ler avaliação completa no Google →</a>' : '') +
      (v.resposta ? '<div class="rounded-sm border border-gold/25 bg-ink/60 p-4 text-sm font-light leading-relaxed text-ivory/80"><strong class="mb-1 block text-xs font-medium uppercase tracking-[.12em] text-gold">Resposta da Dra. Raquel Coelho</strong>' + esc(v.resposta) + '</div>' : '') +
      '<figcaption class="mt-auto flex items-center gap-4">' +
      '<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-metal font-display text-xl font-semibold text-[#1A1405]" aria-hidden="true">' + esc(initials(v.autor)) + '</span>' +
      '<span class="min-w-0"><span class="block font-display text-xl font-semibold leading-tight">' + esc(v.autor) + '</span>' +
      '<span class="block text-xs uppercase tracking-[.12em] text-ivory/60">Avaliação no Google' + (v.quando ? ' · ' + esc(v.quando) : '') + '</span></span></figcaption></figure>';
  }

  function render(list, resumo, link) {
    document.getElementById('lista-avaliacoes').innerHTML = list.map(card).join('');
    var r = document.getElementById('resumo-avaliacoes');
    if (resumo && resumo.rating) {
      r.innerHTML = '<span class="font-display text-5xl font-medium leading-none"><span class="gold-num">' + esc(String(resumo.rating).replace('.', ',')) + '</span></span>' +
        '<span class="flex flex-col gap-1"><span class="flex items-center gap-1" role="img" aria-label="Nota média ' + esc(resumo.rating) + ' de 5">' + stars(Math.round(resumo.rating)) + '</span>' +
        '<span class="text-sm text-ivory/75">' + esc(resumo.total) + ' avaliações no Google</span></span>';
      r.hidden = false;
    }
    document.getElementById('cta-avaliacoes').innerHTML =
      '<a href="' + (link || MAPS) + '" class="btn btn-gold">Ver todas as avaliações no Google</a>';
  }

  render(AVALIACOES);

  // Atualização opcional com as avaliações atuais do Google (requer /api/reviews configurada)
  if (!window.fetch) return;
  fetch('/api/reviews', { headers: { Accept: 'application/json' } })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
    .then(function (d) {
      if (!d || !d.reviews || !d.reviews.length) return;
      render(d.reviews.map(function (v) { return { autor: v.author, nota: v.rating, texto: v.text, quando: v.when }; }),
        { rating: d.rating, total: d.total }, d.mapsUri);
    })
    .catch(function () { /* mantém as avaliações fixas */ });
})();
