# Documentação da API de Gerenciamento de Tarefas (Todo)

## 1. Descrição
Esse projeto tem como finalidade desenvolver uma aplicação que permita o usuário realizar operações simples de Criar, Ler, Atualizar e Deletar (CRUD) utilizando Node.js para o Back-end e MongoDB para o Banco de Dados.

## 2. Tecnologias e Ferramentas

- **Back-End**: Node.js e Express
- **Banco de Dados**: MongoDB
- **Ferramentas**: Body-Parser
- **Ferramenta de teste**: Insomnia

## 3. Instalação

Para que seja possivel iniciar a API em sua máquina será necessário realizar alguns preparativos que serão descritos logo abaixo:

1. Será necessário baixar o pacote _node_modules_ através do comando:

```bash
npm install
```
1. Após a instalação do pacote _node_modules_ será necessário realizar o download do Insomnia, uma ferramenta de teste de API e cliente REST. Para facilitar o processo basta [clicar aqui](https://insomnia.rest/download). 

2. Para esse passo, anexei o arquivo chamado `insomnia_2024-03-28.json` na pasta raiz. Após baixar o arquivo, acesse o programa do Insomnia e ao lado direito clique em _create_, _import_ e após isso clique dentro do campo de importação para localizar o arquivo baixado, ou poderá movê-lo para dentro dessa aba.
   
3. Agora você terá acesso aos testes de API e cliente REST.

4. Para que seja possivel acessar o banco de dados, deixei declarado um banco de testes a essa API, mas caso seja de seu interesse, deverá acessar o site do [MongoDB](https://www.mongodb.com/pt-br/cloud/atlas/lp/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-br_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204511&adgroup=1209463260064162&msclkid=a0736d4b286e18b00eb60b4e97209b27?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_amers-br_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204511&adgroup=1209463260064162&msclkid=a0736d4b286e18b00eb60b4e97209b27), criar sua conta e iniciar um novo banco de dados.
5. **Opcional**: Caso queira alterar o banco de dados, necessário acessar a pasta _src > models_ e abrir o arquivo `Todo.js`. No final do arquivo é possível verificar a funcionalidade de conexão do banco de dados chamada de _mongoose.connect_. Na String após "mongodb+srv://" deverá colocar o seu usuário e após o ":" poderá colocar a sua senha.
   
## 4. Iniciando API
Para que seja possivel iniciar a API, você deverá acessar a pasta _src_ e abrir o arquivo principal `app.js`. Agora, usando o terminal será necessário digitar o seguinte comando:

```bash
nodemon app.js
```
O comando `nodemon` faz com que o servidor reinicie a cada alteração realizada nos arquivos.

## 5. Funcionalidades

#### É possível encontrar os EndPoints na pasta _src > routes_ e acessar o arquivo `todoRoutes.js`.

* **router.post** = Criação da lista de tarefas com os campos "title", "description" e "completed";
* **router.get** = Listagem de todos os dados criados no banco de dados;
* **router.get(id)** = Retorno de um item declarado pelo ID;
* **router.put** = Atualiza um item declarado pelo ID;
* **router.delete** = Deleta um item declarado pelo ID;

## 6. Arquivo Principal

Na pasta principal `app.js` foi necessário realizar a importação do express e do body-parser. O body-parser tem como função decodificar diferentes tipos de dados, nesse caso utilizei para o formato Json. Também foi definido as rotas para `('./routes/todoRoutes')` para uma melhor organização.
