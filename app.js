import Vue from './node_modules/vue/dist/vue.min';
const axios = require('axios');
require('./sass/main-style.scss');

new Vue({
  el: '#vue-app',
  data() {
    return {
      baseURL: "https://ergo-pricebook-public.s3.us-east-2.amazonaws.com/",
      pricebooks: pricebooks,
      chosenBook: null,
      skuFilter: '',
      loaded: false,
      prices: [],
      filteredPrices: []
    }
  },
  methods: {
    /**
     * Remove JSON file extension.
     *
     * @param {string} filename
     * @return {string}
     */
    stripExtension(filename) {
      return filename.replace(".json", "")
    },
    /**
     * Lookup file associated with pricebook.
     */
    setPricebook: function() {
      this.loaded = true;
      let s3URL = this.baseURL + this.chosenBook
      axios({
        method: 'get',
        url: s3URL,
        responseType: 'json'
      })
        .then(resp => {
          let prices = [];
          for (let i = 0; i < resp.data.length; i++) {
            prices.push(resp.data[i])
          }
          this.prices = prices;
          this.filteredPrices = prices;
        })
    },
    /**
     * Filter prices by sku.
     */
    filterBySku: function() {
      if (this.skuFilter == '' || this.prices.length == 0) {
        return;
      }
      let allPrices = this.prices
      let filter = this.skuFilter;
      let filtered = allPrices.filter(function(e) {
        return e.sku == filter;
      })
      this.filteredPrices = filtered;
    },
    /**
     * Clear sku filter.
     */
    clearFilter: function() {
      this.skuFilter = '';
      this.filteredPrices = this.prices;
    }
  },
  template: `
  <div class="app-main">
    <h1>Pricebooks</h1>
    <form id="pricebook-navigator" @submit.prevent="setPricebook">
      <label for="pricebook-selector">Pricebook</label>
      <select name="pricebook-selector" id="pricebook-selector" v-model="chosenBook">
        <option disabled value="">Choose a pricebook</option>
        <option v-for="b in pricebooks" v-bind:value="b">{{ stripExtension(b) }}</option>
      </select>
      <button type="submit" @click="setPricebook">Load pricebook</button>
    </form>

    <div v-if="loaded">
      <h3>{{ stripExtension(chosenBook) }}</h3>
      <form id="pricebook-filter" @submit.prevent="filterBySku">
        <label for="price-filter">Filter</label>
        <input type="text" name="price-filter" id="price-filter" placeholder="SKU" v-model="skuFilter"></input>
        <button type="submit" @click="filterBySku">Submit</button>
        <button type="submit" @click="clearFilter">Reset</button>
      </form>
    </div>

    <div v-if="filteredPrices.length">
      <ul class="prices-list">
        <li v-for="p in filteredPrices">{{ p.sku }} - {{ "$" + p.price }}</li>
      </ul>
    </div>
  </div>`
})
