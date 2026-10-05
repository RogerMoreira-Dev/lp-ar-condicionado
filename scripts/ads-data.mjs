// Campanha de Google Ads para a empresa de ar-condicionado. Os limites de caracteres
// são conferidos por validate-ads.mjs.
import { site } from "../src/data/site.mjs";

const C = site.city;
const c = site.city.toLowerCase();
const url = (p = "") => `${site.url}/${p}`;

export const CAMPAIGN = `Pesquisa | Ar-condicionado | ${C}`;

export const groups = [
  {
    name: "Instalação", path: "instalacao/", paths: ["instalacao", "split"],
    keywords: ["instalação de ar condicionado", "instalação ar condicionado split", "instalador de ar condicionado", "instalar ar condicionado", "instalação de split", "empresa de instalação de ar condicionado", "instalação ar condicionado preço", `instalação de ar condicionado ${c}`],
    headlines: ["Instalação de Ar-Condicionado", "Instalação de Split", "Vácuo e Teste de Vazamento", "Instalação em 2 a 4 Horas", "Garantia de 90 Dias", "Orçamento Grátis por Foto", `Atendemos ${C} e Região`, "Atendimento em Até 24 Horas", "Mantém a Garantia de Fábrica", "Todas as Marcas de Split", "Instalamos Também aos Sábados", "Nota Fiscal do Serviço", "Calcule o BTU Ideal", "Chame Agora no WhatsApp", "Casa Limpa no Final"],
    descriptions: ["Split instalado com vácuo na tubulação e teste de vazamento, como pede o fabricante.", "Mande foto do cômodo e da parede externa e receba o orçamento na hora pelo WhatsApp.", "Garantia de 90 dias no serviço, nota fiscal e atendimento de segunda a sábado.", `Atendemos ${C} e Região Metropolitana em até 24 horas. Todas as marcas.`],
  },
  {
    name: "Limpeza", path: "limpeza/", paths: ["limpeza", "split"],
    keywords: ["limpeza de ar condicionado", "higienização de ar condicionado", "limpeza de split", "limpeza ar condicionado split", "lavagem de ar condicionado", "manutenção preventiva ar condicionado", "ar condicionado cheiro de mofo", `limpeza de ar condicionado ${c}`],
    headlines: ["Limpeza de Ar-Condicionado", "Higienização de Split", "Sem Sujar a Sua Casa", "Fim do Cheiro de Mofo", "1h a 1h30 por Aparelho", "Bolsa Coletora", "Orçamento Grátis por Foto", `Atendemos ${C} e Região`, "Garantia de 90 Dias", "Desconto a Partir do 2º", "Atendimento em Até 24 Horas", "Todas as Marcas de Split", "Volta a Gelar Como Novo", "Chame Agora no WhatsApp", "Atendemos Também aos Sábados"],
    descriptions: ["Higienização completa: serpentina, turbina, filtros, dreno e condensadora.", "Bolsa coletora e proteção dos móveis. Sua casa fica limpa no final do serviço.", "Cheiro de mofo, água pingando ou gelando pouco? Hora de limpar. Chame no WhatsApp.", `Atendemos ${C} e região de segunda a sábado. Garantia de 90 dias e nota fiscal.`],
  },
  {
    name: "Conserto", path: "conserto/", paths: ["conserto", "split"],
    keywords: ["conserto de ar condicionado", "assistência técnica ar condicionado", "ar condicionado não gela", "ar condicionado pingando água", "técnico de ar condicionado", "manutenção de ar condicionado", "ar condicionado com defeito", `conserto de ar condicionado ${c}`],
    headlines: ["Conserto de Ar-Condicionado", "Ar Não Gela? Resolvemos", "Ar Pingando Água?", "Diagnóstico na Visita", "Todas as Marcas de Split", "Garantia de 90 Dias", "Técnico em Até 24 Horas", "Orçamento Antes de Trocar", `Atendemos ${C} e Região`, "Peças de Reposição", "Código de Erro no Display?", "Chame Agora no WhatsApp", "Conserto no Mesmo Dia", "Nota Fiscal do Serviço", "Atendemos Também aos Sábados"],
    descriptions: ["Não gela, pinga, faz barulho ou mostra código de erro? Diagnóstico na visita.", "Você aprova o orçamento antes de qualquer troca de peça. Garantia de 90 dias.", "Falta de gás é vazamento: encontramos e consertamos antes de completar a carga.", `Técnico em ${C} e região em até 24 horas, de segunda a sábado.`],
  },
  {
    name: "Geral", path: "", paths: ["ar-condicionado", ""],
    keywords: ["empresa de ar condicionado", "serviço de ar condicionado", `ar condicionado ${c}`, "técnico de ar condicionado perto de mim", "climatização residencial", "refrigeração e climatização", "ar condicionado split serviço"],
    headlines: [`Ar-Condicionado em ${C}`, "Instalação, Limpeza e Conserto", "Orçamento Grátis no WhatsApp", "Garantia de 90 Dias", "Todas as Marcas de Split", "Atendimento em Até 24 Horas", "Técnico Especializado", "Calcule o BTU Ideal", `Atendemos ${C} e Região`, "Nota Fiscal do Serviço", "Atendemos Também aos Sábados", "Chame Agora no WhatsApp", "Orçamento Grátis por Foto", "Casa Limpa no Final", "Ar Gelando do Jeito Certo"],
    descriptions: ["Instalação, limpeza e conserto de split. Mande uma foto e receba o orçamento na hora.", "Todas as marcas: LG, Samsung, Midea, Gree, Daikin, Fujitsu, Elgin, Springer e outras.", `Atendemos ${C} e Região Metropolitana em até 24 horas, inclusive aos sábados.`, "Garantia de 90 dias por escrito e nota fiscal em todo serviço."],
  },
  {
    name: "Empresas", path: "empresas/", paths: ["pmoc", "empresas"],
    keywords: ["pmoc ar condicionado", "plano de manutenção ar condicionado", "manutenção ar condicionado empresa", "contrato manutenção ar condicionado", "pmoc lei 13589", "empresa de pmoc", `pmoc ${c}`],
    headlines: ["PMOC para Empresas", "Manutenção de Ar p/ Empresa", "Lei 13.589/2018 em Dia", "PMOC com Responsável Técnico", "Relatório a Cada Visita", "Visitas Fora do Expediente", "Contrato Mensal ou Trimestral", "Visita Técnica Grátis", "Clínicas, Lojas e Escritórios", "Chamado Extra Incluso", `Atendemos ${C} e Região`, "Chame Agora no WhatsApp", "Documentação p/ Fiscalização", "Todas as Marcas de Split", "Nota Fiscal Para Empresa"],
    descriptions: ["PMOC com responsável técnico e ART, como exige a Lei 13.589/2018.", "Visitas programadas fora do seu horário, com relatório a cada atendimento.", "Escritórios, clínicas, lojas, restaurantes, academias e escolas. Visita técnica grátis.", "Defeito entre as visitas? O chamado extra está incluso no contrato."],
  },
];

export const negatives = [
  "comprar", "loja", "preço do ar condicionado", "magazine", "casas bahia", "mercado livre", "shopee", "amazon", "promoção",
  "usado", "olx", "controle remoto", "controle universal", "manual", "como instalar", "como limpar", "sozinho", "vídeo",
  "curso", "apostila", "vaga", "vagas", "emprego", "salário", "trabalhe conosco", "franquia", "pdf", "o que é",
  "automotivo", "carro", "veículo", "geladeira", "freezer", "máquina de lavar", "portátil", "ventilador", "climatizador",
];

export const sitelinks = [
  { text: "Instalação de Split", d1: "Com vácuo e teste de vazamento", d2: "Em 2 a 4 horas", url: url("instalacao/") },
  { text: "Limpeza e Higienização", d1: "Sem sujar a sua casa", d2: "Fim do cheiro de mofo", url: url("limpeza/") },
  { text: "Conserto", d1: "Não gela, pinga ou dá erro", d2: "Diagnóstico na visita", url: url("conserto/") },
  { text: "PMOC para Empresas", d1: "Lei 13.589/2018 em dia", d2: "Relatório a cada visita", url: url("empresas/") },
  { text: "Calcule o BTU Ideal", d1: "Tabela por tamanho do cômodo", d2: "Antes de comprar o aparelho", url: url("#btu") },
];
export const callouts = ["Orçamento Grátis", "Garantia de 90 Dias", "Atendimento em 24h", "Todas as Marcas", "Nota Fiscal", "Atendemos aos Sábados", "Vácuo na Instalação", "Casa Limpa no Final"];
export const snippets = { header: "Serviços", values: ["Instalação de Split", "Limpeza de Split", "Conserto", "Recarga de Gás", "PMOC", "Manutenção Preventiva"] };
