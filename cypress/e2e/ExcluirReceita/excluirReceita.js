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

When("clico no botão de veja suas receitas", () => {
  cy.get('#button-veja').click();
});

// And clico no botao de remover a receita
When("clico no botao de remover a receita", () => {
    cy.get('#button-deletar-28 > .mat-icon').click();
});