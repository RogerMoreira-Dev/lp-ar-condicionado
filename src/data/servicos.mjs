// Conteúdo de cada página de destino (uma por grupo de anúncios do Google Ads).
// {cidade} vira a cidade padrão ou a da URL (?cidade=).

export const servicos = [
  {
    slug: "instalacao",
    label: "Instalação",
    quiz: "Instalação",
    icon: "split",
    title: "Instalação de ar-condicionado em Curitiba | Aleta Climatização",
    description:
      "Instalação de ar-condicionado split com vácuo na tubulação, teste de vazamento e circuito elétrico próprio. Orçamento pelo WhatsApp e garantia de 90 dias.",
    h1: "Instalação de ar-condicionado em {cidade}",
    lead: "Split instalado em poucas horas, com vácuo na tubulação e teste de vazamento, do jeito que o manual do fabricante pede. Assim o aparelho gela bem e mantém a garantia de fábrica.",
    heroPoints: ["Vácuo e teste de vazamento", "Instalação em 2 a 4 horas", "Garantia de 90 dias no serviço"],
    card: "Split hi-wall, piso-teto e cassete, com vácuo na tubulação.",
    checkTitle: "O que está incluso",
    checks: [
      "Suporte para a condensadora (unidade externa)",
      "Até 3 metros de tubulação de cobre com isolamento térmico",
      "Dreno ligado para a água não pingar na parede",
      "Vácuo na linha com bomba, para tirar ar e umidade",
      "Teste de vazamento antes de liberar o gás",
      "Orientação sobre o circuito elétrico com disjuntor próprio",
    ],
    infoTitle: "Por que o vácuo importa",
    info: "Sem vácuo, sobra ar e umidade dentro da tubulação. O aparelho gela menos, gasta mais energia e o compressor se desgasta antes do tempo. É o passo que o instalador apressado pula.",
    method: [
      { t: "Visita ou foto", d: "Você manda foto do cômodo e da parede externa. Definimos onde fica cada unidade." },
      { t: "Infraestrutura", d: "Furo na parede, suporte, tubulação de cobre isolada e dreno." },
      { t: "Vácuo e teste", d: "Bomba de vácuo na linha e teste de vazamento antes de abrir o gás." },
      { t: "Entrega", d: "Aparelho funcionando, explicação do controle e garantia por escrito." },
    ],
    time: { t: "De 2 a 4 horas", d: "Por aparelho, em instalação padrão. Prédios com regras de fachada ou tubulação maior podem levar mais tempo, e isso vem no orçamento." },
    faq: [
      { q: "Vocês vendem o aparelho?", a: "Fazemos só a instalação. Se ainda não comprou, ajudamos a escolher o BTU certo para o cômodo antes da compra." },
      { q: "A instalação tira a garantia de fábrica?", a: "Não. Seguimos o manual do fabricante, com vácuo e teste de vazamento, e você recebe nota fiscal do serviço para apresentar em caso de garantia." },
      { q: "E se precisar de mais de 3 metros de tubulação?", a: "O metro adicional é cobrado à parte e já aparece no orçamento, depois de ver as fotos ou na visita." },
    ],
  },
  {
    slug: "limpeza",
    label: "Limpeza",
    quiz: "Limpeza",
    icon: "drop",
    title: "Limpeza de ar-condicionado em Curitiba | Aleta Climatização",
    description:
      "Higienização completa de ar-condicionado split: serpentina, turbina, filtros, dreno e condensadora. Sem sujar a casa. Orçamento pelo WhatsApp.",
    h1: "Limpeza de ar-condicionado em {cidade}",
    lead: "Higienização completa do split, por dentro e por fora, com bolsa coletora para não sujar parede nem móveis. O ar volta a gelar e o cheiro de mofo vai embora.",
    heroPoints: ["Bolsa coletora: nada de sujeira", "1 hora a 1h30 por aparelho", "Produtos bactericidas biodegradáveis"],
    card: "Higienização completa com bolsa coletora, sem sujar a casa.",
    checkTitle: "Sinais de que está na hora",
    checks: [
      "Cheiro de mofo ou de guardado quando liga",
      "Água pingando da unidade interna",
      "Demora mais para gelar o cômodo",
      "Conta de luz subiu sem motivo",
      "Poeira ou pontos pretos na saída de ar",
      "Mais de 6 meses desde a última limpeza",
    ],
    infoTitle: "De quanto em quanto tempo limpar",
    info: "Em uso frequente, a recomendação é a cada 6 meses. Em consultórios, lojas e escritórios, a limpeza faz parte do plano de manutenção exigido por lei para ambientes de uso coletivo.",
    method: [
      { t: "Proteção", d: "Bolsa coletora na unidade interna e proteção dos móveis embaixo." },
      { t: "Lavagem", d: "Serpentina, turbina e filtros com produto bactericida e água sob pressão." },
      { t: "Dreno e externa", d: "Desobstrução do dreno e limpeza da condensadora do lado de fora." },
      { t: "Teste", d: "Medição da temperatura de saída do ar para confirmar o resultado." },
    ],
    time: { t: "1 hora a 1h30", d: "Por aparelho. Você pode ficar em casa durante todo o serviço: os produtos não deixam cheiro forte." },
    faq: [
      { q: "Precisa tirar o aparelho da parede?", a: "Não. A limpeza é feita com o aparelho no lugar, usando a bolsa coletora para recolher a água suja." },
      { q: "A limpeza resolve o cheiro ruim?", a: "Na grande maioria dos casos, sim. O cheiro vem de fungos e bactérias na serpentina e na turbina, que é exatamente o que a higienização remove." },
      { q: "Vocês fazem limpeza de vários aparelhos no mesmo dia?", a: "Sim, e o valor por aparelho cai a partir do segundo. Informe a quantidade no orçamento." },
    ],
  },
  {
    slug: "conserto",
    label: "Conserto",
    quiz: "Conserto",
    icon: "wrench",
    title: "Conserto de ar-condicionado em Curitiba | Aleta Climatização",
    description:
      "Conserto de ar-condicionado que não gela, pinga água, faz barulho ou mostra código de erro. Diagnóstico na visita e garantia de 90 dias.",
    h1: "Conserto de ar-condicionado em {cidade}",
    lead: "Não gela, pinga água, faz barulho ou pisca uma luz que você não entende? Fazemos o diagnóstico na visita e consertamos com peça de reposição e garantia.",
    heroPoints: ["Diagnóstico na visita", "Todas as marcas de split", "Garantia de 90 dias no conserto"],
    card: "Não gela, pinga ou mostra erro: diagnóstico e conserto.",
    checkTitle: "Problemas que resolvemos",
    checks: [
      "Liga mas não gela, ou gela pouco",
      "Água pingando dentro de casa",
      "Barulho ou vibração na unidade interna ou externa",
      "Luz piscando ou código de erro no display",
      "Desliga sozinho depois de alguns minutos",
      "Gelo na tubulação ou na serpentina",
    ],
    infoTitle: "Sobre \"recarga de gás\"",
    info: "O gás não acaba com o uso. Se está faltando, existe um vazamento. Recarregar sem consertar o vazamento resolve por pouco tempo, e o gás vai embora de novo. Primeiro encontramos e corrigimos o vazamento, depois completamos a carga.",
    method: [
      { t: "Conte o problema", d: "Pelo WhatsApp, com foto do aparelho e do código de erro, se aparecer." },
      { t: "Diagnóstico", d: "Na visita, medimos pressão, corrente e temperatura para achar a causa." },
      { t: "Orçamento", d: "Você aprova o valor antes de qualquer troca de peça." },
      { t: "Conserto e garantia", d: "Peça de reposição compatível e 90 dias de garantia no serviço." },
    ],
    time: { t: "No mesmo dia, na maioria dos casos", d: "Quando precisa de peça específica da marca, combinamos o retorno assim que ela chegar." },
    faq: [
      { q: "Quais marcas vocês consertam?", a: "Splits de todas as marcas mais comuns: LG, Samsung, Midea, Gree, Daikin, Fujitsu, Elgin, Springer, Carrier, Consul e outras." },
      { q: "Vale a pena consertar um aparelho antigo?", a: "Depende da peça. Se o conserto passar de metade do preço de um aparelho novo, avisamos e mostramos as duas opções antes de qualquer gasto." },
      { q: "O que faço se sentir cheiro de queimado?", a: "Desligue o aparelho e o disjuntor dele na hora e não ligue de novo até a visita técnica." },
    ],
  },
];

export const empresas = {
  slug: "empresas",
  label: "Empresas e PMOC",
  icon: "building",
  title: "Manutenção de ar-condicionado e PMOC para empresas em Curitiba | Aleta",
  description:
    "Contrato de manutenção de ar-condicionado e PMOC para escritórios, lojas, clínicas e restaurantes, como exige a Lei 13.589/2018.",
  h1: "Manutenção e PMOC para empresas em {cidade}",
  lead: "Contrato de manutenção preventiva com o PMOC, o plano que a Lei 13.589/2018 exige de ambientes climatizados de uso coletivo. Relatório a cada visita e documentação pronta para a fiscalização.",
  heroPoints: ["PMOC com responsável técnico e ART", "Visitas fora do horário comercial", "Relatório a cada visita"],
  segments: [
    { t: "Escritórios", d: "Vários aparelhos, cronograma de limpeza e registro de cada visita." },
    { t: "Clínicas e consultórios", d: "Higienização com a frequência que a vigilância sanitária cobra." },
    { t: "Lojas e restaurantes", d: "Atendimento antes da abertura ou depois do fechamento." },
    { t: "Academias e escolas", d: "Ambientes cheios, em que a qualidade do ar pesa mais." },
  ],
  doc: [
    ["Documento", "PMOC: Plano de Manutenção, Operação e Controle"],
    ["Base legal", "Lei 13.589/2018"],
    ["Responsável técnico", "Engenheiro habilitado, com ART"],
    ["Inventário", "Todos os aparelhos, com marca, BTU e local"],
    ["Registro", "Data e serviço de cada visita"],
  ],
  faq: [
    { q: "Minha empresa precisa de PMOC?", a: "A Lei 13.589/2018 obriga edifícios de uso público e coletivo com ar-condicionado a manter o PMOC. Na visita técnica avaliamos o seu caso e explicamos o que se aplica." },
    { q: "Vocês atendem fora do horário comercial?", a: "Sim. As visitas são agendadas antes da abertura, depois do fechamento ou no fim de semana." },
    { q: "Como é o contrato?", a: "Visitas mensais, bimestrais ou trimestrais conforme o número de aparelhos e o uso, com chamado extra incluso para defeitos entre as visitas." },
  ],
};

export const faqGeral = [
  { q: "O orçamento é grátis?", a: "Sim. Mande foto do aparelho ou do cômodo pelo WhatsApp e respondemos com o valor. Quando precisa de visita, ela é combinada no orçamento." },
  { q: "Vocês atendem aos sábados?", a: "Sim, de segunda a sábado. Em períodos de muito calor, a agenda enche rápido: vale chamar com alguns dias de antecedência." },
  { q: "Tem garantia?", a: "Todo serviço tem 90 dias de garantia por escrito, junto com a nota fiscal." },
  { q: "Atendem apartamento?", a: "Sim. Seguimos as regras do condomínio para a posição da condensadora e para o horário de obra." },
  { q: "Quais formas de pagamento?", a: "Pix, cartão de débito e crédito em até 3 vezes." },
];

// Tabela de BTU por área: 600 BTU/m² sem sol à tarde, 800 BTU/m² com sol à tarde,
// para 1 pessoa, arredondado para o tamanho comercial acima. Mesma regra da calculadora (main.js).
export const btuTabela = [
  { area: "até 9 m²", sem: "7.500", com: "7.500" },
  { area: "até 12 m²", sem: "9.000", com: "12.000" },
  { area: "até 15 m²", sem: "9.000", com: "12.000" },
  { area: "até 20 m²", sem: "12.000", com: "18.000" },
  { area: "até 30 m²", sem: "18.000", com: "24.000" },
  { area: "até 40 m²", sem: "24.000", com: "36.000" },
];
