Feature: Funcionalidade de Login

  Scenario: Login com usuário e senha corretos
    Given que estou na página de login
    When eu insiro o usuário "phineas247@gmail.com" e a senha "123"
    And clico no botão de login
    Then devo ser redirecionado para a pagina principal