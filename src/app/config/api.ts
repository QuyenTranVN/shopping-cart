import { environment } from 'src/environments/environment';

// export const baseUrl = environment.production
//   ? 'http://74d76c020dc3.ngrok.io/api/public'
//   : 'http://localhost:3000';
// export const baseUrl = 'http://10.0.0.231:8000';
export const baseUrl = 'https://gumistore.herokuapp.com';

// export const baseUrl = 'http://localhost:3000';
export const apiUrl = baseUrl + '/api/public';
export const sideBarUrl = apiUrl + '/sidebar';

// export const clothingUrl = baseUrl + '/clothing';
