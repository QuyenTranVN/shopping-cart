export class Category {
  public title: string;
  public quantity: number;
  public imagePath: string;

  constructor(title: string, quant: number, imagePath: string) {
    this.title = title;
    this.quantity = quant;
    this.imagePath = imagePath;
  }
}
