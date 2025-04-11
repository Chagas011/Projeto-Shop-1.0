export enum Categorias {
  Iphone = "IPHONE",
  MacBook = "MACBOOK",
  Watch = "WATCH",
  Sale = "SALE",
}
export interface Products {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  image: string;
  star: string;
  categoria: Categorias;
}
