# Site — Dra. Jackeline Cristina Cunha

Site institucional (uma página) para consultório odontológico, com tema **roxo e dourado**, responsivo (celular e computador) e pronto para publicar.

## Estrutura

```
site_dentista_meuamor/
├── index.html          # Página do site
├── css/styles.css      # Estilo (cores roxas e douradas)
├── js/main.js          # Menu, animações
├── assets/img/         # 👉 COLOQUE AS FOTOS AQUI (veja LEIA-ME-FOTOS.txt)
└── README.md
```

## 1. Antes de publicar — personalizar (rápido)

Já está tudo configurado com os dados reais:

- **WhatsApp**: `(11) 94018-0104` (usado no botão flutuante, no contato e no formulário).
- **Formulário**: ao enviar, abre direto o **WhatsApp** da doutora com a mensagem
  preenchida (não usa e-mail). Para trocar o número, procure por `5511940180104`
  no `index.html` (formato: 55 + DDD + número).
- **CRO**: `162243` (no rodapé).
- **Horário**: `Atendimento 24 horas · todos os dias`.
- **Endereço**: `Rua Jácome Teles de Menezes, 951 — Ermelino Matarazzo, São Paulo`
  (já com link para o Google Maps).
- **Fotos**: veja `assets/img/LEIA-ME-FOTOS.txt`.

Tudo pronto para publicar. 🎉

## 2. Ver o site no seu computador

Basta dar **duplo clique no `index.html`**. Ele abre no navegador.

## 3. Publicar na internet (grátis e fácil)

### Opção A — Netlify Drop (mais fácil, sem conta técnica)
1. Acesse **https://app.netlify.com/drop**
2. Arraste a **pasta inteira** `site_dentista_meuamor` para a página.
3. Pronto! Ele gera um link tipo `nome-aleatorio.netlify.app`.
4. Crie uma conta grátis para manter o site no ar e poder ligar um domínio.

### Opção B — Vercel
1. Crie conta em **https://vercel.com**
2. "Add New Project" → importe a pasta (ou suba no GitHub e conecte).

### Opção C — GitHub Pages
1. Crie um repositório no GitHub e suba os arquivos.
2. Settings → Pages → Branch `main` / pasta `/root` → Save.

> Recomendação: **Netlify** — é o caminho mais simples e já facilita o domínio próprio.

## 4. Domínio próprio (ex.: drajackelinecunha.com.br)

1. **Registrar o domínio**:
   - `.com.br` → **https://registro.br** (barato, ~R$40/ano).
   - `.com` → Namecheap, GoDaddy, Hostinger, etc.
2. **Ligar o domínio ao site** (no Netlify):
   - Painel do site → **Domain settings** → **Add a domain** → digite o domínio.
   - O Netlify mostra os registros DNS. No Registro.br, aponte conforme indicado
     (geralmente um `CNAME` ou os *nameservers* do Netlify).
   - O **HTTPS (cadeado)** é ativado automaticamente e de graça.
3. Aguarde a propagação (de minutos até algumas horas).

Quando você escolher onde publicar e o nome do domínio, posso te guiar passo a passo.

## Observações
- As fotos do Instagram são da titular; use apenas imagens autorizadas por ela.
- Todo o texto pode ser editado direto no `index.html`.
