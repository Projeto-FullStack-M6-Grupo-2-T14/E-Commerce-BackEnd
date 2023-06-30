# MotorsShop - E-Commerce (Back-End)

## Descrição
A API de MotorsShop é um serviço que permite gerenciar e organizar informações de usuários e anúncios, como nomes, números de telefone, endereços de e-mail no caso dos usuários e marca do carro, modelo, cor e preço além de outros detalhes relevantes. Ela oferece funcionalidades para criar, atualizar, visualizar e excluir tanto usuários como anúncios.

A API de MotorsShop, faz parte de um projeto fullstack e todas suas rotas foram desenvolvidas com intuito de servir ao frontend. Além do CRUD normal, a API possui recursos avançados, como autenticação de usuários, permissões de acesso, sincronização com outros serviços, atualização de senha e integração com sistemas.

Esta API foi desenvolvida utilizando tecnologias modernas, como Node.js, Express.js e Banco de Dados Relacional (PostgreSQL). Ela segue princípios RESTful, oferecendo endpoints bem definidos e respostas em formato JSON para facilitar a integração com diferentes clientes, como aplicativos web e mobile.

No README, você encontrará instruções detalhadas sobre como configurar e usar a API, juntamente com exemplos de solicitações e respostas. Siga as orientações fornecidas para começar a utilizar a API de MotorsShop de forma eficiente.

### 💻 Link da página: [Clique aqui](https://github.com/Projeto-FullStack-M6-Grupo-2-T14/E-Commerce-FrontEnd)

### 💻 Link da API: [Clique aqui](https://github.com/Projeto-FullStack-M6-Grupo-2-T14/E-Commerce-FrontEnd)

### 💻 Link da Documentação: [Clique aqui](https://github.com/Projeto-FullStack-M6-Grupo-2-T14/E-Commerce-FrontEnd)

### 💻 Link do repositório Front-end: [Clique aqui](https://github.com/Projeto-FullStack-M6-Grupo-2-T14/E-Commerce-FrontEnd)
<br>

## 🚀 Principais Tecnologias
<div>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" /> 
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> 
    <img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" /> 
</div><br>

## 🛠 Pré-requisitos

#### Node.js
Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js em https://nodejs.org.
### Banco de Dados PostgreSQL
Certifique-se de ter um banco de dados PostgreSQL instalado e configurado. Você precisará fornecer as informações de conexão corretas no arquivo .env (como descrito abaixo).

## ⚙ Configurações

Após garantir que os pré-requisitos sejam atendidos, você pode prosseguir com as configurações:


  - Clone o repositório do projeto: `git@github.com:Projeto-FullStack-M6-Grupo-2-T14/E-Commerce-BackEnd.git`.

  - Acesse o diretório do projeto: `cd E-Commerce-BackEnd`.

  - Instale as dependências do projeto: `yarn install`.

  - Renomeie o arquivo `.env.example` para `.env`.

  - Edite o arquivo `.env` e atualize a variável `DATABASE_URL` com as informações corretas de conexão com o banco de dados PostgreSQL.
  
  - Certifique-se de fornecer o nome de usuário, senha, host, porta e nome do banco de dados corretos.

  - Execute o comando para criar as tabelas do banco de dados e executar as migrações: `yarn typeorm migration:run`.

  - Inicie o servidor de desenvolvimento: `yarn dev`.

Após executar essas etapas, o servidor estará em execução e você poderá fazer solicitações à API de Agenda de Contatos.

Certifique-se de que todas as dependências estejam instaladas corretamente e que o arquivo `.env` esteja configurado corretamente para evitar problemas de execução.

## 🎯 EndPoints

A API de Agenda de Contatos possui os seguintes endpoints:

#### Usuários (/users)

- POST `/users`: Cria um novo usuário com endereço.
- GET `/users`: lista as informações dos usuários cadastrados.
- GET `/users/:id`: Obtém as informações do usuário.
- PATCH `/users/:id`: Edita as informações do usuário logado.
- DELETE `/users/:id`: Deleta o usuário logado.

#### Rotas de Atualização de senha (/users)

- POST `/sendemail`: Envia um email ao usuário com um link para o reset de senha.
- POST `/resetpassword`: Cria uma nova senha para o usuário.

#### Endereços (/address)

- PATCH `/address/:id`: Edita as informações de endereço.

#### Anúncios (/posters)

- POST `/posters`: Cria um novo anúncio associado ao usuário logado.
- GET `/posters`: Lista todos os anúncios criados.
- GET `/posters/:id`: Obtém as informações de um anúncio específico do usuário logado.
- PATCH `/posters/:id`: Edita as informações de um anúncio específico do usuário logado.
- DELETE `/posters/:id`: Deleta um anúncio específico do usuário logado.

#### Anúncios (/users/posters)

- GET `/users/posters/:id`: Lista todos os anúncios criados pelo mesmo usuário.

#### Login (/login)

- POST `/login`: Cria um token de autenticação com base nas credenciais fornecidas.

<br>

Certifique-se de enviar as solicitações corretas para cada endpoint, incluindo os dados necessários no corpo da solicitação, como parâmetros ou payload, quando aplicável.

Por exemplo, para criar um novo usuário, faça uma solicitação POST para `/users` com os dados do usuário no corpo da solicitação. Para obter os anúncios do usuário logado, faça uma solicitação GET para `/posters`. E assim por diante.

Certifique-se de tratar corretamente as respostas e os possíveis erros retornados pela API para garantir o bom funcionamento e a integridade dos dados.

## 🌎 Equipe
- [Junior Santos](https://github.com/JuniorSantos05)
- [Mayson Petherson Reis Azevedo](https://github.com/M4Y50N)
- [Renan Giareta](https://github.com/renangiaretta)
- [Christiano Kayky de Oliveira Pontes](https://github.com/Christiano-K-Oliveira)



