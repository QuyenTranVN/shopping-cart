import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './components/shopping-cart/products/product-item/product-item.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductItemListComponent } from './components/shopping-cart/products/product-item-list/product-item-list.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/shop',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ShoppingCartComponent,
    children: [
      {
        path: '',
        component: ProductItemComponent,
        pathMatch: 'full',
      },
      {
        path: 'productItemList/:id',
        component: ProductItemListComponent,
      },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
