export interface IHistory {
  id: number;
  text: string;
}

const MockHistory: IHistory[] = [
  {
    id: 1,
    text: "No ano de 2006 foi inaugurada a lanchonete Papa Lanches, que além de trazer os sabores tradicionais de lanches traria outras opções de misturas e sabores.",
  },
  {
    id: 2,
    text: "Localizada desde sua inauguração na Rua Lima e Silva 453, no bairro Cidade Baixa, na cidade de Porto alegre, a lanchonete tornou-se um ponto de encontro para clientes que buscam um lanche rápido, pratico e com diversidades, oferece os tradicionais cheeseburgers, baurus e cachorro quente. A partir do ano de 2008 a empresa passou a oferecer pizzas ala carte, assim ocorreu a troca do nome para Papa Lanche e Pizzas. Além de oferecer um espaço para o cliente fazer seu lanche ou até mesmo fazer uma refeição que atualmente também é servido pratos durante o dia, a lanchonete também disponibiliza serviços de delivery, oferecendo ao cliente mais uma alternativa de ter seu lanche sem se deslocar.",
  },
  {
    id: 3,
    text: " No ano de 2009 a marca inicia sua expansão, quando foi inaugurado sua segunda casa também localizado no bairro Cidade Baixa, na rua João Alfredo, que tem como foco principal o atendimento ao balcão. No de 2011 foi inaugurado o Papa Lanches na zona norte de Porto Alegre, no bairro Sarandi, que tem como principal serviço a delivery. Por fim, no ano de 2015 a marca abre sua primeira loja em Viamão, na Rua Salgado Filho 9815.",
  },
];

export { MockHistory };
