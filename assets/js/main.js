(function () {
  "use strict";
  var S = window.SITE || {};
  var TR = window.MuroTracking || { convert: function () {}, source: function () { return ""; } };
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  var params = new URLSearchParams(location.search);

  var toastEl = $("[data-toast]");
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.hidden = true; }, 5000);
  }

  /* Cidade pela URL: ?cidade=Pinhais */
  var cityParam = (params.get("cidade") || "").trim();
  if (cityParam && /^[A-Za-zÀ-ÿ .'-]{2,40}$/.test(cityParam)) {
    var city = cityParam.replace(/\s+/g, " ").toLowerCase()
      .replace(/(^|[\s-])([a-zà-ÿ])/g, function (m, a, b) { return a + b.toUpperCase(); })
      .replace(/ (De|Do|Da|Dos|Das) /g, function (m) { return m.toLowerCase(); });
    $$("[data-city]").forEach(function (el) { el.textContent = city; });
    if (S.city && city !== S.city) document.title = document.title.split(S.city).join(city);
  }

  /* WhatsApp */
  var SERVICO = {
    "Instalação": "instalação de ar-condicionado",
    "Limpeza": "limpeza de ar-condicionado",
    "Conserto": "conserto de ar-condicionado",
    "Empresa / PMOC": "manutenção e PMOC para empresa",
  };
  function waUrl(text) {
    var n = String(S.whatsapp || "").replace(/\D/g, "");
    return (n ? "https://wa.me/" + n : "https://wa.me/") + "?text=" + encodeURIComponent(text);
  }
  function via() { var s = TR.source(); return s ? "(Vim pelo " + s + ")" : ""; }
  function demo() {
    if (!S.whatsapp) toast("Demonstração: o WhatsApp abre com a mensagem pronta para você escolher o contato. No site do cliente, vai direto para o número da empresa.");
  }

  var form = $("[data-quote]");
  var preset = form && $('input[name="servico"]:checked', form);
  var presetValue = preset ? preset.value : "";
  function defaultMessage() {
    return ["Olá! Vim pelo site e quero um orçamento de " + (SERVICO[presetValue] || "ar-condicionado") + ".", via()].filter(Boolean).join("\n");
  }
  $$("[data-wa]").forEach(function (a) {
    a.href = waUrl(defaultMessage());
    a.target = "_blank";
    a.rel = "noopener";
    a.addEventListener("click", function () { a.href = waUrl(defaultMessage()); demo(); });
  });
  function openNew(url) {
    var a = document.createElement("a");
    a.href = url; a.target = "_blank"; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
  }

  /* Calculadora de BTU: 600 BTU/m² sem sol à tarde, 800 com sol, +600 por pessoa a mais.
     Arredonda para o tamanho comercial acima. Mesma regra da tabela da página inicial. */
  var SIZES = [7500, 9000, 12000, 18000, 24000, 30000, 36000, 48000, 60000];
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
  function btu(m2, sol, pessoas) {
    if (!(m2 >= 4 && m2 <= 80)) return null;
    var raw = m2 * (sol ? 800 : 600) + Math.max(0, pessoas - 1) * 600;
    for (var i = 0; i < SIZES.length; i++) if (SIZES[i] >= raw) return SIZES[i];
    return null;
  }

  if (form) {
    var preview = $("[data-preview]", form);
    var out = $("[data-btu-out]", form);
    var build = function () {
      var fd = new FormData(form);
      var servico = fd.get("servico");
      var lines = ["Olá! Quero um orçamento de " + (SERVICO[servico] || "ar-condicionado") + "."];
      if (fd.get("qtd")) lines.push("Aparelhos: " + fd.get("qtd"));
      var m2 = parseInt(fd.get("m2"), 10);
      var sol = fd.get("sol") === "Sim";
      var p = parseInt(fd.get("pessoas"), 10) || 1;
      var b = btu(m2, sol, p);
      if (out) {
        if (b) out.innerHTML = "Sugestão: <strong>" + fmt(b) + " BTUs</strong><small>Estimativa. O técnico confirma pela foto ou na visita.</small>";
        else if (fd.get("m2")) out.textContent = m2 > 80 ? "Acima de 80 m², o cálculo é feito na visita técnica." : "Informe um tamanho entre 4 e 80 m².";
        else out.textContent = "Informe o tamanho do cômodo.";
      }
      if (b) lines.push("Cômodo: " + m2 + " m², " + (sol ? "com" : "sem") + " sol à tarde, " + p + (p > 1 ? " pessoas" : " pessoa") + " (sugestão do site: " + fmt(b) + " BTUs)");
      var bairro = String(fd.get("bairro") || "").trim().slice(0, 40);
      if (bairro) lines.push("Bairro: " + bairro);
      var v = via();
      if (v) lines.push(v);
      return lines.join("\n");
    };
    var update = function () { preview.textContent = build(); };
    form.addEventListener("input", update);
    form.addEventListener("change", update);
    update();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      TR.convert("whatsapp");
      openNew(waUrl(build()));
      demo();
    });
  }

  /* Telefone */
  $$("[data-tel]").forEach(function (a) {
    var d = String(S.phone || "").replace(/\D/g, "");
    if (d) a.href = "tel:+" + (d.indexOf("55") === 0 ? d : "55" + d);
    else a.addEventListener("click", function (e) { e.preventDefault(); toast("Demonstração: no site do cliente, este botão liga direto para a empresa."); });
  });

  /* Conversões */
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("a[data-convert]");
    if (!el) return;
    var k = el.getAttribute("data-convert");
    if (k === "phone" && !S.phone) return;
    TR.convert(k);
  });

  /* Topo e barra do celular */
  var top = $("[data-top]");
  var onScroll = function () { if (top) top.classList.toggle("scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  var mbar = $("[data-mbar]");
  var heroCtas = $(".hero .cta-row");
  if (mbar && heroCtas && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) {
      mbar.classList.toggle("show", !en[0].isIntersecting && en[0].boundingClientRect.top < 0);
    }).observe(heroCtas);
  } else if (mbar) mbar.classList.add("show");

  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
