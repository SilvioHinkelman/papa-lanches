import {
  adds,
  alaMinutas,
  bauruAlvorada,
  baurus,
  baurusAlvorada,
  cardCheeseBurger,
  cardCheeseBurgerTwo,
  extrass,
  fingerFood,
  fingerFoodTwo,
  hamburger,
  hamburguerAlvorada,
  hotDog,
  lunch,
  miniPasteis,
  Pasta,
  petiscosCombos,
  petiscosEspeciais,
  petiscosPorcoes,
  pratosPromo,
  pratosPromoAlmocoAlvorada,
  pratosTradicionais,
  saboresHambugueres,
  saboresoPizza,
  sizes,
  soups,
  sweetPizzas,
  tamanhoPizza,
  toasts,
  toqueMais,
  toqueMaisAlvorada,
} from "./MockItensCards";

import burgerImg from "../../../../../public/assets/home/imagesMenu/burger.jpg";
import ChesseBurgerImg from "../../../../../public/assets/home/imagesMenu/cheeseburger2.jpg";
import dogImg from "../../../../../public/assets/home/imagesMenu/Dog.jpg";
import iscasImg from "../../../../../public/assets/home/imagesMenu/Iscas.jpg";
import bauruImg from "../../../../../public/assets/home/imagesMenu/bauru.jpg";
import pizzaImg from "../../../../../public/assets/home/imagesMenu/pizza.jpg";
import promosImg from "../../../../../public/assets/home/imagesMenu/promos.png";
import torradaImg from "../../../../../public/assets/home/imagesMenu/torrada.jpg";

import { StaticImageData } from "next/image";

export type TypeMenu = {
  id: number;
  img?: StaticImageData;
  title: string;
  ingredient?: string;
  menus: typeFoods[];
};

type typeFoods = {
  id: number;
  description?: string;
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
    img: ChesseBurgerImg,
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
      { id: 5, subtitleCard: "Iscas na chapa", types: fingerFood },
      { id: 6, subtitleCard: "Petiscos Combos", types: petiscosCombos },
      { id: 7, subtitleCard: "Petiscos Porções", types: petiscosPorcoes },
      { id: 8, subtitleCard: "Mini Pastéis", types: miniPasteis },
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
    img: dogImg,
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
    img: pizzaImg,
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
];

export const MockMenuTwo: TypeMenu[] = [
  {
    id: 1,
    title: "Hamburger",
    img: burgerImg,
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
        types: Pasta,
      },
      {
        id: 3,
        subtitleCard: "Sopas",
        types: soups,
      },
      {
        id: 4,
        subtitleCard: "À La Minutas",
        description:
          "Pratos individuais, acompanha arroz, feijão, batatas fritas, ovo, salada mista ou maionese",
        types: lunch,
      },
      {
        id: 5,
        subtitleCard: "Adicione ao seu prato",
        types: adds,
      },
      {
        id: 6,
        subtitleCard: "Porções Extras",
        types: extrass,
      },
    ],
  },
  {
    id: 3,
    title: "Baurus",
    img: bauruImg,
    menus: [
      {
        id: 1,
        subtitleCard:
          "Pão cervejinha, ovo, alface, tomate, queijo e  maionese.",
        types: baurus,
      },
      {
        id: 2,
        subtitleCard: "Sabores exclusivos no Papa Lanches Alvorada:",
        types: baurusAlvorada,
      },
    ],
  },

  {
    id: 4,
    title: "Torradas",
    img: torradaImg,
    menus: [
      {
        id: 1,
        subtitleCard: "Pão de forma grande, presunto, queijo, ovo e maionese.",
        types: toasts,
      },
    ],
  },
  {
    id: 5,
    title: "Petiscos",
    img: iscasImg,

    menus: [
      {
        id: 1,
        types: fingerFoodTwo,
      },
    ],
  },
  {
    id: 6,
    title: "Pizzas doces",
    ingredient: "Preparada com massa caseira, leite condensado e mussarela.",
    menus: [
      {
        id: 1,
        types: sizes,
      },
      {
        id: 2,
        types: sweetPizzas,
      },
    ],
  },
  {
    id: 7,
    title: "Confira nossa promoções!!!",
    img: promosImg,
    menus: [],
  },
];

export const MockMenuMobile: TypeMenu[] = [
  {
    id: 1,
    title: "Hamburger",
    img: burgerImg,
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
    id: 11,
    title: "Cheeseburgers",
    img: ChesseBurgerImg,
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
    id: 22,
    title: "Pratos e Petiscos Especiais Papa Viamão e Alvorada",
    menus: [
      { id: 1, subtitleCard: "Pratos Promocionais", types: pratosPromo },
      { id: 2, subtitleCard: "À La Minutas", types: alaMinutas },
      { id: 3, subtitleCard: "Pratos Tradicionais", types: pratosTradicionais },
      { id: 4, subtitleCard: "Petiscos Especiais", types: petiscosEspeciais },
      { id: 5, subtitleCard: "Iscas na chapa", types: fingerFood },
      { id: 6, subtitleCard: "Petiscos Combos", types: petiscosCombos },
      { id: 7, subtitleCard: "Petiscos Porções", types: petiscosPorcoes },
      { id: 8, subtitleCard: "Mini Pastéis", types: miniPasteis },
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
        types: Pasta,
      },
      {
        id: 3,
        subtitleCard: "Sopas",
        types: soups,
      },
      {
        id: 4,
        subtitleCard: "À La Minutas",
        description:
          "Pratos individuais, acompanha arroz, feijão, batatas fritas, ovo, salada mista ou maionese",
        types: lunch,
      },
      {
        id: 5,
        subtitleCard: "Adicione ao seu prato",
        types: adds,
      },
      {
        id: 6,
        subtitleCard: "Porções Extras",
        types: extrass,
      },
    ],
  },
  {
    id: 3,
    title: "Baurus",
    img: bauruImg,
    menus: [
      {
        id: 1,
        subtitleCard:
          "Pão cervejinha, ovo, alface, tomate, queijo e  maionese.",
        types: baurus,
      },
      {
        id: 2,
        subtitleCard: "Sabores exclusivos no Papa Lanches Alvorada:",
        types: baurusAlvorada,
      },
    ],
  },
  {
    id: 33,
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
    id: 44,
    title: "Dogs",
    img: dogImg,
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
    id: 4,
    title: "Torradas",
    img: torradaImg,
    menus: [
      {
        id: 1,
        subtitleCard: "Pão de forma grande, presunto, queijo, ovo e maionese.",
        types: toasts,
      },
    ],
  },
  {
    id: 55,
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
    id: 5,
    title: "Petiscos",
    img: iscasImg,
    menus: [
      {
        id: 1,
        types: fingerFoodTwo,
      },
    ],
  },
  {
    id: 66,
    title: "Pizzas Salgadas",
    img: pizzaImg,

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
  {
    id: 6,
    title: "Pizzas doces",
    ingredient: "Preparada com massa caseira, leite condensado e mussarela.",
    menus: [
      {
        id: 1,
        types: sizes,
      },
      {
        id: 2,
        types: sweetPizzas,
      },
    ],
  },
  {
    id: 7,
    title: "Confira nossa promoções!!!",
    img: promosImg,
    menus: [],
  },
];
