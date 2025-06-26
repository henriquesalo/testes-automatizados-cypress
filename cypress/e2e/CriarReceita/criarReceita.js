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
