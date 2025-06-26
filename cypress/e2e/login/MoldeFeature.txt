Feature: Funcionalidade de Login

  Scenario: Login com usuário e senha corretos
    Given que estou na página de login
    When eu insiro o usuário "standard_user" e a senha "secret_sauce"
    And clico no botão de login
    Then devo ser redirecionado para a lista de produtos

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When eu insiro o usuário "invalido" e a senha "errada"
    And clico no botão de login
    Then uma mensagem de erro deve ser exibida

  Scenario: Logout após login
    Given que estou logado com sucesso
    When clico no menu e escolho logout
    Then devo retornar à página de login