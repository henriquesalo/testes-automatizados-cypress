import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/home");
  cy.get('#botao-login > .hide').click();
});

When("eu insiro o usuário {string} e a senha {string}", (username, password) => {
  cy.get('#field-email').type(username);
  cy.get('#field-senha').type(password);
});

When("clico no botão de login", () => {
  cy.get('#button-login').click();
});

Then("devo ser redirecionado para a pagina principal", () => {
  cy.url().should("include", "/home");
});

When("clico no botão de crie suas receitas", () => {
  cy.get('#button-crie').click();
});

When("eu insiro os dados de nome {string} e descricao {string}", (nome, descricao) =>{
  cy.get('#field-nome').type(nome);
  cy.get('#field-descricao').type(descricao);
});

When("eu escolho a categoria", () =>{
  cy.get('.mat-mdc-select-min-line').click();
  cy.get('#mat-option-1').click();
});

When("clico no botao de confirmar", () => {
  cy.get('#button-confirmar').click();
});