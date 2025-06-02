# Testes Automatizados - Agenda de Contatos

Este projeto contém testes automatizados para a aplicação de Agenda de Contatos utilizando Cypress.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório
2. Instale as dependências:
```bash
npm install
```

## Executando os Testes

Para abrir o Cypress Test Runner:
```bash
npm run cypress:open
```

Para executar os testes em modo headless:
```bash
npm run cypress:run
```

## Estrutura do Projeto

- `cypress/e2e/contatos.cy.js`: Contém os testes para as funcionalidades de inclusão, alteração e remoção de contatos
- `cypress.config.js`: Configurações do Cypress

## Funcionalidades Testadas

1. Inclusão de Contato
   - Preenchimento do formulário
   - Adição do contato
   - Verificação da inclusão

2. Alteração de Contato
   - Edição dos dados do contato
   - Salvamento das alterações
   - Verificação das mudanças

3. Remoção de Contato
   - Exclusão do contato
   - Verificação da remoção 