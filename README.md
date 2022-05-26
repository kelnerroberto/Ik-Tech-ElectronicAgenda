# Ik-Tech-ElectronicAgenda

## Bem-vindo ao projeto Electronic Agenda!

Este repositório é destinado ao desenvolvimento da aplicação solicitada para avaliação da Ik Solution.

Este é um projeto fullstack, onde há a integração de ambos, tanto backend quanto frontend.

### No backend as principais tecnologias utilizadas são:
  - Node.Js
  - Express
  - Sequelize

* O banco de dados utilizado é o MySQL

### No frontend as principais tecnologias utilizadas são:
  - React.Js
  - Axios
  - Chakra UI

* Foi utilizado o React Router Dom para as rotas

## Como rodar o projeto localmente

### Atenção para essa parte!

Primeiramente, você deve fazer o clone do repositório na sua máquina local. Para isso, recomendo utilizar a chave SSH e utilizar o comando `git clone :chave:`.

Assim que terminar a instalação você pode entrar no diretório do projeto e em seguida fazer esses comandos em ordem:

  - `cd backend && npm install`
  - `cd ..`
  - `cd frontend && cd my_app && npm install`

Rodar o comando `npm install` em cada pasta fará com que as dependências, tanto do backend quanto do frontend, sejam instaladas na sua máquina local (uma vez que o arquivo node_modules é ignorado pelo .gitignore).

## Importante:

Para o backend, você deverá entrar na pasta `backend` e rodar o comando `npx run db:reset`, para que o banco de dados seja criado no seu servidor MySql local e para que o sequelize execute as migrations do projeto, bem como os seeders.

Para o bom funcionamento do projeto backend, é necessário utilizar um arquivo `.env` na pasta `backend`, mas não se preocupe, existe um arquivo `.env.exemple` no projeto, onde você poderá se guiar, então neste caso é só modificar os valores deste arquivo para 'dar match' com sua conexão MySQL.

Após a instalação das dependências, você poderá rodar o projeto utilizando o comando `npm start` dentro da pasta `/backend` e dentro da pasta `/frontend/my_app`.

### Atenção: Para que ambos se integrem, é necessário ter um terminal rodando o projeto de backend em separado com o de frontend, ou seja, pode ser necessário abrir dois terminais.

E pronto! O projeto já deve estar rodando!
