// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando personalizado para adicionar um contato
Cypress.Commands.add('adicionarContato', (nome, email, telefone) => {
  cy.get('input[placeholder="Nome"]').type(nome)
  cy.get('input[placeholder="E-mail"]').type(email)
  cy.get('input[placeholder="Telefone"]').type(telefone)
  cy.get('button').contains('Adicionar').click()
})

// Comando personalizado para editar um contato
Cypress.Commands.add('editarContato', (nomeOriginal, novoEmail, novoTelefone) => {
  cy.contains(nomeOriginal)
    .parent()
    .find('.sc-gueYoa > .edit')
    .click()
  cy.get('input[placeholder="E-mail"]').clear().type(novoEmail)
  cy.get('input[placeholder="Telefone"]').clear().type(novoTelefone)
  cy.get('button.alterar').click()
})

// Comando personalizado para cancelar edição de contato
Cypress.Commands.add('cancelarEdicaoContato', (nomeOriginal) => {
  cy.contains(nomeOriginal)
    .parent()
    .find('.sc-gueYoa > .edit')
    .click()
  cy.get('button.cancelar').click()
})

// Comando personalizado para excluir um contato
Cypress.Commands.add('excluirContato', (nome) => {
  cy.contains(nome)
    .parent()
    .find('.sc-gueYoa > .delete')
    .click()
}) 