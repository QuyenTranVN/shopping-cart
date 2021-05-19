import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
import { SharedComponent } from './components/shared/shared.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from 'src/app/components/shopping-cart/filters/filters.component';
import { ProductsComponent } from './components/shopping-cart/products/products.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/products/product-item/product-item.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BreadscrumbsComponent } from 'src/app/components/shopping-cart/breadscrumbs/breadscrumbs.component';
import { WomenComponent } from './components/shopping-cart/products/product-item/women/women.component';
import { BookingComponent } from './components/shopping-cart/products/product-item/booking/booking.component';
import { MenComponent } from './components/shopping-cart/products/product-item/men/men.component';
import { BagComponent } from './components/shopping-cart/products/product-item/bag/bag.component';
import { MusicComponent } from './components/shopping-cart/products/product-item/music/music.component';
import { PosterComponent } from './components/shopping-cart/products/product-item/poster/poster.component';
import { ShoesComponent } from './components/shopping-cart/products/product-item/shoes/shoes.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClothingComponent } from './components/shopping-cart/products/product-item/clothing/clothing.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SharedComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductsComponent,
    CartItemComponent,
    ProductItemComponent,
    NavComponent,
    BreadscrumbsComponent,
    ClothingComponent,
    WomenComponent,
    BookingComponent,
    MenComponent,
    BagComponent,
    MusicComponent,
    PosterComponent,
    ShoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatDividerModule,
    MatExpansionModule,
    BreadcrumbModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
