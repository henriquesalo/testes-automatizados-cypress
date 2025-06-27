Feature: Funcionalidade de Filtrar Receitas

  Scenario: Login com usuário e senha corretos
    Given que estou na página de login
    When eu insiro o usuário "phineasisback@gmail.com" e a senha "123"
    And clico no botão de login
    Then devo ser redirecionado para a pagina principal
    And clico no botão de veja suas receitas
    And clico para filtrar por apenas uma receita