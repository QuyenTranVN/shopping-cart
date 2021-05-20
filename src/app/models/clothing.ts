export class Clothing {
  id: number;
  name: string;
  category: string;
  price: number;
  imageFront: string;
  imageBack: string;
  constructor(
    id: number,
    name: string,
    category: string,
    price: number,
    imageFront: string,
    imageBack: string
  ) {
    this.name = name;
    this.id = id;
    this.imageFront = imageFront;
    this.category = category;
    this.price = price;
    this.imageBack = imageBack;
  }
}
