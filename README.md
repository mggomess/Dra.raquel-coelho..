# Raquel Coelho Advocacia — site institucional

Site estático (HTML + Tailwind CSS 3). Identidade visual (cores, fontes, logo) em `tailwind.config.js`.

## Estrutura

```
public/            → pasta publicada
  index.html
  css/styles.css   → gerado pelo Tailwind (já incluído)
  img/             → logo, monograma e fotos
src/input.css      → componentes Tailwind (botões, cards, títulos)
tailwind.config.js → cores (ink, gold, ivory) e fontes (Cormorant Garamond, Jost)
vercel.json        → build e cache
```

## Deploy na Vercel

1. Envie esta pasta para um repositório no GitHub.
2. Na Vercel: **Add New > Project**, importe o repositório.
3. Framework Preset: **Other**. As demais opções vêm do `vercel.json`
   (`npm run build`, pasta de saída `public`). Clique em **Deploy**.

Alternativa sem build: arraste só a pasta `public` para o Netlify Drop ou use `vercel --prod` dentro de `public`.

## Desenvolvimento

```
npm install
npm run dev     # recompila o CSS ao editar
npm run build   # CSS final minificado
```

## Para ajustar

- **WhatsApp:** número `556992165145` (busque e troque em `public/index.html`).
- **Clientes atendidos:** na seção #numeros, informe o número em data-counter e apague o atributo hidden do bloco.
- **Domínio:** em Vercel > Settings > Domains.

## Avaliações do Google

A seção #avaliacoes busca as avaliações reais do perfil no Google pela função `api/reviews.js` (se não estiver configurada, mostra as avaliações fixas de `public/js/avaliacoes.js`).

1. No Google Cloud, crie um projeto, ative a **Places API (New)** e gere uma chave de API (restrinja a chave à Places API).
2. Na Vercel: **Settings > Environment Variables** e crie `GOOGLE_PLACES_API_KEY` com a chave.
   Opcional: `GOOGLE_PLACE_ID` (se vazio, a função localiza o perfil pelo nome e endereço).
3. Faça um novo deploy. O resultado fica em cache por 24 h.

Limite da API oficial do Google: ela devolve no máximo as 5 avaliações mais relevantes. O botão
"Ver todas as avaliações no Google" leva ao perfil completo.
