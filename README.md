<h1 align="center">Ignite Shop</h1>

## Descrição do Projeto

  Ignite Shop é uma loja online de vendas de roupas, feita com ReactJS, Typescript e NextJS. Os dados dos produtos são consumidos de uma API gerada de [Stripe](https://stripe.com/docs), onde fiz cadastro das informaçoes de produtos.
  
  Os estilos foram inspirado de um templete de [Figma](https://www.figma.com/file/vEQkbyFhkyq2NxxQmxQUSy/Ignite-Shop-2.0-(Copy)?node-id=2%3A12) da [Rocketseat](https://app.rocketseat.com.br/).
 Esté projeto conta com sua versão responsiva. 
 
 Se sentir vontade de acessar ao Deploy do projeto em produção, pode clicar :point_right: [aqui](https://ignite-shop-prod.vercel.app/) e será redireccionado.
  
## Pré-visualização
# ![Ignite Shop](https://images2.imgbox.com/b4/c4/M2lbhap1_o.png)

## Pre-requisitos para rodar na sua máquina

Antes de começar, você vai precisar ter instalado no seu computador as seguintes ferramentas:
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)

Além disto é bom ter um editor para trabalhar com o código.
* [VSCode](https://code.visualstudio.com/)

## Instalação

 ```bash
  # Clone este repositório
    $ git clone git@github.com:MartinGBB/ignite-shop.git
  # Acesse a pasta do projeto no terminal
    $ cd ignite-shop

  # Instale as dependências
    $ npm install
  ```
É importante criar uma conta no Stripe exibir informações de produtos.

Deve criar o arquivo: `.env.local` na raiz do projeto e passar as seguintes chaves com os seguintes dados:
  ```.env
    # A url pode ser http://localhost:3000 em ambiente de desenvolvimento
    NEXT_URL={url}
  
    STRIPE_PUBLIC_API_KEY={chave_publica_stripe}
    STRIPE_SECRET_API_KEY={chave_privada_stripe}
    
    # Não deve incluir as chaves
  ```

## Execução

  ```bash
    # Execute a aplicação em modo de desenvolvimento
    # O servidor inciará na porta da chave que escolho na chave NEXT_URL
    $ npm run dev

    # Aplicação em produção
    $ npm run build
    $ npm run start
  ```
  
 ## Validação de erros de lint

  ```bash
    # Para buscar erros, execute: 
    $ npm run lint
    
    # Para corregir erros, execute:
    $ npm run lint:fix
  ```
 
 ## Usos
  * A exibição dos produtos é feita com carousel
  * Pode entrar em cada produto para exibir mais detalhes do produto
  * Pode adicionar, remover e finalizar compra desde o carrinho de compras
  * Ao clicar em `finalizar compra` será redireccionado para o checkout do Stripe,
      
    * ### Testar checkout
      * Pode usar o cartão:
        `4242 4242 4242 4242`
          
       * Os demais dados podem ser preenchidos aleatoriamente a excepção
          da data de vencimento que deve ser maior a sua data atual.
        #### Também pode consultar [Outros cartões](https://stripe.com/docs/testing)
  * Se a compra for finalizada com sucesso será redirecionado para uma pagina
    onde verá os produtos que comprou.
 
## Tecnologías
  - [ReactJS](https://pt-br.reactjs.org/)
  - [NextJS](https://nextjs.org/docs/getting-started)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Stripe](https://stripe.com/docs)
  - [Stitches](https://stitches.dev/)
  - [ESlint](https://eslint.org/)
  
## Autor

<a>
  <img src="https://github.com/MartinGBB.png" width="100px;" alt=""/>
  <sub><b>Martin Brazón</b></sub></a> <a href="https://github/MartinGBB" title="GitHub">
</a>


 Feito por Martin Brazón.
 
 [![Linkedin Badge](https://img.shields.io/badge/-MartinGBrazon-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/martinbrazon/)](https://www.linkedin.com/in/martinbrazon/) [![Gmail Badge](https://img.shields.io/badge/-escorpmartin97@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:escorpmartin97@gmail.com)](mailto:escorpmartin97@gmail.com)
 
