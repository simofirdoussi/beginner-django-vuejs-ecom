<template>

      <div class="container">
        <h1>All products</h1>
        <div class="row">
          <ProductBox v-for="product in allProducts"
          v-bind:key="product.id"
          v-bind:product='product'/>
        </div>
      </div>
 
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox'

export default {
  name: 'Home',
  data() {
    return {
         allProducts: []
    }
  },
  components: {
    ProductBox  
  },
  mounted() {
    this.getAllProducts()
    document.title = 'Home | Django Ecom'
  },
  methods: {
     getAllProducts() {
      axios
        .get('http://127.0.0.1:8000/api/all-products/')
        .then(response => {
          this.allProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>