import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/dataShare.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  isMenu: boolean;
  constructor(private dataShare: DataShareService) {}

  ngOnInit(): void {
    this.getCheckMenu();
  }

  getCheckMenu() {
    this.dataShare.menu.subscribe((data) => {
      this.isMenu = data;
    });
  }
}
