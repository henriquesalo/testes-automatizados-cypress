Feature: Funcionalidade de Criar Receita

  Scenario: Login com usuário e senha corretos
    Given que estou na página de login
    When eu insiro o usuário "phineasisback@gmail.com" e a senha "123"
    And clico no botão de login
    Then devo ser redirecionado para a pagina principal
    
  Scenario: Criar receita  
    Given que estou na página principal
    When eu clico no botão criar nova receita
    And devo ser redirecionado para a tela de criar receita
    And eu insiro o nome "Teste", a categoria "Sobremesa" e a descricao "descricao teste"
    And devo clicar no botao de confirmar
    Then devo ser redirecionado para a tela meu livro