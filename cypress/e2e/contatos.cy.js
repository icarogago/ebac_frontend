/// <reference types='cypress' />

// Função para limpar screenshots (não está sendo usada diretamente, mas pode ser útil para custom tasks)
const limparScreenshots = () => {
  // Comando customizado para limpar screenshots antes de cada teste
  cy.task('limparScreenshots')
}

describe("Teste para adicionar, editar e remover contatos", () => {
  // Antes de todos os testes, limpa a pasta de screenshots para evitar resíduos de execuções anteriores
  before(() => {
    cy.exec('powershell.exe Remove-Item -Recurse -Force cypress/screenshots/*', { failOnNonZeroExit: false });
  });

  // Antes de cada teste, acessa a página principal da aplicação
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  // Teste de inclusão de contato
  it("Deve incluir informações no formulário", () => {
    // Preenche o formulário com nome, e-mail e telefone
    cy.get('input[type="text"]').type("Icaro Gago");
    cy.get('input[type="email"]').type("icaro.gago@teste.com");
    cy.get('input[type="tel"]').type("11911112222");
    // Clica no botão de adicionar
    cy.get('button.adicionar').click();
    // Verifica se o contato foi adicionado com sucesso
    cy.contains("Icaro Gago").should('be.visible');
    // Tira um screenshot do resultado
    cy.screenshot("incluir-icaro-gago");
  });

  // Teste de edição do último contato da lista
  it("Deve alterar a informação da lista", () => {
    // Clica no botão de editar do último contato
    cy.get('.edit').last().click();
    // Altera os dados do contato
    cy.get('input[type="text"]').clear().type("IGago Gago");
    cy.get('input[type="email"]').clear().type("icaro.editado@teste.com");
    cy.get('input[type="tel"]').clear().type("11933334444");
    // Salva a alteração
    cy.get(".alterar").click();
    // Verifica se o novo e-mail está visível na lista
    cy.contains("icaro.editado@teste.com").should('be.visible');
    // Tira um screenshot do resultado
    cy.screenshot("editar-icaro-gago");
  });

  // Teste de remoção do último contato da lista
  it("Deve remover o último contato da lista", () => {
    // Clica no botão de deletar do último contato
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click(); // Clicar no botão de remover o ultimo contato da lista
    cy.screenshot("remover-icaro-gago"); // Tira uma screenshot do resultado
  });
}); 