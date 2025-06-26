import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de registro", () => {
  cy.visit("/home");
  cy.get('#botao-cadastar').click();
});

When("eu insiro o nome {string} e o email {string} ", (username, email) => {
  cy.get('#field-nome').type(username);
  cy.get('#email').type(email);
});

When("eu insiro o documento {string} e a senha {string}", (documento, password, confirm) => {
  cy.get('#documento').type(documento);
  cy.get('#senha').type(password);
  cy.get('#confirmaSenha').type(confirm);
});

When("clico no botão de cadastrar", () => {
  cy.get('.mat-mdc-card-actions').click();
});
