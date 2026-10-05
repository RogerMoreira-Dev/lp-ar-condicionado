# Landing pages de ar-condicionado para Google Ads

Site de exemplo de uma empresa de climatização em que cada anúncio leva para uma página própria e todo botão termina no WhatsApp com a mensagem pronta, incluindo uma **calculadora de BTU** que sugere o aparelho certo para o cômodo.

**Site no ar:** https://lp-ar-condicionado-tau.vercel.app/

> A "Aleta Climatização" é uma empresa fictícia. Página demonstrativa de portfólio: `noindex`, depoimentos de exemplo e botões sem número real.

## Páginas

| Página | Para qual busca | Endereço |
|---|---|---|
| Inicial | ar-condicionado + cidade | `/` |
| Instalação | instalação de split | `/instalacao/` |
| Limpeza | limpeza e higienização | `/limpeza/` |
| Conserto | ar não gela, pinga, código de erro | `/conserto/` |
| Empresas | PMOC e contrato de manutenção | `/empresas/` |
| Privacidade | anúncios e LGPD | `/privacidade/` |

## O que tem para converter

- **Orçamento em 30 segundos** com serviço, quantidade de aparelhos, bairro e calculadora de BTU (600 BTU/m² sem sol à tarde, 800 com sol, +600 por pessoa a mais). A mensagem aparece pronta antes de enviar.
- Tabela de BTU por tamanho de cômodo, a mesma regra da calculadora.
- Botões de WhatsApp e ligar em todo o site e barra fixa no celular.
- Páginas de anúncio sem menu. Cidade pela URL (`?cidade=Pinhais`).
- Origem do lead (gclid e UTMs) escrita na mensagem; conversões do Google Ads e GA4 com Consent Mode.
- HTML estático sem framework, carregamento rápido.

## Google Ads

A pasta [`google-ads/`](google-ads/) tem a campanha pronta para o Google Ads Editor e o [plano](google-ads/README.md), com a sazonalidade do nicho.

## Usar com um cliente

1. Edite `src/data/site.mjs` (nome, WhatsApp, telefone, CNPJ, cidade, IDs do Google Ads e `demo: false`).
2. Ajuste os textos em `src/data/servicos.mjs` e a campanha em `scripts/ads-data.mjs`.
3. `npm run build` gera o site em `dist/` e `npm run check:ads` regenera os arquivos do Google Ads.

```bash
npm run dev
```

Publicado na Vercel (`vercel deploy --prod`), que gera o site com `node build.mjs` a partir do `vercel.json`. O workflow do GitHub Pages fica como alternativa.

Visual inspirado no template "mobile SaaS" do 21st.dev. Código original.
