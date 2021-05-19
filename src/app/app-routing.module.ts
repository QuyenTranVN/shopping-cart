import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { ClothingComponent } from 'src/app/components/shopping-cart/products/product-item/clothing/clothing.component';
import { WomenComponent } from 'src/app/components/shopping-cart/products/product-item/women/women.component';
import { BookingComponent } from 'src/app/components/shopping-cart/products/product-item/booking/booking.component';
import { MenComponent } from 'src/app/components/shopping-cart/products/product-item/men/men.component';
import { BagComponent } from 'src/app/components/shopping-cart/products/product-item/bag/bag.component';
import { MusicComponent } from 'src/app/components/shopping-cart/products/product-item/music/music.component';
import { PosterComponent } from 'src/app/components/shopping-cart/products/product-item/poster/poster.component';
import { ShoesComponent } from 'src/app/components/shopping-cart/products/product-item/shoes/shoes.component';
import { ProductItemComponent } from './components/shopping-cart/products/product-item/product-item.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/shop',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ShoppingCartComponent,
  },

  {
    path: 'clothing',
    component: ClothingComponent,
  },
  {
    path: 'women',
    component: WomenComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'men',
    component: MenComponent,
  },
  {
    path: 'bag',
    component: BagComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },
  {
    path: 'poster',
    component: PosterComponent,
  },
  {
    path: 'shoes',
    component: ShoesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
