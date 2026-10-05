// Configuração única do site. Para usar com um cliente real, troque os campos
// marcados com "TROQUE" e rode `npm run build`.

export const site = {
  name: "Aleta",
  fullName: "Aleta Climatização",
  // TROQUE: CNPJ, endereço e responsável técnico reais aparecem no rodapé.
  cnpj: "00.000.000/0001-00",
  address: "Curitiba, PR",
  hours: "Segunda a sábado, das 8h às 19h",
  technician: "Técnico em refrigeração e climatização",

  // Cidade padrão. Pode ser trocada pela URL: ?cidade=Pinhais
  city: "Curitiba",

  // TROQUE: WhatsApp só com números, com 55 + DDD. Vazio = modo demonstração.
  whatsapp: "",
  phone: "",
  phoneDisplay: "",

  url: "https://lp-ar-condicionado-tau.vercel.app",
  demo: true,

  tracking: {
    googleAdsId: "",
    conversionLabels: { whatsapp: "", phone: "" },
    ga4Id: "",
  },

  guaranteeDays: 90,

  brands: ["LG", "Samsung", "Midea", "Gree", "Daikin", "Fujitsu", "Elgin", "Springer", "Carrier", "Consul", "Electrolux", "Philco", "TCL", "Agratto"],

  bairros: [
    "Água Verde", "Batel", "Bigorrilho", "Centro", "Portão", "Cabral", "Juvevê",
    "Mercês", "Bacacheri", "Boa Vista", "Santa Felicidade", "Rebouças", "Hauer",
    "Boqueirão", "Xaxim", "Cajuru", "Uberaba", "Pinheirinho", "Sítio Cercado", "CIC",
  ],
  regiao: [
    "São José dos Pinhais", "Pinhais", "Colombo", "Araucária",
    "Almirante Tamandaré", "Fazenda Rio Grande", "Campo Largo",
  ],
};
