Feature: Funcionalidade de Cadastrar-se

  Scenario: Inserir dados validos
    Given que estou na página de registro
    When eu insiro o nome "caminho feliz" e o email "phineas247@gmail.com"
    And eu insiro o documento "3456345665" e a senha "123"
    And clico no botão de cadastrar
    Then devo ser redirecionado para a pagina principal