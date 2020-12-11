import Vue from './node_modules/vue/dist/vue.min';
import { ProductTable } from './ProductTable';
const axios = require('axios');
require('./sass/main-style.scss');

new Vue({
  el: '#vue-app',
  components: {
    ProductTable
  },
  data() {
    return {
      products: null,
      productIds: products,
      baseUrl: baseUrl
    }
  },
  methods: {
    toProduct(product) {
      product.applications = product.applications.split('|');
      return product;
    }
  },
  mounted() {
    // Re-enable for Drupal integration
    // let url = baseUrl + this.productIds.join(',');
    axios.get(baseUrl)
      .then(resp => {
        let products = [];
        for (let i = 0; i < resp.data.length; i++) {
          products.push(this.toProduct(resp.data[i]));
        }
        this.products = products;
      })
  },
  template: `
  <div class="app-main">
    <productTable :products="products" />
  </div>`
})
