// Ícones em SVG feitos à mão. Herdam a cor do texto (currentColor).

const svg = (body, { size = 24, view = "0 0 24 24", stroke = true, sw = 2 } = {}) =>
  `<svg width="${size}" height="${size}" viewBox="${view}" aria-hidden="true" focusable="false"${
    stroke ? ` fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"` : ` fill="currentColor"`
  }>${body}</svg>`;

export const icon = {
  whatsapp: (size = 22) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.3 21.7l4.8-1.3A9.8 9.8 0 1 0 12 2.2z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M9.1 7.4c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.2 3.5 5.5 4.8 2.7 1.1 3.3.9 3.9.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4l-2.1-1c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-2.1z" fill="currentColor"/></svg>`,
  phone: (size = 20) =>
    svg(`<path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/>`, { size, stroke: false }),
  arrow: (size = 20) => svg(`<path d="M7 17 17 7M8 7h9v9"/>`, { size }),
  check: (size = 18) => svg(`<path d="m5 12.5 4.2 4.2L19 7"/>`, { size, sw: 2.4 }),
  shield: (size = 20) => svg(`<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6L12 3z"/><path d="m8.8 12.2 2.3 2.3 4.3-4.6"/>`, { size }),
  clock: (size = 20) => svg(`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>`, { size }),
  doc: (size = 20) => svg(`<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>`, { size }),
  info: (size = 22) => svg(`<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.2"/>`, { size }),
  // Marca: três aletas de saída de ar
  logo: (size = 26) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 26 26" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M3 7.5c3.3-2 6.7-2 10 0s6.7 2 10 0"/><path d="M3 13c3.3-2 6.7-2 10 0s6.7 2 10 0"/><path d="M3 18.5c3.3-2 6.7-2 10 0s6.7 2 10 0"/></svg>`,
};

// Desenhos dos serviços (64x64)
const art = (body) =>
  `<svg class="art" viewBox="0 0 64 64" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

export const arts = {
  split: art(
    `<rect x="6" y="12" width="52" height="20" rx="5"/>
     <path d="M12 26h40M14 29.5h36"/>
     <circle cx="50" cy="18" r="1.3" fill="currentColor"/>
     <path d="M16 40c3 2 3 5 0 7s-3 5 0 7M32 40c3 2 3 5 0 7s-3 5 0 7M48 40c3 2 3 5 0 7s-3 5 0 7"/>`
  ),
  drop: art(
    `<path d="M28 8C20 20 14 28 14 37a14 14 0 0 0 28 0c0-9-6-17-14-29z"/>
     <path d="M21 39a7 7 0 0 0 7 7"/>
     <path d="M48 10v8M44 14h8M52 26v6M49 29h6"/>`
  ),
  wrench: art(
    `<path d="M40 8a11 11 0 0 0-10.6 14L10 41.4a5 5 0 0 0 7.1 7.1L36.6 29A11 11 0 0 0 51 18.6l-6.8 6.8-6.3-1.6-1.6-6.3L43.1 10.7A11 11 0 0 0 40 8z"/>
     <path d="M44 44l10 10M50 40l8 8"/>`
  ),
  building: art(
    `<path d="M10 56V12h26v44M36 24h18v32"/>
     <path d="M6 56h52M17 20h4M25 20h4M17 28h4M25 28h4M17 36h4M25 36h4M43 32h4M43 40h4"/>
     <path d="M21 56v-9h6v9"/>`
  ),
};
