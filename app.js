import Vue from './node_modules/vue/dist/vue.min';
// const axios = require('axios');
require('./sass/main-style.scss');

new Vue({
  el: '#vue-app',
  data() {
    return {
      colors: colors,
      chosenColor: null
    }
  },
  methods: {
    /**
     * Update color value.
     *
     * @param {string} colorName
     */
    setColor(colorName) {
      this.chosenColor = colorName;
    },
    /**
     * Reset color value to initial state.
     */
    unset() {
      this.chosenColor = null
    }
  },
  template: `
  <div class="app-main">
    <h1>Vue app is loaded</h1>
    <ul class="button-list">
      <li v-for="c in colors">
        <button @click="setColor(c)">{{c}}</button>
      </li>
      <li>
        <button @click="unset" :disabled="chosenColor == null">hide</button>
      </li>
    </ul>
    <div id="chosen-color" v-if="chosenColor">
      <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" v-bind:fill="chosenColor"></circle>
      </svg>
    </div>
  </div>`
})
