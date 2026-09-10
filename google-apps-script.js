/**
 * ==============================================================================
 * CÓDIGO DO GOOGLE APPS SCRIPT PARA O SITE DE CASAMENTO (MATHEUS & NATYELLY)
 * ==============================================================================
 * 
 * COMO INSTALAR EM 1 MINUTO NA SUA PLANILHA:
 * 
 * 1. Crie uma nova planilha no Google Sheets ou abra uma existente.
 * 
 * 2. No menu superior da planilha, clique em:
 *    "Extensões" (Extensions) > "Apps Script"
 * 
 * 3. Apague tudo o que estiver lá e cole todo este código abaixo.
 * 
 * 4. Clique no ícone de Salvar (💾 ou Ctrl+S).
 * 
 * 5. Clique no botão azul "Implantar" (Deploy) no canto superior direito > "Nova implantação" (New deployment).
 * 
 * 6. Na engrenagem (Configurações), selecione "App da Web" (Web app).
 * 
 * 7. Preencha assim:
 *    - Descrição: Integração Site Casamento
 *    - Executar como: "Eu" (seu e-mail)
 *    - Quem pode acessar: "Qualquer pessoa" (Anyone) -> [IMPORTANTE!]
 * 
 * 8. Clique em "Implantar" (Deploy) e autorize o acesso com sua conta Google.
 * 
 * 9. Copie a "URL do app da web" (começa com https://script.google.com/macros/s/.../exec)
 *    e cole no seu arquivo index.html no campo: urlGoogleSheets: "SUA_URL_AQUI"
 * ==============================================================================
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    
    // Se a planilha estiver vazia, cria os cabeçalhos elegantes automaticamente
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data e Hora", "Nome do Convidado", "Presente Escolhido", "Valor (R$)", "Mensagem de Carinho"]);
      
      // Formata a linha de cabeçalho (dourado com texto branco em negrito)
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#8B7355");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }
    
    // Processa os dados enviados pelo site
    var dados = {};
    if (e && e.postData && e.postData.contents) {
      try {
        dados = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        dados = e.parameter || {};
      }
    } else {
      dados = e.parameter || {};
    }
    
    var dataHora = dados.dataHora || new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    var nome = dados.nome || "Convidado";
    var presente = dados.presente || "Presente Simbólico";
    var valor = dados.valor ? Number(dados.valor) : 0;
    var mensagem = dados.mensagem || "";
    
    // Adiciona uma nova linha na planilha
    sheet.appendRow([dataHora, nome, presente, valor, mensagem]);
    
    // Formata a célula de valor como Moeda (R$)
    var ultimaLinha = sheet.getLastRow();
    sheet.getRange(ultimaLinha, 4).setNumberFormat("R$ #,##0.00");
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "sucesso", "linha": ultimaLinha }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (erro) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "erro", "mensagem": erro.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ "status": "ativo", "mensagem": "WebHook do Casamento ativo e funcionando!" }))
    .setMimeType(ContentService.MimeType.JSON);
}
