export class Shop {
  id: number;
  image: string;
  name: string;
  parent_id: number;
  products_count: number;

  constructor(
    id: number,
    image: string,
    name: string,
    parent_id: number,
    products_count: number
  ) {
    this.name = name;
    this.id = id;
    this.image = image;
    this.parent_id = parent_id;
    this.products_count = products_count;
  }
}
