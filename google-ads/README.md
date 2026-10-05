# Plano de Google Ads da empresa de ar-condicionado

Tudo nesta pasta é gerado por `npm run check:ads` a partir de `scripts/ads-data.mjs`. O script confere o limite de caracteres de cada título (30), descrição (90), caminho (15), sitelink (25) e frase de destaque (25), então nada é recusado por tamanho na hora de subir.

| Arquivo | O que é | Onde usar |
|---|---|---|
| `palavras-chave.csv` | 38 termos × 2 correspondências (exata e de frase), com grupo e URL final | Google Ads Editor → Importar |
| `anuncios-rsa.csv` | 1 anúncio responsivo por grupo, 15 títulos e 4 descrições | Google Ads Editor → Importar |
| `negativas.csv` / `negativas.txt` | 37 termos de quem quer comprar aparelho, fazer sozinho ou procura carro/geladeira | Biblioteca compartilhada → Listas de palavras-chave negativas |
| `sitelinks.csv` | 5 sitelinks, um por página, mais a tabela de BTU | Recursos → Sitelinks |
| `extensoes.txt` | Frases de destaque e snippet estruturado | Recursos |

> Os textos falam em garantia de 90 dias, atendimento em até 24 horas e aos sábados. Ajuste para o que o cliente realmente oferece: o Google reprova promessas que a empresa não cumpre.

## Estrutura

**Campanha:** `Pesquisa | Ar-condicionado | Curitiba`

| Grupo | Página | Exemplo de busca |
|---|---|---|
| Instalação | `/instalacao/` | instalação de ar condicionado split |
| Limpeza | `/limpeza/` | limpeza de ar condicionado |
| Conserto | `/conserto/` | ar condicionado não gela |
| Geral | `/` | técnico de ar condicionado perto de mim |
| Empresas | `/empresas/` | pmoc ar condicionado |

## Sazonalidade (o ponto que mais pesa nesse nicho)

- **Outubro a fevereiro:** pico de instalação e conserto. Suba o orçamento a partir de outubro e mantenha a campanha de Instalação com a maior fatia.
- **Março a maio:** a procura por instalação cai. Desloque verba para **Limpeza** ("prepare o ar para o próximo verão") e para **Empresas/PMOC**, que não tem sazonalidade.
- **Inverno em Curitiba:** muitos splits são *quente/frio*. Vale um anúncio de "ar-condicionado não esquenta" no grupo Conserto entre junho e agosto.

## Configurações

- **Rede:** só Pesquisa Google.
- **Locais:** Curitiba e Região Metropolitana, opção "Presença".
- **Programação:** segunda a sábado, das 8h às 19h.
- **Orçamento para começar:** R$ 40 a R$ 70 por dia na alta temporada. Confira o CPC no Planejador de palavras-chave.
- **Lances:** 2 semanas em Maximizar cliques (CPC máx. R$ 5) → Maximizar conversões após 15 a 30 conversões → CPA desejado.

## Conversões

Crie `Clique no WhatsApp` (Contato, contagem Uma) e `Clique para ligar` em Metas → Conversões, copie o ID `AW-…` e os rótulos para `src/data/site.mjs` e publique. O site dispara a conversão em todos os botões e no formulário de orçamento. Confira com o Tag Assistant.

## De onde veio cada lead

Codificação automática ligada e sufixo de URL:

```
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}
```

O site escreve "(Vim pelo Google)" no fim da mensagem do WhatsApp. Para campanhas por cidade, use `cidade=Nome` no sufixo e o título da página muda junto.

## Rotina semanal

1. Termos de pesquisa: negative quem quer comprar aparelho ou fazer sozinho.
2. Pause palavras que gastaram 2× o custo por lead sem converter.
3. Troque títulos com desempenho "Baixo".
4. Conte as conversas "(Vim pelo Google)" e quantas fecharam.
