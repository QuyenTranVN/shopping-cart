import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'http;//api.shoppingcart.com'
  : 'http://localhost:3000';
// export const baseUrl = 'http://10.0.0.231:8000/api/public';
export const sideBarUrl = baseUrl + '/sidebar';
export const productUrl = baseUrl + '/shop';
// export const itemListUrl = baseUrl + '/category';
export const clothingUrl = baseUrl + '/clothing';
