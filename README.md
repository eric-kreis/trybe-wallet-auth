# Projeto Trybewallet
![Trybewallet](https://user-images.githubusercontent.com/82068881/129070588-2f4b26ad-d573-4b24-bbaf-b7e79639aa62.png)

***
Você pode acessar o site no ar [aqui](https://kevin-ol.github.io/project-trybewallet/).

Projeto feito como critério avaliativo na escola de programação **Trybe**.

Foram utilizadas as tecnologias HTML, SCSS, Javascript e a biblioteca React.JS.

O objetivo do projeto consolidar conhecimento de manipulação de estado global utilizando a biblioteca Redux.

A página é um controlador de gastos em outras moedas. Após ser feito o login (não possui integração com back-end, então qualquer email no formado teste@teste.com 
e senha com 6 caracteres dá acesso), o usuário é direcionado a uma página onde pode adicionar uma despesa, selecionando seu valor, descrição, moeda, pagamento e 
motivo. As despesas adicionadas aparecem na tabela abaixo, e podem ser editadas ou excluídas. A cada adição, é feita uma requisição na API de moedas 
[Awesome API](https://docs.awesomeapi.com.br/api-de-moedas) para resgatar cotação atual da moeda, que é atualizada a cada 30 segundos.
***
Os requisitos que compõem projeto são:

:white_check_mark: Criar página de login que:
- Inicia com a opção de login desabilitada;
- Realiza verificações dos dados do usuário, para então habilitar o login;
- Salva o email digitado no estado global da aplicação

:white_check_mark: Criar página carteira que:
- Contenha um Header exibindo o email logado e o valor total das despesas adicionadas;
- Contenha formulário para adicionar uma nova despesa;
- Contenha lógica para exibir as opções de moedas obtidas pela API;
- Possua uma tabela exibindo as despesas adicionadas;
- Possua funcionalidades de editar ou excluir despesas;
