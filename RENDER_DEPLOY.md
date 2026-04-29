# Deploy no Render

Este projeto usa TanStack Start com SSR. No Render, publique como **Web Service** (Node), não como Static Site.

## Passo a passo

1. Suba o repositório para o GitHub (botão GitHub no topo do Lovable).
2. Em https://dashboard.render.com → **New +** → **Web Service**.
3. Conecte o repositório.
4. Preencha:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Node Version** (em Environment): `20`
5. Clique em **Create Web Service**.

O Render injeta automaticamente a variável `PORT`, e o servidor do TanStack Start escuta nela.

## Observações

- O `wrangler.jsonc` e `_redirects` são usados pelo Cloudflare/Lovable e **podem ser ignorados** no Render — não atrapalham.
- Se ativar Lovable Cloud no futuro, recrie as variáveis de ambiente também no painel do Render.
- Se o build falhar por falta de memória no plano free, faça upgrade para Starter.
