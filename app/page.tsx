"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Karolina Bickel — início">
          <span className="brand-name">Karolina Bickel</span>
          <span className="brand-field">Advocacia internacional</span>
        </a>

        <a className="header-contact" href="#contato">
          Agendar conversa <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true">
          <img src="/images/karolina-04.jpg" alt="" fetchPriority="high" />
        </div>
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="kicker"><span /> Direito sem fronteiras. Estratégia sem improviso.</p>
            <h1>
              Empresas, patrimônio e residência —
              <em> conectados por uma única estratégia.</em>
            </h1>
            <p className="hero-intro">
              Estruturação jurídica internacional para quem vive, investe ou expande negócios entre países.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contato">
                Apresentar meu cenário <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#visao">Conhecer a visão <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-signature" aria-label="Karolina Bickel, advocacia e estruturação internacional">
            <span>Karolina Bickel</span>
            <small>Advocacia &amp; Estruturação Internacional</small>
          </div>
        </div>

        <div className="hero-footer" aria-label="Frentes de atuação">
          <span>Empresas nos EUA</span>
          <span>Residência no Paraguai</span>
          <span>Offshores &amp; Banking</span>
          <span>Estruturação patrimonial</span>
        </div>
      </section>

      <section className="vision" id="visao">
        <div className="section-heading reveal">
          <p className="section-label">Visão estratégica</p>
          <h2>Internacionalizar exige enxergar <em>o que existe entre as fronteiras.</em></h2>
        </div>

        <div className="vision-grid">
          <div className="vision-copy reveal">
            <p className="lead">
              Quando empresa, residência e patrimônio estão em países diferentes, nenhuma decisão funciona sozinha.
            </p>
            <p>
              O trabalho começa antes da abertura de uma empresa ou do protocolo de um pedido. Cada jurisdição, risco e objetivo é colocado no mesmo mapa para que a estrutura faça sentido como um todo — agora e no próximo movimento.
            </p>
            <a className="line-link" href="#contato">Apresentar meu cenário <span>→</span></a>
          </div>

          <figure className="vision-photo reveal">
            <img src="/images/karolina-01.jpg" alt="Karolina Bickel em retrato profissional" loading="lazy" />
            <figcaption>
              <small>ESTRUTURA INTERNACIONAL</small>
              <p>Não é sobre abrir caminhos isolados. É sobre fazer cada decisão apontar para a mesma direção.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-photo" aria-hidden="true">
          <img src="/images/karolina-02.jpg" alt="" loading="lazy" />
        </div>
        <div className="contact-overlay" aria-hidden="true" />
        <div className="contact-content reveal">
          <p className="section-label">Próximo passo</p>
          <h2>Seu próximo movimento internacional começa com <em>uma conversa objetiva.</em></h2>
          <p>Conte quais países, negócios ou decisões estão envolvidos. A partir disso, o cenário pode ser analisado com clareza.</p>
          <div className="contact-actions">
            <a className="primary-button" href="mailto:contato@karolinabickel.adv.br">Enviar por e-mail <span>↗</span></a>
            <a className="instagram-link" href="https://www.instagram.com/karolinabickel/" target="_blank" rel="noopener noreferrer">Instagram <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span>Karolina Bickel</span>
          <small>Advocacia &amp; Estruturação Internacional</small>
        </div>
        <p>Estratégia jurídica para negócios, patrimônio e vida internacional.</p>
        <div className="footer-meta">
          <a href="mailto:contato@karolinabickel.adv.br">contato@karolinabickel.adv.br</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
