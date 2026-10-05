import { icon, arts } from "./icons.mjs";
import { site } from "./data/site.mjs";

export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const city = (s) => esc(s).replace(/ar-condicionado/g, `<span class="nw">ar-condicionado</span>`).replace(/\{cidade\}/g, `<span data-city>${esc(site.city)}</span>`);
export const plainCity = (s) => s.replace(/\{cidade\}/g, site.city);

const SERVICOS = ["Instalação", "Limpeza", "Conserto", "Empresa / PMOC"];
const QTD = ["1", "2", "3", "4 ou mais"];

/* ---------- Peças comuns ---------- */

export function head({ title, description, path, prefix, assets, faq = [] }) {
  const url = `${site.url}/${path}`;
  const pub = { name: site.fullName, city: site.city, whatsapp: site.whatsapp, phone: site.phone, demo: site.demo, tracking: site.tracking };
  const ld = [];
  if (faq.length) ld.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  if (!site.demo) ld.push({ "@context": "https://schema.org", "@type": "HVACBusiness", name: site.fullName, url: site.url, telephone: site.phone || undefined, address: site.address, areaServed: [site.city, ...site.regiao] });
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${site.demo ? `<meta name="robots" content="noindex, nofollow">\n` : ""}<link rel="canonical" href="${esc(url)}">
<meta name="theme-color" content="#eaf5fe">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="${esc(site.fullName)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(site.url)}/assets/img/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${prefix}assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@500&display=swap">
<link rel="stylesheet" href="${prefix}assets/css/style.css?v=${assets.css}">
<script>window.SITE=${JSON.stringify(pub)}</script>
${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n")}
</head>`;
}

export const ribbon = () =>
  site.demo ? `<div class="ribbon">Página demonstrativa de portfólio. A empresa, os depoimentos e os dados de contato são fictícios.</div>` : "";

export function header({ prefix, isHome }) {
  const brand = `<span class="brand-mark">${icon.logo(22)}</span><span>${esc(site.name)}</span>`;
  return `<header class="top" data-top>
  <div class="wrap top-in">
    ${isHome ? `<a class="brand" href="#top" aria-label="${esc(site.fullName)}, início">${brand}</a>` : `<span class="brand">${brand}</span>`}
    ${
      isHome
        ? `<nav class="top-nav" aria-label="Seções"><a href="#servicos">Serviços</a><a href="#btu">Qual BTU?</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a></nav>`
        : `<p class="top-note">${icon.clock(16)} ${esc(site.hours)}</p>`
    }
    <a class="btn btn-ink btn-sm" href="#" data-wa data-convert="whatsapp">${icon.whatsapp(18)}<span>Orçamento no WhatsApp</span></a>
  </div>
</header>`;
}

const chips = (name, list, checked) =>
  list
    .map((v, i) => `<label class="chip"><input type="radio" name="${name}" value="${esc(v)}"${v === checked ? " checked" : ""} id="q-${name}-${i}"><span>${esc(v)}</span></label>`)
    .join("");

export function quote({ preset = "", btuOpen = false } = {}) {
  return `<form class="quote" data-quote novalidate>
  <div class="quote-head">
    <h2 class="quote-title">Orçamento em 30 segundos</h2>
    <p class="quote-sub">Escolha as opções e a mensagem sai pronta no WhatsApp.</p>
  </div>
  <div class="quote-grid">
    <div class="quote-col">
      <fieldset><legend>Serviço</legend><div class="chips">${chips("servico", SERVICOS, preset)}</div></fieldset>
      <fieldset><legend>Quantos aparelhos?</legend><div class="chips">${chips("qtd", QTD, "")}</div></fieldset>
      <label class="field" for="q-bairro"><span>Bairro ou cidade</span>
        <input id="q-bairro" name="bairro" type="text" autocomplete="address-level3" maxlength="40" placeholder="Ex.: Água Verde">
      </label>
    </div>
    <div class="quote-col">
      <details class="btu"${btuOpen ? " open" : ""} data-btu>
        <summary>Não sabe o BTU? Calcule aqui</summary>
        <div class="btu-body">
          <label class="field" for="q-m2"><span>Tamanho do cômodo (m²)</span>
            <input id="q-m2" name="m2" type="number" inputmode="numeric" min="4" max="80" step="1" placeholder="Ex.: 15">
          </label>
          <fieldset><legend>Bate sol à tarde?</legend><div class="chips">${chips("sol", ["Não", "Sim"], "Não")}</div></fieldset>
          <label class="field" for="q-pessoas"><span>Pessoas no cômodo</span>
            <select id="q-pessoas" name="pessoas">${[1, 2, 3, 4, 5, 6].map((n) => `<option value="${n}"${n === 2 ? " selected" : ""}>${n}</option>`).join("")}</select>
          </label>
          <p class="btu-out" data-btu-out aria-live="polite">Informe o tamanho do cômodo.</p>
        </div>
      </details>
      <div class="bubble-wrap">
        <p class="bubble-label">Mensagem que vai para o WhatsApp</p>
        <p class="bubble" data-preview aria-live="polite"></p>
      </div>
    </div>
  </div>
  <button class="btn btn-warm btn-block btn-lg" type="submit">${icon.whatsapp(20)}<span>Enviar no WhatsApp</span></button>
</form>`;
}

const ctas = (center = false) => `<div class="cta-row${center ? " center" : ""}">
  <a class="btn btn-warm btn-lg" href="#" data-wa data-convert="whatsapp">${icon.whatsapp(22)}<span>Chamar no WhatsApp</span></a>
  <a class="btn btn-line btn-lg" href="#" data-tel data-convert="phone">${icon.phone(20)}<span>Ligar agora</span></a>
</div>`;

const trust = (points) => `<ul class="trust">${points.map((p) => `<li>${icon.check(18)}<span>${esc(p)}</span></li>`).join("")}</ul>`;

function hero({ h1, lead, points, preset, btuOpen, badge }) {
  return `<section class="hero" id="top">
  <div class="air" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <div class="wrap hero-in">
    <p class="badge"><span class="badge-tag">24h</span><span>${badge}</span></p>
    <h1>${h1}</h1>
    <p class="lead">${lead}</p>
    ${ctas(true)}
    ${trust(points)}
  </div>
  <div class="wrap quote-wrap">${quote({ preset, btuOpen })}</div>
</section>
<div class="vents" aria-hidden="true"></div>`;
}

const brandsBand = () => `<section class="brands" aria-label="Marcas atendidas">
  <div class="wrap brands-in">
    <p>Instalamos e consertamos todas as marcas de split</p>
    <ul>${site.brands.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
  </div>
</section>`;

const faqBlock = (items) => `<section class="sec" id="duvidas">
  <div class="wrap faq-grid">
    <div class="sec-head">
      <p class="eyebrow">Dúvidas</p>
      <h2>Perguntas frequentes</h2>
      <p>Não achou a sua? Pergunte no WhatsApp, respondemos rápido.</p>
      <a class="btn btn-ink" href="#" data-wa data-convert="whatsapp">${icon.whatsapp(20)}<span>Perguntar no WhatsApp</span></a>
    </div>
    <div class="faq">
      ${items.map((f, i) => `<details${i === 0 ? " open" : ""}><summary>${esc(f.q)}<span class="plus" aria-hidden="true"></span></summary><p>${esc(f.a)}</p></details>`).join("\n      ")}
    </div>
  </div>
</section>`;

const finalCta = (text = "Mande uma foto do aparelho e receba o orçamento hoje.") => `<section class="final">
  <div class="air" aria-hidden="true"><span></span><span></span><span></span></div>
  <div class="wrap final-in">
    <h2>${esc(text)}</h2>
    ${ctas(true)}
  </div>
</section>`;

const steps = (list, title, intro, id = "como-funciona", tone = "") => `<section class="sec ${tone}" id="${id}">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow">Passo a passo</p>
      <h2>${esc(title)}</h2>
      ${intro ? `<p>${esc(intro)}</p>` : ""}
    </div>
    <ol class="steps">
      ${list.map((s) => `<li><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></li>`).join("\n      ")}
    </ol>
  </div>
</section>`;

const docCard = (rows, title) => `<figure class="doc" aria-label="${esc(title)}">
  <div class="doc-top">${icon.doc(18)}<span>${esc(title)}</span></div>
  <dl>${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
</figure>`;

const guarantee = () => `<section class="sec tint">
  <div class="wrap split">
    <div class="sec-head">
      <p class="eyebrow">Garantia</p>
      <h2>Serviço com nota e garantia por escrito</h2>
      <p>Todo atendimento sai com nota fiscal e ${site.guaranteeDays} dias de garantia no serviço. Na instalação, seguimos o manual do fabricante, o que preserva a garantia de fábrica do aparelho.</p>
      <ul class="facts">
        <li>${icon.shield(22)}<div><strong>Garantia de ${site.guaranteeDays} dias</strong><span>Se o problema voltar, o retorno não tem custo.</span></div></li>
        <li>${icon.doc(22)}<div><strong>Nota fiscal do serviço</strong><span>Para você usar na garantia de fábrica e no reembolso da empresa.</span></div></li>
        <li>${icon.clock(22)}<div><strong>Atendimento em até 24 horas</strong><span>De segunda a sábado, em ${esc(site.city)} e região.</span></div></li>
      </ul>
    </div>
    ${docCard(
      [
        ["Serviço", "Instalação de split 12.000 BTUs"],
        ["Tubulação", "3 m de cobre com isolamento"],
        ["Vácuo", "Feito com bomba, 15 minutos"],
        ["Teste de vazamento", "Aprovado"],
        ["Garantia", `${site.guaranteeDays} dias a partir do serviço`],
      ],
      "Ordem de serviço (exemplo)"
    )}
  </div>
</section>`;

export function footer({ prefix }) {
  return `<footer class="foot">
  <div class="wrap foot-in">
    <div class="foot-brand"><span class="brand-mark">${icon.logo(18)}</span><strong>${esc(site.fullName)}</strong></div>
    <div class="foot-info">
      <p>CNPJ ${esc(site.cnpj)} · ${esc(site.address)}</p>
      <p>${esc(site.hours)}</p>
      <p>${esc(site.technician)}</p>
    </div>
    <div class="foot-links">
      <a href="${prefix}privacidade/">Política de privacidade</a>
      <p>© <span data-year>2026</span> ${esc(site.fullName)}${site.demo ? " (empresa fictícia)" : ""}</p>
    </div>
  </div>
</footer>
<div class="mbar" data-mbar>
  <a class="btn btn-warm" href="#" data-wa data-convert="whatsapp">${icon.whatsapp(20)}<span>WhatsApp</span></a>
  <a class="btn btn-line" href="#" data-tel data-convert="phone">${icon.phone(18)}<span>Ligar</span></a>
</div>
<div class="toast" role="status" aria-live="polite" data-toast hidden></div>`;
}

export const scripts = (prefix, assets) => `<script src="${prefix}assets/js/tracking.js?v=${assets.tracking}" defer></script>
<script src="${prefix}assets/js/main.js?v=${assets.main}" defer></script>`;

/* ---------- Página inicial ---------- */

export function homeBody({ servicos, empresas, btuTabela, faqGeral, prefix }) {
  const cards = [...servicos, empresas]
    .map(
      (s) => `<a class="scard${s.slug === "empresas" ? " scard-dark" : ""}" href="${prefix}${s.slug}/">
        <span class="scard-art">${arts[s.icon]}</span>
        <h3>${esc(s.label)}</h3>
        <p>${esc(s.card || "Contrato de manutenção e PMOC, como exige a Lei 13.589/2018.")}</p>
        <span class="scard-go">Ver detalhes ${icon.arrow(18)}</span>
      </a>`
    )
    .join("\n      ");
  const reviews = [
    { q: "Instalaram dois splits num sábado de manhã. Fizeram o vácuo na minha frente e explicaram cada passo.", who: "Cliente no Bigorrilho" },
    { q: "O ar pingava na parede da sala havia meses. Era o dreno entupido. Resolveram em meia hora.", who: "Cliente no Portão" },
    { q: "Fecharam o PMOC do consultório e mandam o relatório de cada visita por e-mail. Facilitou muito.", who: "Clínica no Batel" },
  ];
  return `${hero({
    badge: `Atendimento em <span data-city>${esc(site.city)}</span> e região`,
    h1: `Ar gelando do jeito certo.`,
    lead: `Instalação, limpeza e conserto de ar-condicionado em <span data-city>${esc(site.city)}</span>. Orçamento pelo WhatsApp e ${site.guaranteeDays} dias de garantia.`,
    points: ["Orçamento grátis por foto", "Todas as marcas", `Garantia de ${site.guaranteeDays} dias`],
    preset: "",
  })}

${brandsBand()}

<section class="sec" id="servicos">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow">Serviços</p>
      <h2>O que o seu ar-condicionado precisa?</h2>
      <p>Escolha o serviço para ver o que está incluso e quanto tempo leva.</p>
    </div>
    <div class="scards">
      ${cards}
    </div>
  </div>
</section>

<section class="sec tint" id="btu">
  <div class="wrap split">
    <div class="sec-head">
      <p class="eyebrow">Antes de comprar</p>
      <h2>Qual BTU para o seu cômodo?</h2>
      <p>Aparelho pequeno demais não gela. Grande demais liga e desliga toda hora e gasta mais. Use a tabela como ponto de partida e confirme com a gente pela foto do cômodo.</p>
      <p class="fine">Regra usada: 600 BTUs por m² sem sol à tarde e 800 BTUs por m² com sol à tarde, para 1 pessoa. Some 600 BTUs por pessoa a mais e por aparelho eletrônico ligado.</p>
    </div>
    <div class="table-wrap">
      <table class="btu-table">
        <thead><tr><th scope="col">Cômodo</th><th scope="col">Sem sol à tarde</th><th scope="col">Com sol à tarde</th></tr></thead>
        <tbody>
          ${btuTabela.map((r) => `<tr><th scope="row">${esc(r.area)}</th><td>${esc(r.sem)} <small>BTUs</small></td><td>${esc(r.com)} <small>BTUs</small></td></tr>`).join("\n          ")}
        </tbody>
      </table>
    </div>
  </div>
</section>

${steps(
  [
    { t: "Chame no WhatsApp", d: "Mande foto do aparelho, do cômodo ou do código de erro." },
    { t: "Orçamento", d: "Respondemos com o valor. Quando precisa de visita, combinamos o horário." },
    { t: "Atendimento", d: "No dia marcado, inclusive sábado, com a casa protegida e limpa no final." },
    { t: "Nota e garantia", d: `Você recebe a nota fiscal e ${site.guaranteeDays} dias de garantia no serviço.` },
  ],
  "Como funciona",
  "Do primeiro contato até o ar gelando, sem complicação."
)}

${guarantee()}

<section class="sec" id="regiao">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow">Onde atendemos</p>
      <h2><span data-city>${esc(site.city)}</span> e Região Metropolitana</h2>
      <p>Atendimento em até 24 horas nos bairros abaixo e nas cidades vizinhas.</p>
    </div>
    <ul class="tags">${[...site.bairros, ...site.regiao].map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow">Avaliações</p>
      <h2>Quem já chamou</h2>
      <p class="note">Exemplo de seção. No site de um cliente real, aqui entram as avaliações do Google.</p>
    </div>
    <div class="reviews">
      ${reviews.map((r) => `<figure class="review"><blockquote>${esc(r.q)}</blockquote><figcaption>${esc(r.who)}</figcaption></figure>`).join("\n      ")}
    </div>
  </div>
</section>

${faqBlock(faqGeral)}

${finalCta()}`;
}

/* ---------- Página de serviço ---------- */

export function serviceBody(s, { faqGeral }) {
  const faq = [...s.faq, ...faqGeral.slice(0, 3)];
  return {
    faq,
    html: `${hero({
      badge: `Atendimento em <span data-city>${esc(site.city)}</span> e região`,
      h1: city(s.h1),
      lead: esc(s.lead),
      points: s.heroPoints,
      preset: s.quiz,
      btuOpen: s.slug === "instalacao",
    })}

${brandsBand()}

<section class="sec">
  <div class="wrap split">
    <div class="sec-head">
      <p class="eyebrow">${esc(s.label)}</p>
      <h2>${esc(s.checkTitle)}</h2>
      <a class="btn btn-warm" href="#" data-wa data-convert="whatsapp">${icon.whatsapp(20)}<span>Mandar foto no WhatsApp</span></a>
    </div>
    <ul class="checklist">
      ${s.checks.map((c) => `<li>${icon.check(20)}<span>${esc(c)}</span></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="sec tint">
  <div class="wrap">
    <aside class="callout">${icon.info(26)}<div><h2>${esc(s.infoTitle)}</h2><p>${esc(s.info)}</p></div></aside>
  </div>
</section>

${steps(s.method, "Como fazemos", "", "como-funciona")}

<section class="sec tint">
  <div class="wrap split">
    <div class="sec-head">
      <p class="eyebrow">Tempo de serviço</p>
      <h2>${esc(s.time.t)}</h2>
      <p>${esc(s.time.d)}</p>
    </div>
    <ul class="facts">
      <li>${icon.shield(22)}<div><strong>Garantia de ${site.guaranteeDays} dias</strong><span>Por escrito, junto com a nota fiscal.</span></div></li>
      <li>${icon.clock(22)}<div><strong>Atendimento em até 24 horas</strong><span>De segunda a sábado.</span></div></li>
      <li>${icon.check(22)}<div><strong>Casa limpa no final</strong><span>Protegemos piso e móveis durante o serviço.</span></div></li>
    </ul>
  </div>
</section>

${faqBlock(faq)}

${finalCta()}`,
  };
}

/* ---------- Empresas ---------- */

export function empresasBody(e, { faqGeral }) {
  const faq = [...e.faq, faqGeral[2]];
  return {
    faq,
    html: `${hero({
      badge: `Contratos em <span data-city>${esc(site.city)}</span> e região`,
      h1: city(e.h1),
      lead: esc(e.lead),
      points: e.heroPoints,
      preset: "Empresa / PMOC",
    })}

<section class="sec">
  <div class="wrap">
    <div class="sec-head">
      <p class="eyebrow">Para quem</p>
      <h2>Empresas que atendemos</h2>
      <p>O cronograma de visitas é montado para o seu horário e o número de aparelhos.</p>
    </div>
    <div class="segments">
      ${e.segments.map((s) => `<article class="seg"><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="sec tint">
  <div class="wrap split">
    <div class="sec-head">
      <p class="eyebrow">Documentação</p>
      <h2>O PMOC pronto para a fiscalização</h2>
      <p>A Lei 13.589/2018 exige que ambientes climatizados de uso público e coletivo tenham um plano de manutenção com responsável técnico. Cuidamos do plano, das visitas e do registro de cada uma.</p>
    </div>
    ${docCard(e.doc, "PMOC (exemplo)")}
  </div>
</section>

${steps(
  [
    { t: "Visita técnica", d: "Levantamento de todos os aparelhos, uso e locais." },
    { t: "Plano e contrato", d: "PMOC com responsável técnico e frequência das visitas." },
    { t: "Visitas programadas", d: "Fora do seu horário de funcionamento, com relatório." },
    { t: "Chamado extra", d: "Defeito entre as visitas? Voltamos sem custo adicional." },
  ],
  "Como funciona o contrato",
  ""
)}

${faqBlock(faq)}

${finalCta("Peça uma visita técnica gratuita para a sua empresa.")}`,
  };
}

export const privacyBody = () => `<section class="sec legal">
  <div class="wrap narrow">
    <h1>Política de privacidade</h1>
    <p>${esc(site.fullName)}${site.demo ? " é uma empresa fictícia criada para demonstração. Este texto é um modelo." : "."}</p>
    <h2>Quais dados coletamos</h2>
    <p>Este site não tem formulário que grave dados. Quando você clica em "Enviar no WhatsApp", a mensagem é montada no seu aparelho e enviada pelo WhatsApp, onde a conversa segue com a nossa equipe.</p>
    <h2>Cookies e anúncios</h2>
    <p>Usamos cookies do Google Ads e do Google Analytics para saber quantas pessoas chegam pelos anúncios e quantas entram em contato. Esses dados são estatísticos e não identificam você pelo nome. Você pode recusar os cookies no aviso exibido no site ou nas configurações do navegador.</p>
    <h2>Seus direitos</h2>
    <p>Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode pedir acesso, correção ou exclusão dos seus dados a qualquer momento pelo nosso WhatsApp.</p>
    <p><a class="btn btn-ink" href="../">Voltar ao site</a></p>
  </div>
</section>`;

export const notFoundBody = (prefix) => `<section class="sec legal">
  <div class="wrap narrow">
    <h1>Página não encontrada</h1>
    <p>O endereço pode ter mudado. Volte para a página inicial ou chame direto no WhatsApp.</p>
    <p class="cta-inline"><a class="btn btn-ink" href="${prefix}">Ir para a página inicial</a> <a class="btn btn-warm" href="#" data-wa data-convert="whatsapp">${icon.whatsapp(20)}<span>Chamar no WhatsApp</span></a></p>
  </div>
</section>`;
