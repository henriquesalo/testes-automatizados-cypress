Feature: Funcionalidade de Editar Receita

  Scenario: Login com usuário e senha corretos
    Given que estou na página de login
    When eu insiro o usuário "phineasisback@gmail.com" e a senha "123"
    And clico no botão de login
    Then devo ser redirecionado para a pagina principal
    And clico no botao de veja suas receitas
    And clico no botao de editar receita
    And edito um campo
    And clico no botao de confirmar para salvar