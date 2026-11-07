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
- **Depoimentos:** a seção `#depoimentos` está oculta (`hidden`). Insira os textos reais, com autorização
  dos clientes, confira as regras de publicidade da OAB (Provimento 205/2021) e remova o atributo `hidden`.
- **Domínio:** em Vercel > Settings > Domains.
