## Freegle
<https://www.ilovefreegle.org/>
Site britânico em que você pode anunciar coisas que quer doar e procurar por doações de objetos específicos que deseja.

Na página inicial há uma descrição rápida do intuito do site, assim como um vídeo animado informativo.
Existem basicamente dois fluxos de navegação a partir dessa tela, cadastrar produtos clicando em Give Stuff ou Ask for Stuff, e visualização de produtos, onde você primeiro precisa colocar seu postcode para ver os itens da região.

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/7b778981-6b15-44c3-a1b4-ef0afd1c0344)

Olhando primeiramente para o fluxo de cadastro de produtos, ao clicar em Give Stuff, entramos em uma tela para colocar os dados do objeto que queremos doar como foto, descrição e quantidade disponível.

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/556bfb9b-ab0f-45d2-8cb4-1b1a7131c644)

Em seguida, temos que adicionar o post code de uma região do Reino Unido onde o site oferece suporte.

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/fe12aaec-e0b7-4445-b582-d255b15c7f8e)

Por fim, temos um campo para adicionar o email, onde é explicado que o email não será disponibilizado para ninguém e serve apenas para notificar quando alguém tiver interesse no seu produto.

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/be5dcc08-9cc8-45a8-925d-4f98d019a8f1)

Voltando agora para a página inicial e acessando o fluxo de visualização de produtos, nos deparamos com a seguinte tela:

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/a0f2f0e9-e9bc-47bf-a513-169865c4b4de)

A página é muito simples de utilizar. Na parte superior existe um mapa e, logo abaixo, um feed com diversos posts de produtos anunciados. No mapa existem círculos, que simbolizam a localização de onde o produto está sendo doado, em que você pode clicar para filtrar os posts de uma determinada área. Os círculos que estiverem visíveis no mapa irão ficar à mostra no feed. Se nenhum círculo estiver no mapa, nenhum post irá aparecer.

Os posts tem duas classificações: Offer, que é um produto sendo doado em algum lugar, e Wanted, que é a descrição de um item que alguém deseja.
Seguindo para a parte de baixo do mapa temos um filtro, em que podemos filtrar por todos os itens, just wanted ou Just offer. Também existe uma barra de search para procurar elementos específicos.

Falando agora sobre os posts especificamente, cada card possui os seguintes atributos: imagem do produto, uma label no canto da imagem que indica se o anúncio é uma offer ou uma wanted, título dado ao anúncio pelo usuário, postcode do anunciante, data e uma rápida descrição do produto.

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/be3e10bf-0e2a-4f08-8fb1-4a79ccbb1adc)

Ao clicar em um anúncio, uma modal é aberto dando mais detalhes do produto, em que a imagem é expandida e mostra as mesmas informações anteriores. Dessa vez, é possível visualizar um mapa da proximidade do produto. Abaixo disso, você pode deixar seu email para contato e um campo de texto para colocar uma mensagem do porquê você deveria receber esse produto.

![image](https://github.com/EngenheirosDoHavaii/EngDSoft/assets/75221107/9bfe04cf-2464-4d66-8ff1-a54e2701a6ea)

**Pontos positivos:**
- Não é necessário login na plataforma para utilizar, basta entrar e começar a usar.
- Em nenhum momento o site expõe informações pessoais do usuário. Para entrar em contato você deve adicionar seu próprio email e, caso o dono do produto tenha interesse, ele enviará um email para que o contato continue.

**Pontos negativos:**
- Aparentemente não existe nenhum controle sobre quem pode postar, nem verificação se o produto é real, o que pode ser um problema em caso de usuários mal intencionados.
- A página só funciona no Reino Unido, inclusive é necessário fornecer um postcode de lá para acessar o site.

---

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