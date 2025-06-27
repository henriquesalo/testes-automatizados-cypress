Feature: Funcionalidade de Cadastrar-se

  Scenario: Inserir dados validos
    Given que estou na página de registro
    When eu insiro o usuário "henriquersalomao@gmail.com" e a senha "123" e o nome "testeAutomatizado" e o documento "70801167167" e a confirmacao "123"
    And eu clico no botao cadastrar
    And eu confirmo meu cadastro