export const ProductTable = {
  name: 'productTable',
  props: {
    products: Array
  },
  methods: {
    splitApplications(s) {
      return s.split('|')
    }
  },
  template: `
  <div>
    <div class="product-table">
      <div v-for="prod in products" class="product-table__item">
      <img v-bind:src="'http://localhost:3010' + prod.field_images" alt="{{prod.title}}" />
        <h3><a v-bind:href="prod.product_link" >{{prod.title}}</a></h3>
        <ul>
          <li v-for="app in prod.applications">{{app}}</li>
        </ul>
      </div>
    </div>
  </div>`
}