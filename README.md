# 	:woman_technologist: Project Recipes App

Esse projeto contém uma série de informações sobre o que eu aprendi aqui na Trybe ao longo  do curso de desenvolvimento web da Trybe. <br>
Foi desenvolvido um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!<br>
Nele é possível ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks!<br>

A base de dados foi 2 APIs distintas, uma para comidas e outra para bebidas.<br>

O layout tem como foco dispositivos móveis.

## :rocket:Começando
Esse projeto foi proposto pelo curso de desenvolvimento web da Trybe.
### Desenvolvimento
Esse projeto foi desenvolvido no bloco de back-end e foi possível treinar a linguagem JavaScript, React - Context API, Hooks.
### Commits
Os commits foram feitos de acordo com os requisitos finalizados.
### Branch
Todo o projeto foi feita em branchs para cada requisito, que, após realizada o Code Review por pelo menos 2 contribuintes do projeto, essa branch era mergeada para a principal do grupo, que a branch 'main-group-19'.
### Instalação (sem Docker)
Precisa utilizar o comando $npm install, a fim de instalar as dependências do projeto.<br>
Precisa ter na máquina o mongodb.
### Testes
O teste acontece de cada desafio, através do comando $npm test.
### Autores
Esse foi um projeto em grupo,que desenvolvido por mim, Juliana Oliveira, Halister Fernando, Alextor Alexandre, Kelvin Lucas, Vinícius Alves.
### Ferramentas usadas
Foi usado Visual Studio Code, além do Trello que auxiliou na organização das tarefas.
### Framework usado
Bootstrap.

## APIs

### TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)

O modelo de resposta para uma `meal` é o seguinte:
  <details>
    <summary>Ver modelo de resposta para uma meal</summary>

  ```json
    {
      "meals":[
          {
            "idMeal":"52882",
            "strMeal":"Three Fish Pie",
            "strDrinkAlternate":null,
            "strCategory":"Seafood",
            "strArea":"British",
            "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
            "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
            "strTags":"Fish,Seafood,Dairy,Pie",
            "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
            "strIngredient1":"Potatoes",
            "strIngredient2":"Butter",
            "strIngredient3":"Milk",
            "strIngredient4":"Gruy\u00e8re",
            "strIngredient5":"Butter",
            "strIngredient6":"Leek",
            "strIngredient7":"Plain Flour",
            "strIngredient8":"White Wine",
            "strIngredient9":"Milk",
            "strIngredient10":"Parsley",
            "strIngredient11":"Salmon",
            "strIngredient12":"Haddock",
            "strIngredient13":"Smoked Haddock",
            "strIngredient14":"Eggs",
            "strIngredient15":"",
            "strIngredient16":"",
            "strIngredient17":"",
            "strIngredient18":"",
            "strIngredient19":"",
            "strIngredient20":"",
            "strMeasure1":"1kg",
            "strMeasure2":"Knob",
            "strMeasure3":"Dash",
            "strMeasure4":"50g",
            "strMeasure5":"75g",
            "strMeasure6":"2 sliced",
            "strMeasure7":"75g",
            "strMeasure8":"150ml",
            "strMeasure9":"568ml",
            "strMeasure10":"2 tbs chopped",
            "strMeasure11":"250g",
            "strMeasure12":"250g",
            "strMeasure13":"250g",
            "strMeasure14":"6",
            "strMeasure15":"",
            "strMeasure16":"",
            "strMeasure17":"",
            "strMeasure18":"",
            "strMeasure19":"",
            "strMeasure20":"",
            "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
            "dateModified":null
          }
      ]
    }
  ```
  </details>

---

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

É possível listar todas as `categorias`, `nacionalidades` (vindas da API como "areas") e `ingredientes`:

```
categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
```

As fotos dos ingredientes vêm de um end-point padronizado com a seguinte lógica:

```
https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}-Small.png
// exemplo com "Lime"
https://www.themealdb.com/images/ingredients/Lime-Small.png
```

### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidades relativas às bebidas (como ser ou não alcoólica, por exemplo)

  <details>
    <summary>Ver modelo de resposta para drinks</summary>

  ```json
    {
      "drinks":[
          {
            "idDrink":"17256",
            "strDrink":"Martinez 2",
            "strDrinkAlternate":null,
            "strDrinkES":null,
            "strDrinkDE":null,
            "strDrinkFR":null,
            "strDrinkZH-HANS":null,
            "strDrinkZH-HANT":null,
            "strTags":null,
            "strVideo":null,
            "strCategory":"Cocktail",
            "strIBA":null,
            "strAlcoholic":"Alcoholic",
            "strGlass":"Cocktail glass",
            "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
            "strInstructionsES":null,
            "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
            "strInstructionsFR":null,
            "strInstructionsZH-HANS":null,
            "strInstructionsZH-HANT":null,
            "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
            "strIngredient1":"Gin",
            "strIngredient2":"Sweet Vermouth",
            "strIngredient3":"Maraschino Liqueur",
            "strIngredient4":"Angostura Bitters",
            "strIngredient5":null,
            "strIngredient6":null,
            "strIngredient7":null,
            "strIngredient8":null,
            "strIngredient9":null,
            "strIngredient10":null,
            "strIngredient11":null,
            "strIngredient12":null,
            "strIngredient13":null,
            "strIngredient14":null,
            "strIngredient15":null,
            "strMeasure1":"1 1\/2 oz",
            "strMeasure2":"1 1\/2 oz",
            "strMeasure3":"1 tsp",
            "strMeasure4":"2 dashes",
            "strMeasure5":null,
            "strMeasure6":null,
            "strMeasure7":null,
            "strMeasure8":null,
            "strMeasure9":null,
            "strMeasure10":null,
            "strMeasure11":null,
            "strMeasure12":null,
            "strMeasure13":null,
            "strMeasure14":null,
            "strMeasure15":null,
            "strCreativeCommonsConfirmed":"No",
            "dateModified":"2017-12-19 18:34:15"
          }
      ]
    }
  ```
  </details>

---

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

---
### localStorage

O uso de `localStorage` é necessário para que as informações não se percam caso a pessoa atualize a página.
O correto é usar os valores para iniciar sua store ou seu context.

No `localStorage` do navegador:

* a chave `mealsToken` deve conter a seguinte estrutura:
```
1
```

* a chave `cocktailsToken` deve conter a seguinte estrutura:
```
1
```

* a chave `user` deve conter a seguinte estrutura:
```
{
    email: email-da-pessoa
}
```

* a chave `doneRecipes` deve conter a seguinte estrutura:
```
[{
    id: id-da-receita,
    type: comida-ou-bebida,
    nationality: nacionalidade-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita,
    doneDate: quando-a-receita-foi-concluida,
    tags: array-de-tags-da-receita-ou-array-vazio
}]
```

* a chave `favoriteRecipes` deve conter a seguinte estrutura:
```
[{
    id: id-da-receita,
    type: food-ou-drink,
    nationality: nacionalidade-da-receita-ou-texto-vazio,
    category: categoria-da-receita-ou-texto-vazio,
    alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
    name: nome-da-receita,
    image: imagem-da-receita
}]
```

* a chave `inProgressRecipes` deve conter a seguinte estrutura:
```
{
    cocktails: {
        id-da-bebida: [lista-de-ingredientes-utilizados],
        ...
    },
    meals: {
        id-da-comida: [lista-de-ingredientes-utilizados],
        ...
    }
}
```

**Observações técnicas**

* `id-da-bebida` e `id-da-comida` representam o ID de uma bebida e comida, respectivamente, e cada item da lista de ingredientes da respectiva receita deve ser representado apenas pelo número do ingrediente no formato numérico.

### Ícones

Os ícones a serem utilizados na aplicação estão disponíveis do diretório `src/image/`. Esses ícones serão utilizados pelos testes da avaliação automatizada, então certifique-se de utilizá-los nos requisitos e de não renomeá-los.

Os ícones são:

* `profileIcon.svg`;
* `searchIcon.svg`;
* `drinkIcon.svg`;
* `exploreIcon.svg`;
* `mealIcon.svg`;
* `shareIcon.svg`;
* `whiteHeartIcon.svg`;
* `blackHeartIcon.svg`;

### Biblioteca `clipboard-copy`

Para os componentes que contêm a funcionalidade de favoritar pratos ou bebidas, será necessário utilizar a biblioteca `clipboard-copy` para copiar as informações da receita. Essa biblioteca já vem instalada no projeto.

Para mais informações, consulte a [documentação](https://www.npmjs.com/package/clipboard-copy)

### Biblioteca `Bootstrap` (opcional)

Para os grupos que quiserem implementar estilizações no app, recomendamos o uso da lib `Bootstrap`. Ela já vem instalada por padrão neste projeto, bastando apenas implementar nos seus componentes. Por exemplo, caso queira implementar um [botão](https://react-bootstrap.github.io/components/buttons/):

``` jsx
import Button from 'react-bootstrap/Button';

const MeuComponente = () => (
  <Button variant="success">
    Botão Verde
  </Button>
);
...
```

Para mais informações, consulte a [documentação](https://react-bootstrap.github.io/getting-started/introduction/)

---

## :footprints:Requisitos
### Metodologia usada
No trabalho do desenvolvimento de software a gente sempre tem prazos, muitas vezes os prazos são apertados.<br>
Por outro lado, eu não quero criar algo que não entendo perfeitamente, como também fazer códigos rápidos pode levar a erros que podem demorar muito pra corrigir.<br>
Por isso, usei e sempre uso o método Baby Steps, que é uma estratégia de abordar o desafio passo à passo, defensivamente.<br>
Baby steps é um termo em inglês que quer dizer passos de bebê. Refere-se a fazer as coisas, quaisquer que sejam, devagar, com calma, passo a passo.

#### :footprints:Requisito 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%

  O que será verificado:
  ```
  - Verifica a cobertura de testes unitários
  ```

## Tela de login

#### :footprints:Requisito 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

  **Observações técnicas**

  * O input de email deve possuir o atributo `data-testid="email-input"`;
  * O input de senha deve possuir o atributo `data-testid="password-input"`;
  * O botão "Enter" deve possuir o atributo `data-testid="login-submit-btn"`.

  O que será verificado:
  ```
  - Tem os data-testids email-input, password-input e login-submit-btn
  ```

#### :footprints:Requisito 3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email

  O que será verificado:
  ```
  - É possível escrever o email
  ```

#### :footprints:Requisito 4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha

  O que será verificado:
  ```
  - É possível escrever a senha
  ```

#### :footprints:Requisito 5 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos. Caso o formulário esteja inválido, o botão de submeter deve estar desativado, contendo a propriedade `disabled`. Caso contrário, deve estar ativado, não contendo a propriedade `disabled`.

  O que será verificado:
  ```
  - O botão deve estar desativado se o email for inválido
  - O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos
  - O botão deve estar ativado se o email e a senha forem válidos
  ```


#### :footprints:Requisito 6 - Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken

  **Observações técnicas**

  * O token de teste é sempre `1`.

  O que será verificado:
  ```
  - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
  ```

#### :footprints:Requisito 7 - Salve o e-mail da pessoa usuária no localStorage na chave user após a submissão

  **Observações técnicas**

  * Após a submissão, o e-mail de pessoa usuária deve ser salvo em `localStorage` na chave `user` no formato `{ email: email-da-pessoa }`.

  O que será verificado:
  ```
  - Após a submissão a chave user deve estar salva em localStorage
  ```

#### :footprints:Requisito 8 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

  O que será verificado:
  ```
  - A rota muda para a tela principal de receitas de comidas
  ```

## Header

#### :footprints:Requisito 9 - Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo


  O que será verificado:
  ```
  - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`
  ```

#### :footprints:Requisito 10 - Implemente um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo

Todas as [rotas](#rotas) serão verificadas. Os ícones podem ser encontrados em `src/images/profileIcon.svg` e em `src/images/searchIcon.svg`.

  O que será verificado:
  ```
  - Não tem header na tela de login
  - O header tem os ícones corretos na tela de principal de receitas de comidas
  - O header tem os ícones corretos na tela de principal de receitas de bebidas
  - Não tem header na tela de detalhes de uma receita de comida
  - Não tem header na tela de detalhes de uma receita de bebida
  - Não tem header na tela de receita em progresso de comida
  - Não tem header na tela de receita em progresso de bebida
  - O header tem os ícones corretos na tela de explorar
  - O header tem os ícones corretos na tela de explorar comidas
  - O header tem os ícones corretos na tela de explorar bebidas
  - O header tem os ícones corretos na tela de explorar comidas por ingrediente
  - O header tem os ícones corretos na tela de explorar bebidas por ingrediente
  - O header tem os ícones corretos na tela de explorar comidas por nacionalidade
  - O header tem os ícones corretos na tela de perfil
  - O header tem os ícones corretos na tela de receitas feitas
  - O header tem os ícones corretos na tela de receitas favoritas
  ```

#### :footprints:Requisito 11 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

  O que será verificado:
  ```
  - A mudança de tela ocorre corretamente
  ```

#### :footprints:Requisito 12 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

  * O input de busca deve possuir o atributo `data-testid="search-input"`
  
  O que será verificado:
  ```
  - Ao clicar no botão de busca pela primeira vez a barra de busca aparece
  - Ao clicar no botão de busca pela segunda vez a barra de busca desaparece
  ```

## Barra de busca - Header

#### :footprints:Requisito 13 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

Deve existir os data-testids tanto da barra de busca quanto de todos os radio-buttons.

  **Observações técnicas**

  * O radio button de busca de ingrediente deve possuir o atributo `data-testid="ingredient-search-radio"`;
  * O radio button de busca por nome deve possuir o atributo `data-testid="name-search-radio"`;
  * O radio button de busca da primeira letra deve possuir o atributo `data-testid="first-letter-search-radio"`.
  * O botão de busca deve possuir o atributo `data-testid="exec-search-btn"`

  O que será verificado:
  ```
  - Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons
  ```

#### :footprints:Requisito 14 - Posicione a barra logo abaixo do header e implemente 3 radio buttons: Ingredient, Name e First letter

A barra de busca deve ficar logo abaixo do header e deve possuir 3 _radio buttons_: `Ingredient`, `Name` e `First letter`. Eles, em conjunto com a `search-input`, devem mudar a forma como serão filtradas as receitas após clicar no botão `Search`.  Os _endpoints_ da API que você deve usar podem ser consultados [aqui para a API de comidas](https://www.themealdb.com/api.php) e [aqui para a API de bebidas](https://www.thecocktaildb.com/api.php).

  **Observações técnicas**

  * Se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}`;
  * Se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s={nome}`;
  * Se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}`;
  * Se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".

**Atenção:** Utilize `global.alert` para evitar os `warnings` do eslint sobre o uso de `alert` no código.

##### Exemplo: Ao selecionar `Ingredient` e buscar por `chicken`, deve-se utilizar o endpoint `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`.

##### Observação: Para esse requisito será verificada apenas a tela principal de receitas de comidas.

  O que será verificado:
  ```
  - Se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
  - Se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
  - Se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
  - Se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert
  ```

#### :footprints:Requisito 15 - Busque na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas

  **Observações técnicas**

  * Na tela de bebidas, se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingrediente}`;
  * Na tela de bebidas, se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}`;
  * Na tela de bebidas, se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?f={primeira-letra}`;
  * Na tela de bebidas, se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".
##### Observação: Para esse requisito será verificada apenas a tela principal de receitas de bebidas, já que a de comidas já foi verificada no requisito 14.

  O que será verificado:
  ```
  - Na tela de bebidas, se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
  - Na tela de bebidas, se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
  - Na tela de bebidas, se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
  - Na tela de bebidas, se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert
  ```

#### :footprints:Requisito 16 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

  **Observações técnicas**

  * Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes (`/foods/{id-da-receita}`);
  * Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes (`/drinks/{id-da-receita}`).

  O que será verificado:
  ```
  - Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes
  - Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes
  ```

#### :footprints:Requisito 17 - Mostre as receitas em cards caso mais de uma receita seja encontrada

  Mostre as receitas em cards como as da tela principal, caso mais de uma receita seja encontrada.

   **Observações técnicas**
  * Cada card deve conter o `data-testid="${index}-recipe-card"`.
  * Cada imagem deve conter o `data-testid="${index}-card-img"`.
  * Cada tag com o nome da receita deve ter o `data-testid="${index}-card-name"`.
  * Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras (ou menos, se não hoverem 12).

  O que será verificado:
  ```
  - Caso mais de uma comida seja encontrada, mostrar as 12 primeiras
  - Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras
  ```

#### :footprints:Requisito 18 - Exiba um `alert` caso nenhuma receita seja encontrada

  O alert deve contendo o texto "Sorry, we haven't found any recipes for these filters."

  O que será verificado:
  ```
  - Caso nenhuma comida seja encontrada o alert deve ser exibido
  - Caso nenhuma bebida seja encontrada o alert deve ser exibido
  ```

## Menu inferior

#### :footprints:Requisito 19 - Implemente os elementos do menu inferior respeitando os atributos descritos no protótipo

  Todos os elementos devem respeitar os atributos descritos no protótipo para o menu inferior disponível na tela principal de receitas

  **Observações técnicas**

  * O menu inferior deve ter possuir o atributo `data-testid="footer"`;
  * O elemento que leva para a página de bebidas deve possuir o atributo `data-testid="drinks-bottom-btn"`;
  * O elemento que leva para a página de explorar deve possuir o atributo `data-testid="explore-bottom-btn"`;
  * O elemento que leva para a página de comidas deve possuir o atributo `data-testid="food-bottom-btn"`.

  O que será verificado:
  ```
  - Tem os data-testids footer, drinks-bottom-btn, explore-bottom-btn e food-bottom-btn
  ```

#### :footprints:Requisito 20 - Posicione o menu inferior de forma fixa e apresente 3 ícones: um para comidas, um para bebidas e outro para exploração

  **Observações técnicas**

  * O menu inferior deve ficar fixado sempre ao final da página;
  * Apresenta os ícones corretos (drinkIcon.svg, exploreIcon.svg e mealIcon.svg, disponíveis na pasta `src/images/`).

  O que será verificado:
  ```
  - O menu inferior deve ficar fixado sempre ao final da página
  - Apresenta os ícones corretos
  ```

#### :footprints:Requisito 21 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo

O menu inferior deve aparecer somente nas telas indicas no protótipo, como a de comida, de explorar e de perfil.

  O que será verificado:
  ```
  - Não tem footer na tela de login
  - Tem footer na tela de principal de receitas de comidas
  - Tem footer na tela de principal de receitas de bebidas
  - Não tem footer na tela de detalhes de uma receita de comida
  - Não tem footer na tela de detalhes de uma receita de bebida
  - Não tem footer na tela de receita em progresso de comida
  - Não tem footer na tela de receita em progresso de bebida
  - Tem footer na tela de explorar
  - Tem footer na tela de explorar comidas
  - Tem footer na tela de explorar bebidas
  - Tem footer na tela de explorar comidas por ingrediente
  - Tem footer na tela de explorar bebidas por ingrediente
  - Tem footer na tela de explorar comidas por nacionalidade
  - Tem footer na tela de perfil
  - Não tem footer na tela de receitas feitas
  - Não tem footer na tela de receitas favoritas
  ```

#### :footprints:Requisito 22 - Redirecione a pessoa usuária para uma lista de cocktails ao clicar no ícone de bebidas

O que será verificado:
```
- Redireciona para a rota correta
```

#### :footprints:Requisito 23 - Redirecione a pessoa usuária para a tela de explorar ao clicar no ícone de exploração

O que será verificado:
```
- Redireciona para a rota correta
```

#### :footprints:Requisito 24 - Redirecione a pessoa usuária para uma lista de comidas ao clicar no ícone de comidas

O que será verificado:
```
- Redireciona para a rota correta
```

## Tela principal de receitas

 - **Observação:** lembre de componentizar muito bem os elementos em React nessa tela para evitar problemas de lógica e de complexidade ;).

#### :footprints:Requisito 25 - Implemente os elementos da tela principal de receitas respeitando os atributos descritos no protótipo

O que será verificado:
```
- A tela tem os data-testids de todos os 12 cards da tela de comidas
- A tela tem os data-testids de todos os 12 cards da tela de bebidas
```

#### :footprints:Requisito 26 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

O Card de receita deve conter sua foto (`strMealThumb` ou `strDrinkThumb`) e seu nome (`strMeal` ou `strDrink`).

  **Observações técnicas**

  * Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  * Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`.

O que será verificado:
```
- Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas
- Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas
```

#### :footprints:Requisito 27 - Implemente os botões de categoria para serem utilizados como filtro

Cada botão deve conter o atributo prefixado `data-testid=${categoryName}-category-filter` e devem ser exibidas apenas as 5 primeiras categorias retornadas da API.

  **Observações técnicas**

  * Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
  * Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`.

O que será verificado:
```
- Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida
- Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida
```

#### :footprints:Requisito 28 - Implemente o filtro das receitas através da API ao clicar no filtro de categoria

As receitas, filtradas por categorias, devem ser obtidas através da API de [comidas](https://www.themealdb.com/api.php) ou [bebidas](https://www.thecocktaildb.com/api.php), utilizando para as duas API's os endpoints de `Filter by Category`.

  O que será verificado:
  ```
  - Caso as receitas sejam de comida e a categoria seja "Beef", deve-se carregar as 12 primeiras receitas da categoria "Beef"
  - Caso as receitas sejam de comida e a categoria seja "Breakfast", deve-se carregar as 12 primeiras receitas da categoria "Breakfast"
  - Caso as receitas sejam de comida e a categoria seja "Chicken", deve-se carregar as 12 primeiras receitas da categoria "Chicken"
  - Caso as receitas sejam de comida e a categoria seja "Dessert", deve-se carregar as 12 primeiras receitas da categoria "Dessert"
  - Caso as receitas sejam de comida e a categoria seja "Goat", deve-se carregar as 12 primeiras receitas da categoria "Goat"
  - Caso as receitas sejam de bebida e a categoria seja "Ordinary Drink", deve-se carregar as 12 primeiras receitas da categoria "Ordinary Drink"
  - Caso as receitas sejam de bebida e a categoria seja "Cocktail", deve-se carregar as 12 primeiras receitas da categoria "Cocktail"
  - Caso as receitas sejam de bebida e a categoria seja "Milk / Float / Shake", deve-se carregar as 12 primeiras receitas da categoria "Milk / Float / Shake"
  - Caso as receitas sejam de bebida e a categoria seja "Other/Unknown", deve-se carregar as 12 primeiras receitas da categoria "Other/Unknown"
  - Caso as receitas sejam de bebida e a categoria seja "Cocoa", deve-se carregar as 12 primeiras receitas da categoria "Cocoa"
  ```
  
**Atenção:** Caso a categoria retorne apenas um resultado, **NÃO** deve ser feito o redirecionamento para a página de detalhes.

#### :footprints:Requisito 29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro

  O que será verificado:
  ```
  - Caso as receitas sejam de comida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro
  - Caso as receitas sejam de bebida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro
  ```

#### :footprints:Requisito 30 - Implemente o filtro de categoria para que apenas um seja selecionado por vez

Ou seja, se outro filtro de categoria for selecionado, ele deve substituir o anterior.

  O que será verificado:
  ```
  - Caso as receitas sejam de comida apenas um filtro de categoria deve poder ser selecionado por vez
  - Caso as receitas sejam de bebida apenas um filtro de categoria deve poder ser selecionado por vez
  ```

#### :footprints:Requisito 31 - Desenvolva o filtro de categorias com a opção de filtrar por todas as categorias

Ou seja, retornando novamente todas as receitas. O nome do filtro deve ser "All", ele deve possuir `data-testid=All-category-filter`.

  O que será verificado:
  ```
  - Caso as receitas sejam de comida deve existir a opção de filtrar por todas as categorias
  - Caso as receitas sejam de bebida deve existir a opção de filtrar por todas as categorias
  ```

#### :footprints:Requisito 32 - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

  Além de dizer se a pessoa veio da tela de comidas ou de bebidas. Exemplo: `/foods/{id-da-receita}`.

  O que será verificado:
  ```
  - Caso as receitas sejam de comida a rota deve mudar para a tela de detalhes da receita
  - Caso as receitas sejam de bebida a rota deve mudar para a tela de detalhes da receita
  ```

## Tela de detalhes de uma receita
 - **Observação:** lembre de componentizar muito bem os elementos em React nessa tela para evitar problemas de lógica e de complexidade ;).

#### :footprints:Requisito 33 - Implemente os elementos da tela de detalhes de uma receita respeitando os atributos descritos no protótipo

A verificação será feita a partir dos atributos data-testids:

  * A foto deve possuir o atributo `data-testid="recipe-photo"`;
  * O título deve possuir o atributo `data-testid="recipe-title"`;
  * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
  * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
  * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
  * Os ingredientes devem possuir o atributo `data-testid="${index}-ingredient-name-and-measure"`;
  * O texto de instruções deve possuir o atributo `data-testid="instructions"`;
  * O vídeo, presente somente na tela de comidas, deve possuir o atributo `data-testid="video"`;
  * O card de receitas recomendadas deve possuir o atributo `data-testid="${index}-recomendation-card"`;
  * O botão de iniciar receita deve possuir o atributo `data-testid="start-recipe-btn"`;

  O que será verificado:
  ```
  - A tela de comida possui todos os atributos data-testid
  - A tela de bebidas possui todos os atributos data-testid
  ```

#### :footprints:Requisito 34 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

  **Observações técnicas**

  * Verifica se a requisição para a API de comidas foi realizada. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id-da-receita}`;
  * Verifica se a requisição para a API de bebidas foi realizada. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id-da-receita}`.

  O que será verificado:
  ```
  - Verifica se a requisição para a API de comidas foi realizada
  - Verifica se a requisição para a API de bebidas foi realizada
  ```

#### :footprints:Requisito 35 - Desenvolva a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações

A verificação será feita através das receitas retornadas pela API, como por exemplo, o texto dos ingredientes e das instruções.

  Lembre-se: O vídeo do youtube só deve estar disponível para receitas de comida, já que não é retornado pela [API de bebidas](https://www.thecocktaildb.com/api.php).

  O que será verificado:
  ```
  - Verifica se os elementos descritos no protótipo existem na tela de detalhes de comida
  - Verifica se os elementos descritos no protótipo existem na tela de detalhes de bebida
  ```

#### :footprints:Requisito 36 - Implemente as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa

  **Observações técnicas**

  * Verifica se a requisição para a API de bebidas foi realizada. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  * Verifica se a requisição para a API de comidas foi realizada. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s=`.

  O que será verificado:
  ```
  - Verifica se a requisição para a API de bebidas foi realizada
  - Verifica se a requisição para a API de comidas foi realizada
  ```

#### :footprints:Requisito 37 - Implemente os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`

  **Observações técnicas**

  * Verifica se existem todas as recomendações na tela de detalhes de uma comida. Apenas as 6 primeiras bebidas devem ser exibidas;
  * Verifica se existem todas as recomendações na tela de detalhes de uma bebida. Apenas as 6 primeiras comidas devem ser exibidas.

  O que será verificado:
  ```
  - Verifica se existem todas as recomendações na tela de detalhes de uma comida
  - Verifica se existem todas as recomendações na tela de detalhes de uma bebida
  ```

#### :footprints:Requisito 38 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

O que será verificado:
  ```
  - Verifica posicionamento do botão na tela de detalhes de comida
  - Verifica posicionamento do botão na tela de detalhes de bebida
  ```

#### :footprints:Requisito 39 - Implemente a solução de forma que caso a receita já tenha sido feita, o botão "Start Recipe" deve sumir
>Obs: Lembre-se que as receitas `finalizadas` anteriormente estão salvas na chave `doneRecipes` assim como indicado na sessão [localStorage](#localstorage)!

  O que será verificado:
  ```
  - Verifica se botão de iniciar receita não é visível na tela de detalhes de uma comida
  - Verifica se botão de iniciar receita não é visível na tela de detalhes de uma bebida
  ```

#### :footprints:Requisito 40 - Implemente a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"
>Obs: Lembre-se que as receitas `iniciadas` anteriormente estão salvas na chave `inProgressRecipes` assim como indicado na sessão [localStorage](#localstorage)!

  O que será verificado:
  ```
  - Verifica botão de "Continue Recipe" na tela de detalhes de uma comida
  - Verifica botão de "Continue Recipe" na tela de detalhes de uma bebida
  ```

#### :footprints:Requisito 41 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

  O que será verificado:
  ```
  - Redireciona para tela de receita da comida em progresso
  - Redireciona para tela de receita da bebida em progresso
  ```

#### :footprints:Requisito 42 - Implemente um botão de compartilhar e um de favoritar a receita

  O que será verificado:
  ```
  - Verifica se os botões estão disponíveis na tela de detalhes de uma comida
  - Verifica se os botões estão disponíveis na tela de detalhes de uma bebida
  ```

#### :footprints:Requisito 43 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer

O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

  O que será verificado:
  ```
  - Verifica a mensagem "Link copied!" e se o link da receita da comida foi copiado para o clipboard
  - Verifica a mensagem "Link copied!" e se o link da receita da bebida foi copiado para o clipboard
  ```

#### :footprints:Requisito 44 - Implemente o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário

Os ícones dos botões podem ser encontrados em `src/images/whiteHeartIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

  O que será verificado:
  ```
  - Verifica se a comida favoritada vem com o coração preenchido
  - Verifica se a comida não favoritada vem com o coração "despreenchido"
  - Verifica se a bebida favoritada vem com o coração preenchido
  - Verifica se a bebida não favoritada vem com o coração "despreenchido"
  ```

#### :footprints:Requisito 45 - Implemente a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa

  O que será verificado:
  ```
  - Favorita a comida
  - Desfavorita a comida
  - Favorita a bebida
  - Desfavorita a bebida
  ```

#### :footprints:Requisito 46 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

  * As receitas favoritas devem ser salvas no `localStorage` na chave `favoriteRecipes` no formato `[{ id, type, nationality, category, alcoholicOrNot, name, image }]`.

  O que será verificado:
  ```
  - Verifica se após favoritar a receita de uma comida, ela é salva corretamente no localStorage
  - Verifica se após favoritar a receita de uma bebida, ela é salva corretamente no localStorage
  ```

## Tela de receita em progresso

 - **Observação:** lembre de componentizar muito bem os elementos em React nessa tela para evitar problemas de lógica e de complexidade ;).

#### :footprints:Requisito 47 - Desenvolva a tela de maneira que contenha uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidades e suas instruções

Verifica se os atributos data-testid estão presentes na tela com suas respectivas quantidades:

  * A foto deve possuir o atributo `data-testid="recipe-photo"`;
  * O título deve possuir o atributo `data-testid="recipe-title"`;
  * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
  * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
  * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
  * Os ingredientes devem possuir o atributo `data-testid=${index}-ingredient-step`, a verificação será feita pelo length do atributo.
  * O elemento de instruções deve possuir o atributo `data-testid="instructions"`;
  * O botão para finalizar a receita deve possuir o atributo `data-testid="finish-recipe-btn"`.

  O que será verificado:
  ```
  - verifica elementos de uma receita de comida
  - verifica elementos de uma receita de bebida
  ```

#### :footprints:Requisito 48 - Desenvolva um checkbox para cada item da lista de ingredientes

  O que será verificado:
  ```
  - todos os ingredientes de uma receita de comida possuem um checkbox
  - todos os ingredientes de uma receita de bebida possuem um checkbox
  ```

#### :footprints:Requisito 49 - Implemente uma lógica que, ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

Ao clicar no checkbox, o item deve ser riscado, mostrando que esse passo foi finalizado

  O que será verificado:
  ```
  - verifica se é possível marcar todos os passos da receita de comida
  - verifica se é possível marcar todos os passos da receita de bebida
  ```

#### :footprints:Requisito 50 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

O progresso das receitas devem ser salvos em `localStorage` na chave` inProgressRecipes` no formato especificado na seção [`localStorage`](#localStorage);

  **Observações técnicas**

  O que será verificado:
  ```
  - Salva o progresso de uma receita de comida em andamento
  - Salva o progresso de uma receita de bebida em andamento
  ```

#### :footprints:Requisito 51 - Desenvolva a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui

  O que será verificado:
  ```
  - verifica se os botões estão disponíveis na tela de detalhes de uma comida
  - verifica se os botões estão disponíveis na tela de detalhes de uma bebida
  - verifica a mensagem "Link copied!" e se o link da receita da comida foi copiado para o clipboard
  - verifica a mensagem "Link copied!" e se o link da receita da bebida foi copiado para o clipboard
  - verifica comida favoritada
  - verifica comida não favoritada
  - verifica bebida favoritada
  - verifica bebida não favoritada
  - favorita comida
  - desfavorita comida
  - favorita bebida
  - desfavorita bebida
  - favorita receita de uma comida
  - favorita receita de uma bebida
  ```

#### :footprints:Requisito 52 - Implemente a solução de maneira que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

  O botão deve ficar desabilitado em quanto todos os checkboxs não forem marcados. O botão deve ficar fixo na parte de baixo da tela o tempo todo, semelhante ao botão de "Start Recipe"

  O que será verificado:
  ```
  - verifica se botão para finalizar está desabilitado em receitas de comidas
  - verifica se botão para finalizar está desabilitado em receitas de bebidas
  - verifica se botão para finalizar está habilitado em receitas de comidas
  - verifica se botão para finalizar está habilitado em receitas de bebidas
  ```

#### :footprints:Requisito 53 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

  O que será verificado:
  ```
  - Redireciona após concluir uma receita de comida;
  - Redireciona após concluir uma receita de bebida.
  ```

## Tela de receitas feitas

#### :footprints:Requisito 54 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

  **Observações técnicas**

  * Todos os data-testids estão presentes:
    * O botão de filtro `All` deve ter o atributo `data-testid="filter-by-all-btn"`;
    * O botão de filtro `Food` deve ter o atributo `data-testid="filter-by-food-btn"`;
    * O botão de `Drinks` deve ter o atributo `data-testid="filter-by-drink-btn"`;
    * O imagem do card de receita deve ter o atributo `data-testid="${index}-horizontal-image"`;
    * O texto da categoria da receita deve ter o atributo `data-testid="${index}-horizontal-top-text"`;
    * O texto do nome da receita deve ter o atributo `data-testid="${index}-horizontal-name"`;
    * O texto da data que a receita foi feita deve ter o atributo `data-testid="${index}-horizontal-done-date"`;
    * O elemento de compartilhar a receita deve ter o atributo `data-testid="${index}-horizontal-share-btn"`;
    * As `tags` da receita devem possuir o atributo `data-testid=${index}-${tagName}-horizontal-tag`;

  O que será verificado:
  ```
  - Todos os data-testids estão disponíveis
  ```

#### :footprints:Requisito 55 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

  **Observações técnicas**

  * O card possui os atributos corretos de uma comida

  O que será verificado:
  ```
  - O card possui os atributos corretos de uma comida
  ```

#### :footprints:Requisito 56 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

  O que será verificado:
  ```
  - O card possui os atributos corretos de uma bebida
  ```

#### :footprints:Requisito 57 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

  O que será verificado:
  ```
  - Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!";
  - A URL da tela de detalhes da receita é copiada para o clipboard.
  ```

#### :footprints:Requisito 58 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

Os nomes dos botões devem ser "Food", "Drinks" e "All", respectivamente.

  **Observações técnicas**

  * Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
  * Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
  * Ao clicar no botão "All" o filtro deve ser removido.

  O que será verificado:
  ```
  - Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
  - Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
  - Ao clicar no botão "All" o filtro deve ser removido.
  ```

#### :footprints:Requisito 59 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

  O que será verificado:
  ```
  - Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
  - Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.
  ```

## Tela de receitas favoritas

#### :footprints:Requisito 60 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo

  O que será verificado:
  ```
  - Todos os data-testids, cumulativo com os atributos em comum com a tela de receitas feitas, estão disponíveis
  ```

#### :footprints:Requisito 61 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, um botão de compartilhar e um de "desfavoritar"

Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

  O que será verificado:
  ```
  - O card possui os atributos corretos de uma comida
  ```

#### :footprints:Requisito 62 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

  O que será verificado:
  ```
  - O card possui os atributos corretos de uma bebida.
  ```

#### :footprints:Requisito 63 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

  O que será verificado:
  ```
  - Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!";
  - A URL da tela de detalhes da receita é copiada para o clipboard.
  ```

#### :footprints:Requisito 64 - Desenvolva a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

  O que será verificado:
  ```
  - Ao clicar no botão de "desfavoritar" a respectiva receita é removida da tela;
  - Ao clicar no botão de "desfavoritar" a respectiva receita é removida do `localStorage`.
  ```

#### :footprints:Requisito 65 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

Os nomes dos botões devem ser "Food", "Drinks" e "All", respectivamente

  O que será verificado:
  ```
  - Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
  - Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
  - Ao clicar no botão "All" o filtro deve ser removido.
  ```

#### :footprints:Requisito 66 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

  O que será verificado:
  ```
  - Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
  - Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.
  ```

## Tela de explorar

#### :footprints:Requisito 67 - Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo

  O que será verificado:
  ```
  - Tem os data-testids explore-foods e explore-drinks.
  ```

#### :footprints:Requisito 68 - Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas

Verifica se o atributo `data-testid="explore-foods"` possui o texto "Explore Foods" e se o `data-testid="explore-drinks"` possui o texto "Explore Drinks".

  O que será verificado:
  ```
  - O nomes dos botões devem ser "Explore Foods" e "Explore Drinks"
  ```

#### :footprints:Requisito 69 - Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas

  O que será verificado:
  ```
  - Ao clicar no botão "Explore Foods" a rota muda para a página de explorar comidas;
  - Ao clicar no botão "Explore Drinks" a rota muda para a página de explorar bebidas.
  ```

## Tela de explorar bebidas ou comidas

#### :footprints:Requisito 70 - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo

  O que será verificado:
  ```
  - Tem os data-testids corretos para a tela de explorar comidas;
  - Tem os data-testids corretos para a tela de explorar bebidas.
  ```

#### :footprints:Requisito 71 - Desenvolva 3 botões: um para explorar por ingrediente, um para explorar por nacionalidade e um para pegar uma receita aleatória

O nomes dos botões devem ser:
1. "By Ingredient" com o atributo `data-testid="explore-by-ingredient"`;
2. "By Nationality" com o atributo `data-testid="explore-by-nationality"` e;
3. "Surprise me!" com o atributo `data-testid="explore-surprise"`.

Obs: se a opção escolhida for explorar bebidas, o botão para explorar por nacionalidade ("By Nationality") não deve estar disponível.

  O que será verificado:
  ```
  - Tem os botões "By Ingredient", "By Nationality" e "Suprise me!" para a tela de explorar comidas;
  - Tem apenas os botões "By Ingredient" e "Surprise me!" para a tela de explorar bebidas.
  ```

#### :footprints:Requisito 72 - Redirecione a pessoa usuária ao clicar em "By Ingredient", para a tela de explorar por ingredientes

  O que será verificado:
  ```
  - Ao clicar no botão "By Ingredient" da tela de *explorar comidas* a rota muda para a página de explorar comidas por ingrediente;
  - Ao clicar no botão "By Ingredient" da tela de *explorar bebidas* a rota muda para a página de explorar bebidas por ingrediente.
  ```

#### :footprints:Requisito 73 - Redirecione a pessoa usuária ao clicar em "By Nationality", a rota deve mudar para tela de explorar por nacionalidades

  O que será verificado:
  ```
  - A rota deve mudar para tela de explorar por nacionalidades
  ```

#### :footprints:Requisito 74 - Redirecione a pessoa usuária ao clicar em "Surprise me!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API

  **Observações técnicas**

  * Ao clicar no botão "Surprise me!" da tela de *explorar comidas* a rota muda para a página de detalhes de uma comida aleatória obtida através do endpoint `https://www.themealdb.com/api/json/v1/1/random.php`;
  * Ao clicar no botão "Surprise me!" da tela de *explorar bebidas* a rota muda para a página de detalhes de uma bebida aleatória obtida através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/random.php`.

  O que será verificado:
  ```
  - Ao clicar no botão "Surprise me!" da tela de explorar comidas a rota muda para a página de detalhes de uma comida aleatória
  - Ao clicar no botão "Surprise me!" da tela de explorar bebidas a rota muda para a página de detalhes de uma bebida aleatória
  ```

## Tela de explorar ingredientes

#### :footprints:Requisito 75 - Implemente os elementos da tela de explorar ingredientes respeitando os atributos descritos no protótipo

  A tela deve possuir os atributos:
  - `data-testid="${index}-ingredient-card"` relacionado ao card do ingrediente;
  - `data-testid="${index}-card-img"` relacionado a imagem do ingrediente e;
  - `data-testid="${index}-card-name"` relacionado ao nome do ingrediente.

  O que será verificado:
  ```
  - Tem os data-testids corretos para a tela de explorar comidas por ingredientes;
  - Tem os data-testids corretos para a tela de explorar bebidas por ingredientes.
  ```

#### :footprints:Requisito 76 - Desenvolva cards para os 12 primeiros ingredientes, de forma que cada card contenha o nome do ingrediente e uma foto

  O que será verificado:
  ```
  - Tem o nome e a foto corretos para a tela de explorar comidas por ingredientes;
  - Tem o nome e a foto corretos para a tela de explorar bebidas por ingredientes.
  ```

#### :footprints:Requisito 77 -  Redireciona a pessoa usuária ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas mas mostrando apenas as receitas que contém o ingrediente escolhido

  O que será verificado:
  ```
  - Ao clicar no card do ingrediente da tela de explorar comidas por ingrediente a rota muda para a tela principal de receitas filtrada pelo ingrediente;
  - Ao clicar no card do ingrediente da tela de explorar bebidas por ingrediente a rota muda para a tela principal de receitas filtrada pelo ingrediente.
  ```

## Tela de explorar por nacionalidades

#### :footprints:Requisito 78 - Implemente os elementos da tela de explorar por nacionalidades respeitando os atributos descritos no protótipo

  O elemento de dropdown deve possuir o atributo `data-testid="explore-by-nationality-dropdown"` e suas opções devem possuir o atributo `[data-testid="${nacionalidade}-option"]`.

  O que será verificado:
  ```
  - A tela tem os data-testids de todos os 12 cards e de todas as nacionalidades.
  ```

#### :footprints:Requisito 79 - Desenvolva as mesmas especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown

  O elemento de dropdown deve possuir o atributo `data-testid="explore-by-nationality-dropdown"`.

  O que será verificado:
  ```
  - Devem ser carregadas as 12 primeiras receitas de comidas;
  - Ao selecionar um filtro de nacionalidade, todas as receitas devem mudar para os dados filtrados da API;
  - Ao clicar no card, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL.
  ```

#### :footprints:Requisito 80 - Implemente o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro

  O que será verificado:
  ```
  - No dropdown devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All";
  - A opção "All" retorna as receitas sem nenhum filtro.
  ```

#### :footprints:Requisito 81 - Implemente a rota que deve ser apenas `/explore/foods/nationalities`

A rota `/explore/drinks/nationalities` não deve estar disponível, retornando um erro de "Not Found".

  O que será verificado:
  ```
  - Ao acessar a rota ela retorna um erro de "Not Found".
  ```

## Tela de perfil

#### :footprints:Requisito 82 - Implemente os elementos da a tela de perfil respeitando os atributos descritos no protótipo

  **Observações técnicas**

  * Todos o data-testid do email e de todos os botões
    * O elemento de email deve possuir o atributo `data-testid="profile-email"`;
    * O botão para "Done Recipes" deve possuir o atributo `data-testid="profile-done-btn"`;
    * O botão para "Favorite Recipes" deve possuir o atributo `data-testid="profile-favorite-btn"`;
    * O botão de "Logout" deve possuir o atributo `data-testid="profile-logout-btn"`.
  
  O que será verificado:
  ```
  - Todos o data-testid do email e de todos os botões.
  ```

#### :footprints:Requisito 83 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível
  
  O que será verificado:
  ```
  - O e-mail armazenado em localStorage está visível.
  ```

#### :footprints:Requisito 84 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

  O que será verificado:
  ```
  - A tela contêm todos os 3 botões.
  ```

#### :footprints:Requisito 85 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

  O que será verificado:
  ```
  - Redireciona para a rota correta.
  ```

#### :footprints:Requisito 86 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas

  O que será verificado:
  ```
  - Redireciona para a rota correta.
  ```
#### :footprints:Requisito 87 - Redirecione a pessoa usuária que, ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login

  O que será verificado:
  ```
  - Limpa todas as chaves da localStorage;
  - A rota muda para a tela de login.
  ```


***Obs: A maneira como as APIs devem ser estruturadas segue os seguintes modelos: https://www.themealdb.com/api.php e https://www.thecocktaildb.com/api.php***

