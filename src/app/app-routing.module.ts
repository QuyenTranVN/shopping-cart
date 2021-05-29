import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { ProductItemComponent } from './components/shopping-cart/products/product-item/product-item.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { ProductItemListComponent } from './components/shopping-cart/products/product-item-list/product-item-list.component';
import { ProductItemDetailComponent } from './components/shopping-cart/products/product-item-list/product-item-detail/product-item-detail.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AddressComponent } from './components/user/profile/address/address.component';
import { AccountDetailComponent } from './components/user/profile/account-detail/account-detail.component';
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
        path: 'product-item-list/:id',
        component: ProductItemListComponent,
      },
      {
        path: 'product-item-list/:id/:idDetail',
        component: ProductItemDetailComponent,
      },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: AddressComponent,
        pathMatch: 'full',
      },
      {
        path: 'address',
        component: AddressComponent,
      },
      {
        path: 'accountDetail',
        component: AccountDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
