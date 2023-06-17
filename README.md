## Diagrama:

<p align="center">
  <img src="https://github.com/EngenheirosDoHavaii/EngDSoft/assets/52415053/4c428307-844a-4d52-871a-6f795b719e6f" alt="Diagrama do Projeto"/>
</p>

## Estilo arquitetural adotado:

- MVC

## Padrão de projeto:

- Singleton (src/services/firebase.ts)

## Descrição dos Componentes:

**Login Controller**: Responsável por fazer a autenticação de um usuário caso ele esteja registrado, ou cadastrá-lo.

**Product List**: Responsável por apresentar visualmente todos os produtos registrados no aplicativo para os usuários.

**Product Register**: Permite que um usuário registre um novo produto no sistema.

**Profile View**: Apresenta as informações pessoais do usuário, como nome, sobrenome, email e permite edição dos produtos. Isso inclui o módulo Product Edit.

**Product Edit**: Módulo contido no perfil pessoal do usuário, permite que o mesmo acesse seus produtos já cadastrados, de forma que o mesmo possa editar os dados ou excluí-los do sistema.

**Email Sender**: Módulo acessível a partir do Product list. Permite que um usuário interessado em um produto se comunique com o dono do produto. Sem expor os dados do dono.

**Service Firebase**: Interface que será usada para adicionar ou pegar dados dos bancos.
