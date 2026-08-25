# 💍 Site dos Noivos — Matheus & Natyelly (Contagem Regressiva & Lista de Presentes)

Este projeto contém um site de casamento focado na **Contagem Regressiva** e na **Lista de Presentes Divertida com PIX oficial (EMV/BACEN)** integrado com **Google Sheets**.

O código está estruturado em um único arquivo ([`index.html`](file:///d:/Projetos/Casamento%202/index.html)), 100% autossuficiente, com visual moderno, responsivo para celular e totalmente comentado para iniciantes.

---

## 🌟 O que está na página:

1. **Capa / Hero Elegante**:
   - Monograma e nomes dos noivos: **Matheus & Natyelly**
   - Data do evento: **28 . 10 . 2026**
   - Botão de acesso rápido para a lista de presentes.

2. **Cronômetro de Contagem Regressiva em Tempo Real**:
   - Calcula e atualiza automaticamente os **Dias**, **Horas**, **Minutos** e **Segundos** até o casamento.

3. **Lista de Presentes Divertida com PIX Oficial (Banco Central)**:
   - Texto de introdução descontraído do casal explicando os presentes simbólicos.
   - Filtros por valor: *Todos*, *Até R$ 50*, *R$ 50 a R$ 100* e *Acima de R$ 100*.
   - 14 opções de presentes bem-humorados.
   - Modal com **QR Code do PIX oficial (BR Code / EMV com CRC16)** escaneável por qualquer banco.
   - Botão **Copiar Código PIX** e botão **Copiar Chave Telefone**.
   - Formulário para o convidado assinar com nome e mensagem de carinho.

4. **Integração com Google Sheets**:
   - Sempre que um convidado confirma o presente, uma nova linha é adicionada automaticamente na sua planilha com: **Data/Hora**, **Nome do Convidado**, **Presente Escolhido**, **Valor (R$)** e **Mensagem**.

---

## 📊 Como Ativar a Integração com sua Planilha Google Sheets (Passo a Passo)

Sua planilha: [https://docs.google.com/spreadsheets/d/1bNhbLeX0i8H2wIf7YEX3IvTUaV456I1hf09S-s96cHs/edit](https://docs.google.com/spreadsheets/d/1bNhbLeX0i8H2wIf7YEX3IvTUaV456I1hf09S-s96cHs/edit)

1. Abra sua planilha no Google Sheets.
2. No menu superior da planilha, clique em **Extensões** > **Apps Script**.
3. Apague qualquer código que estiver lá e cole o conteúdo do arquivo [`google-apps-script.js`](file:///d:/Projetos/Casamento%202/google-apps-script.js).
4. Clique em **Salvar (💾)**.
5. No canto superior direito, clique em **Implantar** (Deploy) > **Nova implantação** (New deployment).
6. Clique na engrenagem ao lado de "Selecionar tipo" e escolha **App da Web** (Web app).
7. Configure as opções:
   - **Descrição**: *Site de Casamento*
   - **Executar como**: *Eu (seu e-mail)*
   - **Quem pode acessar**: *Qualquer pessoa* (Anyone) ⚠️ **Importante!**
8. Clique em **Implantar** e autorize com sua conta Google.
9. Copie a **URL do app da Web** gerada (começa com `https://script.google.com/macros/s/.../exec`).
10. Abra o arquivo [`index.html`](file:///d:/Projetos/Casamento%202/index.html) e cole a URL no campo:
    ```javascript
    urlGoogleSheets: "SUA_URL_DO_GOOGLE_SCRIPT_AQUI"
    ```

---

## 🚀 Como Colocar no Ar Gratuitamente

1. Acesse o site **[Netlify Drop](https://app.netlify.com/drop)**.
2. Arraste a pasta onde está seu arquivo `index.html` para dentro da página.
3. Em poucos segundos seu site estará no ar com um link público gratuito (ex: `matheus-e-natyelly.netlify.app`).
