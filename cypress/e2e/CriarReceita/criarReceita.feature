Feature: Funcionalidade de Criar Receita

  Scenario: Login com usuário e senha corretos
    Given que estou na página de login
    When eu insiro o usuário "phineasisback@gmail.com" e a senha "123"
    And clico no botão de login
    Then devo ser redirecionado para a pagina principal
    And clico no botão de crie suas receitas
    And eu insiro os dados de nome "teste" e descricao "teste1"
    And eu escolho a categoria
    And clico no botao de confirmar