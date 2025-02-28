interface ITabItem {
  key: string;
  href: string;
}

const tabItens: ITabItem[] = [
  { key: "Início", href: "/" },
  { key: "Cardápio", href: "/cardapio" },
  { key: "Contato", href: "/contato" },
];

export { tabItens };
