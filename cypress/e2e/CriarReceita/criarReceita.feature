Feature: Funcionalidade de Criar Receita

  Scenario: Login com usuário e senha corretos
    Given que estou na página de login
    When eu insiro o usuário "standard_user" e a senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a lista de produtos

  Scenario: Criar uma receita pessoal