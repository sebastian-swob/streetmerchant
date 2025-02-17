import {Store} from './store';


export const LdlcCh: Store = {
    currency: 'CHF',
    labels: {
        inStock: {
            container: '.stock',
            text: ['stock'],
          },
        outOfStock: {
            container: '.stock',
            text: ['rupture'],
          },
      maxPrice: {
        container: '.priceView-price',
      },
    },