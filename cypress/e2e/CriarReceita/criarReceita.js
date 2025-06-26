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

Given("Que estou na pagina principal", () => {
  cy.visit("http://localhost:4200/home");
});

When("eu clico no botão criar nova receita", () => {
  cy.get('#button-crie').click();
});

Then("devo ser redirecionado para a tela de criar receita", () => {
  cy.url().should("include", "/receita/criar-receita");
});

When(
  "eu insiro o nome {string}, a categoria {string} e a descricao {string}",
  (nome, categoria, descricao) => {
    cy.get('input[name="nome"]').type(nome);
    // se for Angular Material:
    cy.get('mat-select[formcontrolname="categoria"]').click();
    cy.contains("mat-option", categoria).click();
    // se for select nativo, use:
    // cy.get('select[name="categoria"]').select(categoria);
    cy.get('textarea[name="descricao"]').type(descricao);
  }
);

When("devo clicar no botao de confirmar", () => {
  cy.contains("button", "Confirmar").click();
});

Then("devo ser redirecionado para a tela meu livro", () => {
  cy.url().should("include", "/meu-livro");
});