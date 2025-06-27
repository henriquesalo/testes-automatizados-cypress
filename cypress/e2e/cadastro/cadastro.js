import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de registro", () => {
  cy.visit("/home");
  cy.get('#botao-cadastar').click();
});

When(
  "eu insiro o usuário {string} e a senha {string} e o nome {string} e o documento {string} e a confirmacao {string}",
  (email, senha, nome, documento, confirmaSenha) => {
    cy.get('#email').type(email);
    cy.get('#senha').type(senha);
    cy.get('#field-nome').type(nome);
    cy.get('#documento').type(documento);
    cy.get('#confirmaSenha').type(confirmaSenha);
  }
);

When("eu clico no botao cadastrar", () => {
  cy.get('#button-cadastro').click();
});

When("eu confirmo meu cadastro", () => {
  cy.get('.swal2-confirm').click();
});

