import {
  alaMinutas,
  bauruAlvorada,
  cardCheeseBurger,
  cardCheeseBurgerTwo,
  hamburger,
  hamburguerAlvorada,
  hotDog,
  miniPasteis,
  petiscosCombos,
  petiscosEspeciais,
  petiscosPorcoes,
  pratosPromo,
  pratosPromoAlmocoAlvorada,
  pratosTradicionais,
  saboresHambugueres,
  saboresoPizza,
  tamanhoPizza,
  toqueMais,
  toqueMaisAlvorada,
} from "./MockItensCards";

export type TypeMenu = {
  id: number;
  title: string;
  ingredient?: string;
  menus: typeFoods[];
};

type typeFoods = {
  id: number;
  subtitleCard?: string;
  types: CheeseBurgerType[];
};

export type CheeseBurgerType = {
  id: number;
  title: string;
  ingredient?: string;
};

export const MockMenu: TypeMenu[] = [
  {
    id: 1,
    title: "Cheeseburgers",
    ingredient:
      "Pão massinha, ovo, alface, tomate, milho, ervilha, queijo, maionese e batata palha.",
    menus: [
      { id: 1, types: cardCheeseBurger },
      {
        id: 2,
        subtitleCard: "Sabores exclusivos de Alvorada",
        types: cardCheeseBurgerTwo,
      },
    ],
  },
  {
    id: 2,
    title: "Pratos e Petiscos Especiais Papa Viamão e Alvorada",
    menus: [
      { id: 1, subtitleCard: "Pratos Promocionais", types: pratosPromo },
      { id: 2, subtitleCard: "À La Minutas", types: alaMinutas },
      { id: 3, subtitleCard: "Pratos Tradicionais", types: pratosTradicionais },
      { id: 4, subtitleCard: "Petiscos Especiais", types: petiscosEspeciais },
      { id: 5, subtitleCard: "Petiscos Combos", types: petiscosCombos },
      { id: 6, subtitleCard: "Petiscos Porções", types: petiscosPorcoes },
      { id: 7, subtitleCard: "Mini Pastéis", types: miniPasteis },
    ],
  },
  {
    id: 3,
    title: "Bauru ao Prato (Papa Alvorada)",
    menus: [
      {
        id: 1,
        subtitleCard:
          "Fatias de pão de sanduíche, batatas fritas,  ovo, presunto, queijo, alface americana e tomate.",
        types: bauruAlvorada,
      },
    ],
  },
  {
    id: 4,
    title: "Dogs",
    menus: [
      {
        id: 1,
        subtitleCard:
          "Pão massinha, molho, alface, tomate, milho, ervilha, tempero verde, queijo ralado, ketchup, mostarda, maionese e batata palha.",
        types: hotDog,
      },
    ],
  },
  {
    id: 5,
    title: "Um toque a mais",
    menus: [
      {
        id: 1,
        types: toqueMais,
      },
      {
        id: 2,
        subtitleCard: "Sabores exclusivos Papa Lanches Alvoradas:",
        types: toqueMaisAlvorada,
      },
    ],
  },
  {
    id: 6,
    title: "Pizzas Salgadas",
    menus: [
      {
        id: 1,
        subtitleCard:
          "Preparada com massa caseira, molho de tomate, mussarela e orégano.",
        types: tamanhoPizza,
      },
      {
        id: 2,
        types: saboresoPizza,
      },
    ],
  },

  /*
  {
    id: 3,
    title: "Bauru ao Prato (Papa Alvorada)",
    ingredient:
      "Fatias de pão de sanduíche, batatas fritas,  ovo, presunto, queijo, alface americana e tomate.",
    types: [{ id: 1, types: cheeseBurger }],
  },
  {
    id: 4,
    title: "Dogs",
    ingredient:
      "Pão massinha, ovo, alface, tomate, milho, ervilha, queijo, maionese e batata palha.",
    types: [{ id: 1, types: cheeseBurger }],
  },
  {
    id: 5,
    title: "Um toque a mais",
    ingredient:
      "Pão massinha, ovo, alface, tomate, milho, ervilha, queijo, maionese e batata palha.",
    types: [{ id: 1, types: cheeseBurger }],
  },
  {
    id: 6,
    title: "Pizzas Salgadas",
    ingredient:
      "Preparada com massa caseira, molho de tomate, mussarela e orégano.",
    types: [{ id: 1, types: cheeseBurger }],
  }, */
];

export const MockMenuTwo: TypeMenu[] = [
  {
    id: 1,
    title: "Hamburger",
    ingredient:
      "Pão com gergelim, queijo prato, alface, tomate e molho especial.",
    menus: [
      { id: 1, types: hamburger },
      {
        id: 2,
        subtitleCard: "Adicione mais sabores ao seu lanche",
        types: saboresHambugueres,
      },
      {
        id: 3,
        subtitleCard: "Sabores exclusivos no Papa Lanches Alvorada:",
        types: hamburguerAlvorada,
      },
    ],
  },
  {
    id: 2,
    title: "Pratos do Almoço Papa Alvorada",
    menus: [
      {
        id: 1,
        subtitleCard: "Pratos Promocionais",
        types: pratosPromoAlmocoAlvorada,
      },
      {
        id: 2,
        subtitleCard: "Massas",
        types: pratosPromoAlmocoAlvorada,
      },
      {
        id: 3,
        subtitleCard: "Sopas",
        types: pratosPromoAlmocoAlvorada,
      },{
        id: 4,
        subtitleCard: "À La Minutas",
        types: pratosPromoAlmocoAlvorada,
      },{
        id:5,
        subtitleCard: "Adicione ao seu prato",
        types: pratosPromoAlmocoAlvorada,
      },{
        id: 6,
        subtitleCard: "Porções Extras",
        types: pratosPromoAlmocoAlvorada,
      },
    ],
  },
  /* {
    id: 2,
    title: "Pratos do Almoço Papa Alvorada",
    types: [{ id: 1, types: cheeseBurger }],
  },
  {
    id: 3,
    title: "Baurus",
    ingredient: "Pão cervejinha, ovo, alface, tomate, queijo e  maionese.",
    types: [{ id: 1, types: cheeseBurger }],
  },
  {
    id: 4,
    title: "Torradas",
    ingredient: "Pão de forma grande, presunto, queijo, ovo e maionese.",
    types: [{ id: 1, types: cheeseBurger }],
  },
  {
    id: 5,
    title: "Petiscos",
    types: [{ id: 1, types: cheeseBurger }],
  },
  {
    id: 6,
    title: "Pizzas Doces",
    ingredient: "Preparada com massa caseira, leite condensado e mussarela.",
    types: [{ id: 1, types: cheeseBurger }],
  }, */
];
