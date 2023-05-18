## Trashnothing:
<https://trashnothing.com/beta/>

Um site para pessoas anunciarem objetos que não utilizam mais para doação.

Na página inicial:
- Um botão para doar um item (Give) e um para procurar por itens anunciados (Browse).
- Breve descrição do intuito do site.

Clicando em “Give”, abre uma página para realizar o cadastro no site

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/f6ba457c-bd97-4e4b-b767-3fc21ca69a5c)

Feature: cadastro e login por meio de autenticação de contas de redes sociais

Ao logar em uma conta ou clicar em “Browse” na página inicial, uma nova tela é aberta. Nessa nova página, tem-se a seguinte lista:

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/325c9c27-3668-4654-a33b-bd9c3d43c4d1)

Essa é a lista de posts anunciados no site com base na localização. Features de interesse:
- O usuário pode filtrar apenas ofertas, apenas pedidos ou ambos.
- Localização é configurada automaticamente com base na localização do usuário.
- Você pode alterar a localização clicando em “different location”:

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/c03d8f2a-a0a7-4276-bc7d-398e7202b256)

Para mudar a localização, basta escrever o nome da cidade que deseja. Uma lista de cidades do mundo inteiro com o mesmo nome digitado aparece para que o usuário selecione a opção correta. A lista é feita utilizando a API GeoNames.

Caso existam anúncios a uma distância de até 160km da localização escolhida, os posts aparecem na lista. Posts com fundo bege são de ofertas e, com fundo verde, de pedidos. As únicas coisas mostradas de cada post na lista são o nome do objeto doado ou requisitado, descrição, tempo decorrido a partir do momento da postagem e foto do produto (se houver).

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/3887afd6-0d2f-4940-b2e9-6af74cc7175b)

Clicando em um post, abre-se sua própria página. Nela podemos ver algumas informações sobre o anúncio como fotos do produto, o nome do produto junto com a localização definida pelo dono do post, o nome de usuário do doador, há quanto tempo o anúncio foi publicado e descrição do anúncio:

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/97ed0d79-c5d4-4b80-a3ee-2e49648ab54f)

Há também a disposição de algumas informações para dar mais segurança ao usuário na hora de decidir se ele vai querer o produto, como há quanto tempo o anunciante é um membro do site, quantas ofertas ele fez e quantos pedidos:

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/8c578baf-0998-4a9e-a6d7-1081ad420bca)

Por fim, para criar um post no site basta clicar no botão “+ Post” que fica na barra de navegação das páginas e uma nova página será aberta.

Nela, em um formulário, o usuário pode adicionar fotos do objeto, título do post, descrição, localização da área em que se encontra e o tempo que o post vai ficar no ar. Além disso, o usuário pode escolher se o post é um anúncio de doação ou um pedido:

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/45522779-715d-40a4-9fa0-98947d951d21)

**Pontos positivos:**
- Fácil de procurar objetos pois posts são mostrados em uma lista simples
- Disposição somente de informações necessárias para que a troca ocorra
- Fácil de entrar em contato com o dono do post
- Informações úteis sobre o dono do post para que o usuário possa ter mais confiança no anúncio
- Sem necessidade de exibição de informações pessoais

**Pontos negativos**
- Não se pode procurar objetos em um raio de distância maior que 160km em relação à localização escolhida