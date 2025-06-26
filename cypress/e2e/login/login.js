import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.visit("/");
});

When("eu insiro o usuário {string} e a senha {string}", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
});

When("clico no botão de login", () => {
  cy.get("#login-button").click();
});

Then("devo ser redirecionado para a lista de produtos", () => {
  cy.url().should("include", "/inventory.html");
});

Then("uma mensagem de erro deve ser exibida", () => {
  cy.get("[data-test='error']").should("be.visible");
});

Given("que estou logado com sucesso", () => {
  cy.visit("/");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
});

When("clico no menu e escolho logout", () => {
  cy.get('.bm-burger-button > button').click();
  cy.get('#logout_sidebar_link').click();
});

Then("devo retornar à página de login", () => {
  cy.url().should("include", "/index.html");
});