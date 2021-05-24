import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductItemListComponent } from './components/shopping-cart/products/product-item-list/product-item-list.component';
import { DialogComponent } from './components/shared/nav/dialog/dialog.component';
import { ProductItemDetailComponent } from './components/shopping-cart/products/product-item-list/product-item-detail/product-item-detail.component';
import { ProductDetailDialogComponent } from './components/shopping-cart/products/product-item-list/product-detail-dialog/product-detail-dialog.component';
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
    ProductItemListComponent,
    DialogComponent,
    ProductItemDetailComponent,
    ProductDetailDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatDividerModule,
    MatExpansionModule,
    BreadcrumbModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
