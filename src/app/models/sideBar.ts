export class sideBar {
  id: number;
  image: string;
  name: string;
  parent_id: number;
  subCategory: Array<any>;
  constructor(
    id: number,
    image: string,
    name: string,
    parent_id: number,
    subCategory: Array<any>
  ) {
    this.name = name;
    this.image = image;
    this.subCategory = subCategory;
    this.parent_id = parent_id;
    this.id = id;
  }
}
