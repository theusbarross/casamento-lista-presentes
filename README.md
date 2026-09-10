# 💍 Site de Casamento Interativo — Contagem Regressiva & Lista de Presentes PIX

Um projeto de site de casamento de página única (Single Page Application), elegante e moderno. Desenvolvido para facilitar a vida dos noivos com uma contagem regressiva em tempo real e uma lista de presentes simbólicos integrada com pagamentos via PIX e painel no Google Sheets.

Este projeto é 100% front-end estático (HTML/CSS/JS) no arquivo principal e conta com um backend serverless utilizando **Google Apps Script** para salvar as confirmações diretamente em uma planilha.

---

## 🌟 Funcionalidades e Telas

1. **Capa Elegante (Hero Section)**
   - Apresentação dos noivos com tipografia sofisticada.
   - **Contagem Regressiva em Tempo Real**: Calcula dias, horas, minutos e segundos restantes até a data do grande dia.
   - Design totalmente responsivo para funcionar perfeitamente no celular e no computador.

2. **Lista de Presentes (Brincadeira Simbólica)**
   - Os presentes na lista são "cotas" ou brincadeiras simbólicas, onde o convidado escolhe um item divertido (ex: "Lenço para a noiva chorar", "Ajuda na Lua de Mel").
   - Valores revertidos diretamente para a conta dos noivos via PIX.
   - Categorias de filtro de presentes (Até R$50, R$50 a R$100, Acima de R$100).

3. **Integração PIX Oficial (BR Code / EMV)**
   - Geração automática e dinâmica de **QR Code PIX** e **Código Copia e Cola**.
   - O código gerado é padrão Banco Central, compatível com o aplicativo de qualquer banco.

4. **Painel de Controle no Google Sheets**
   - Não precisa de banco de dados complexo! Os presentes escolhidos e as mensagens dos convidados são enviados diretamente para uma planilha do Google Sheets de forma segura e fácil.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3 (Vanilla)**: Estrutura semântica e estilos modernos (flexbox, grid, glassmorphism, animações suaves).
- **JavaScript (ES6+)**: Lógica da contagem regressiva, filtros dinâmicos, geração do Payload PIX (CRC16) e envio de dados (Fetch API).
- **Google Apps Script**: Criação de um WebHook (Web App) para receber os dados do site e popular a planilha do Google Sheets.
- **QRCode.js**: Biblioteca leve para gerar o QR Code dinamicamente no navegador.
- **Font Awesome & Google Fonts**: Ícones modernos e tipografia elegante.

---

## 🚀 Como Clonar e Rodar o Projeto

Você pode clonar este repositório para usar no seu próprio casamento, adaptando os nomes e dados!

### 1. Clonando o Repositório
Abra o seu terminal e execute:
```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO
```

### 2. Configurando o Front-End (`index.html`)
Abra o arquivo `index.html` em seu editor de código favorito e desça até a linha ~995, na seção `CONFIG_CASAMENTO`:

```javascript
const CONFIG_CASAMENTO = {
    // 1. Defina a data do casamento (Ano, Mês (Janeiro=0), Dia, Hora, Minuto)
    dataCasamento: new Date(2026, 9, 28, 17, 0, 0),
    
    // 2. Coloque seus dados do PIX
    chavePix: "SEU_TELEFONE_OU_CPF", // Apenas números
    nomeBeneficiario: "NOME DOS NOIVOS", // Nome do titular da conta
    cidadeBeneficiario: "SUA CIDADE", // Cidade do titular
    
    // 3. (Mais adiante) A URL gerada no Google Apps Script
    urlGoogleSheets: "SUA_URL_DO_GOOGLE_SCRIPT_AQUI"
};
```

### 3. Configurando a Planilha e o Banco de Dados (Google Sheets)
Para que os presentes sejam salvos, você precisa configurar o script do Google:

1. Crie uma nova planilha no **[Google Sheets](https://sheets.google.com)**.
2. No menu superior da planilha, clique em **Extensões** > **Apps Script**.
3. Apague qualquer código existente lá e cole o conteúdo do arquivo [`google-apps-script.js`](./google-apps-script.js) que está neste repositório.
4. Clique em **Salvar** (💾).
5. No canto superior direito, clique em **Implantar** (Deploy) > **Nova implantação** (New deployment).
6. Na engrenagem, escolha **App da Web** (Web app).
7. Configure:
   - **Descrição**: Webhook do Casamento
   - **Executar como**: *Eu* (seu email)
   - **Quem pode acessar**: *Qualquer pessoa* (Importante para não bloquear os convidados!)
8. Clique em **Implantar** e conceda as permissões necessárias na sua conta Google.
9. Copie a **URL do app da Web** gerada.
10. Volte no seu arquivo `index.html` e cole essa URL no campo `urlGoogleSheets`.

### 4. Publicando o Site Gratuitamente
Como é um projeto estático, você pode hospedá-lo de graça em segundos:
- Arraste a pasta do projeto para o **[Netlify Drop](https://app.netlify.com/drop)**.
- Ou use o **GitHub Pages**, **Vercel** ou **Cloudflare Pages**.

---

## 🎨 Personalizando as Fotos dos Presentes
As fotos dos presentes ficam na pasta `/imagens`.
- Elas estão configuradas no array `LISTA_PRESENTES` no `index.html`.
- Se você não colocar a foto na pasta, o site utilizará automaticamente um **ícone (fallback)** sem quebrar o layout!

---

Feito com ❤️ para ajudar outros noivos e noivas!
